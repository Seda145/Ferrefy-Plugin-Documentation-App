/**[[ Copyright Ferrefy ]]**/


class Utility {
	constructor() {
        // Keep screenWidthMobile in sync with the less variable @screen-width-mobile
        this.screenWidthMobile = 1024;
    }
}

class CompactOption {
    constructor() {
        this.element = null;
        this.eCompactTitle = null;
        this.eCompactContent = null;
        this.bIsActive = false;
        this.bIsUrl = false;
    }

    /* Functions */

    create(inElement) {
        this.element = inElement;
        if (!this.element) {
            console.error("invalid compact element during creation");
            return;
        }
        this.bIsUrl = this.element.classList.contains("compact-option-url");
        if (this.bIsUrl) {
            // Just nothing else to do so stop here.
            return;
        }
            
        this.eCompactTitle = this.element.querySelector(".compact-title");
        if (!this.bIsUrl && this.eCompactTitle) {
            this.eCompactTitle.addEventListener("click", this.actOnClickTitle.bind(this));
            this.eCompactTitle.addEventListener("keyup", this.actOnKeyUpTitle.bind(this));
        }

        this.eCompactContent = this.element.querySelector(".compact-content");

        this.eSectionTitles = this.element.querySelectorAll(".doc-section-title");
        for (let eTitleX of this.eSectionTitles) {
            eTitleX.addEventListener("click", this.actOnClickSectionTitle.bind(this));
            eTitleX.addEventListener("keyup", this.actOnKeyUpSectionTitle.bind(this));
        }
    }

    setActive(bInActive) {
        if (this.bIsActive == bInActive) {
            // nothing may change!
            return;
        }
        if (!this.element) {
            console.error("compact element invalid.");
            return;
        }

        this.bIsActive = bInActive;

        if (this.bIsActive) {
            this.element.classList.add("active");
        }
        else {
            this.element.classList.remove("active");
        }

        let eventActiveChanged = new Event('active-changed', { bubbles: false });
        eventActiveChanged.compactOption = this;
        this.element.dispatchEvent(eventActiveChanged);
    }

    /* Events */

    actOnClickTitle(inEvent) {
        if (!this.bIsActive) {
            this.setActive(true);
        }
        else {
            if (this.eCompactContent == null) {
                return;
            }
            // If we scrolled past the beginning, click the title to scroll up. If already up, close the content.
            // If we have a parent topic url, closing means navigating "back" to that url.
            let bBeforeOption = window.scrollY < (window.scrollY + this.eCompactContent.getBoundingClientRect().top);
            if (bBeforeOption) {
                const numberOfOptions = document.querySelectorAll(".compact .compact-options .compact-option").length;
                if (numberOfOptions == 1) {
                    // If there is only one option, closing it would result in an empty page until the title is activated again. That has no use, so return.
                    // Or give it a new use, when clicked scroll all the way up, then the "return to docs" link becomes visible as well.
                    document.body.scrollIntoView();
                    return;
                }
                this.setActive(false);
            }
            else {
                this.eCompactContent.scrollIntoView();
            }
        }
    }

    actOnKeyUpTitle(inEvent) {
        if (inEvent.keyCode == 13) {
            // If this widget receives the enter key as input (key up) then simulate a click event.
            // TODO accessibility WCAG standards, firefox asks for more?
            this.actOnClickTitle(inEvent);
        } 
    }

    actOnClickSectionTitle(inEvent) {
        inEvent.target.scrollIntoView();
    }
 
    actOnKeyUpSectionTitle(inEvent) {
        if (inEvent.keyCode == 13) {
            // If this widget receives the enter key as input (key up) then simulate a click event.
            // TODO accessibility WCAG standards, firefox asks for more?
            this.actOnClickSectionTitle(inEvent);
        } 
    }
}

class Compact {
    constructor() {
        this.element = null;
        this.eCompactIntro = null;
        this.compactOptions = [];
        this.activeOption = null;
    }

    /* Functions */

    create(inElement) {
        this.element = inElement;
        if (!this.element) {
            console.error("invalid compact element during creation");
            return;
        }

        this.eCompactIntro = this.element.querySelector(".compact-intro");
        if (!this.eCompactIntro) {
            console.error("invalid compact element during creation");
            return;
        }

        for (let eCompactOptionX of this.element.querySelectorAll(".compact-option")) {
            let compactOption = new CompactOption();
            compactOption.create(eCompactOptionX);
            this.compactOptions.push(compactOption);
         
            // If the option acts as a simple url, there is no point doing anything after clicking on it as we just want to load a new page.
            if (!eCompactOptionX.classList.contains("compact-option-url")) {
                compactOption.element.addEventListener("active-changed", this.actOnCompactOptionActiveChanged.bind(this));
            }
        }

        document.addEventListener("scroll", this.actOnScroll.bind(this));
        window.addEventListener("resize", this.actOnResize.bind(this));
        this.actOnScroll(null);
        
        // If there is only 1 option, make it active.
        if (this.compactOptions.length == 1) {
            this.compactOptions[0].setActive(true);
        }
    }

    updateFixedStyle() {
        if (this.activeOption == null) {
            this.element.classList.remove("fixed-title");
            return;
        }
        // const eActiveTitle = this.activeOption.element.querySelector(".compact-title");

        // Header is fixed so get an offset.
        const eHeaderBottom = document.querySelector("#header-bottom");
        const eFooter = document.querySelector("footer");
        let headerOffset = eHeaderBottom.offsetHeight;
        let bPastIntro = window.scrollY > (window.scrollY + this.eCompactIntro.getBoundingClientRect().top + this.eCompactIntro.offsetHeight - headerOffset);
        let bAtFooter = window.scrollY > window.scrollY + eFooter.getBoundingClientRect().top - headerOffset - 100;

        if (bPastIntro) {
            // have the title fixed between end of intro and end of main.
            this.element.classList.add("fixed-title");
            if (bAtFooter) {
                this.element.classList.add("at-footer");
            }
            else {
                this.element.classList.remove("at-footer");
            }
        }
        else {
            this.element.classList.remove("fixed-title");
        }
    }

    actOnCompactOptionActiveChanged(inEvent) {
        // Currently just expecting one option to be active at a time
        // , so we deactivate anything else when a new option activates
        // , then just track one single active option.
        // If an option acts as a simple url, this method should not be used as we just want to load a new page.

        if (inEvent.compactOption && inEvent.compactOption.bIsActive) {
            this.activeOption = inEvent.compactOption;
            if (this.activeOption == null) {
                console.error("Active option but it is null");
                return;
            }

            for (let eCompactOptionX of this.compactOptions) { 
                if (eCompactOptionX != this.activeOption) {
                    if (eCompactOptionX.bIsActive) {
                        eCompactOptionX.setActive(false);
                    }
                }
            }

            this.element.classList.add("active");
            // Only auto scroll into view if a user performs the "click", which we can assume if the scroll is still at top as well.
            if (app.interactionTracker.isScrollAtTop()) {
                this.activeOption.element.scrollIntoView();
            }
        }
        else {
            this.activeOption = null;
            this.element.classList.remove("active");
            this.element.scrollIntoView();
        }

        this.updateFixedStyle();
    }

    /* Events */

    actOnScroll(inEvent) {
        this.updateFixedStyle();
    }

    actOnResize(inEvent) {
        this.actOnScroll(inEvent);
    }
}

class PluginCarousel {
	/* State */

	eCarousel = null;
	navigationIndex = 0;
	timeoutHandle = null;

	////
	// Functions
	////

	// Setup
	
	create(inECarousel) {
		/* Elements */
		this.element = inECarousel;
        this.eCarouselItems = this.element.querySelectorAll(".carousel-item");

		// Navigate to content.
		this.navTo(this.navigationIndex);

	    /* Events */
        this.element.querySelectorAll(".carousel-arrow-left").forEach((elX) => { 
            elX.addEventListener("click", this.actOnClickArrowLeft.bind(this));
            elX.addEventListener("keyup", this.actOnKeyUpArrowLeft.bind(this));
        });
        this.element.querySelectorAll(".carousel-arrow-right").forEach((elX) => { 
            elX.addEventListener("click", this.actOnClickArrowRight.bind(this));
            elX.addEventListener("keyup", this.actOnKeyUpArrowRight.bind(this));
        });
	}

	// Navigation

	navPrevious() {
		let newIndex = this.navigationIndex;
		if (newIndex != 0) {
			newIndex--;
		}
		else {
			// Wrap around
			newIndex = this.eCarouselItems.length - 1;			
		}
		this.navTo(newIndex);
	}

	navNext() {
		let newIndex = this.navigationIndex;
		if (newIndex != this.eCarouselItems.length - 1) {
			newIndex++;
		}
		else {
			// Wrap around
			newIndex = 0;
			
		}
		this.navTo(newIndex);
	}

	navTo(inIndex) {
		window.clearTimeout(this.timeoutHandle);

		if (inIndex < 0 || inIndex > this.eCarouselItems.length) {
			console.error("Content index for carousel out of array bounds.");
			return;
		}

		// All good

        this.element.classList.remove("loaded-content");

        // Update content at old nav index.
        // this.eCarouselItems[this.navigationIndex].style.visibility = "collapse";
        this.eCarouselItems[this.navigationIndex].style.display = "none";

        // Update content at new nav index.
		this.navigationIndex = inIndex;
        // this.eCarouselItems[this.navigationIndex].style.visibility = "visible";
        this.eCarouselItems[this.navigationIndex].style.display = "block";

		// console.log(this.navigationIndex);

		this.timeoutHandle = window.setTimeout(() => { 
			// Used to give CSS transitions some time, because loading content is preloaded currently (instant change).
			this.element.classList.add("loaded-content");
		}, 10);
	}

	scrollToCarousel() {
        // Must be instant because the carousel items change visibility to collapse.
        // Otherwise smooth scroll starts from a collapsed position, which looks glitchy.
		this.element.scrollIntoView({ behavior: 'instant' });
	}

    /* Events */

    actOnClickArrowLeft(inEvent) {
        this.navPrevious();
        // if (window.innerWidth < app.utility.screenWidthMobile) {
            // On screens where most / all of the carousel is visible, this annoys.
            // On a phone this is useful to get back to content without scrolling.
            this.scrollToCarousel();
        // }
    }

    actOnKeyUpArrowLeft(inEvent) {
        if (inEvent.keyCode == 13) {
            // If this widget receives the enter key as input (key up) then simulate a click event.
            // TODO accessibility WCAG standards, firefox asks for more?
            this.actOnClickArrowLeft(inEvent);
        } 
    }

    actOnClickArrowRight(inEvent) {
        this.navNext();
        // if (window.innerWidth < app.utility.screenWidthMobile) {
            // On screens where most / all of the carousel is visible, this annoys.
            // On a phone this is useful to get back to content without scrolling.
            this.scrollToCarousel();
        // }
    }

    actOnKeyUpArrowRight(inEvent) {
        if (inEvent.keyCode == 13) {
            // If this widget receives the enter key as input (key up) then simulate a click event.
            // TODO accessibility WCAG standards, firefox asks for more?
            this.actOnClickArrowRight(inEvent);
        } 
    }
}

class InteractionTracker {
	constructor() {
        this.eScrollReachables = [];
	}

    /* Functions */

    create() {
        document.addEventListener("scroll", this.actOnScroll.bind(this));
        window.addEventListener("resize", this.actOnResize.bind(this));

        this.eScrollReachables = document.querySelectorAll(".scroll-reachable");

        // Immediately make sure relevant scroll position events are processed on page load.
        this.actOnScroll(null);
    }

    isScrollAtTop() {
        // browser value isn't clamped or rounded.
        return (Math.floor(window.scrollY) <= 1);
    };

    isScrollAtBottom() {
        // browser value isn't clamped or rounded.
        return (window.scrollY >= window.scrollMaxY -1);
    };

    isScrollAtElement(inElement) {
        // inElement.getBoundingClientRect is used for the top coordinate relative to the window (no scroll).
        // inElement.offsetHeight gets the height of the element including padding and borders.
        return (window.scrollY >= (window.scrollY + inElement.getBoundingClientRect().top)
            && window.scrollY <= (window.scrollY + inElement.getBoundingClientRect().top + inElement.offsetHeight)
        );
    }

    isScrollPastElement(inElement) {
        // el.getBoundingClientRect is used for the top coordinate relative to the window (no scroll).
        // el.offsetHeight gets the height of the element including padding and borders.
        return (window.scrollY > (window.scrollY + inElement.getBoundingClientRect().top + inElement.offsetHeight));
    }

    isScrolledWindowBottomAtElement(inElement) {
        // el.getBoundingClientRect is used for the top coordinate relative to the window (no scroll).
        // el.offsetHeight gets the height of the element including padding and borders.
        return (window.scrollY + window.innerHeight > (window.scrollY + inElement.getBoundingClientRect().top));
    }

    isScrolledWindowBottomPastElement(inElement) {
        // el.getBoundingClientRect is used for the top coordinate relative to the window (no scroll).
        // el.offsetHeight gets the height of the element including padding and borders.
        return (window.scrollY + window.innerHeight > (window.scrollY + inElement.getBoundingClientRect().top + inElement.offsetHeight));
    }

    /* Events */

    actOnScroll(inEvent) {
        if (this.isScrollAtTop()) {
            document.body.classList.add('scroll-at-top');
            document.body.classList.remove('scroll-left-top');
            document.body.classList.remove('scroll-past-header-top');
            this.onScrollAtTop = new Event("on-scroll-at-top", { bubbles: false });
            document.dispatchEvent(this.onScrollAtTop);
        } else {
            document.body.classList.add('scroll-left-top');
            document.body.classList.remove('scroll-at-top');
            this.onScrollLeftTop = new Event("on-scroll-left-top", { bubbles: false });

            const el = document.getElementById("header-top")
            if (el && app.interactionTracker.isScrollPastElement(el)) {
                document.body.classList.add('scroll-past-header-top');
            }
            else {
                document.body.classList.remove('scroll-past-header-top');
            }

            document.dispatchEvent(this.onScrollLeftTop);

            if (this.isScrollAtBottom()) {
                document.body.classList.add('scroll-at-bottom');
            }
            else {
                document.body.classList.remove('scroll-at-bottom');
            }
        }

        for (let eScrollReachableX of this.eScrollReachables) {
            if (!eScrollReachableX) {
                continue;
            }

            if (this.isScrolledWindowBottomAtElement(eScrollReachableX)) {
                eScrollReachableX.classList.add("scroll-reached");
            } 
        }
    }

    actOnResize(inEvent) {
        this.actOnScroll(inEvent);
    }
}

class NavigationMenu {
    constructor() {
        this.eMobileMenuIcon = null;
        this.eNavMenu = null;
        this.eNavOverlay = null;
	}

    /* Functions */

    create() {
        this.eMobileMenuIcon = document.getElementById("mobile-menu-icon");
        this.eNavMenu = document.getElementById("header-nav-menu");
        this.eNavOverlay = document.getElementById("navigation-overlay");
        
        if (this.eMobileMenuIcon) {
            this.eMobileMenuIcon.addEventListener("click", this.actOnMobileMenuIconClick.bind(this));
            this.eMobileMenuIcon.addEventListener("keyup", this.actOnMobileMenuIconKeyUp.bind(this));
        }
        if (this.eNavOverlay) {
            this.eNavOverlay.addEventListener("click", this.actOnNavOverlayClick.bind(this));
            this.eNavOverlay.addEventListener("keyup", this.actOnNavOverlayKeyUp.bind(this));
        }
        window.addEventListener("resize", this.actOnWindowResize.bind(this));
    }

    isNavigationStyleMobile() {
        return document.body.classList.contains("mobile-nav");
    }

    setNavigationStyleMobile() {
        document.body.classList.add("mobile-nav");

        // If we are showing a banner above the header bar, we should scroll down to content to ensure the menu and mobile icon fill the screen and align top right.
        // Then disable scroll on the page.

        const eHeaderBanner = document.getElementById("header-banner");
        if (eHeaderBanner && eHeaderBanner.children.length > 0) {
            if (!app.interactionTracker.isScrollPastElement(eHeaderBanner)) {
                const eMain = document.getElementsByTagName("main")[0];
                if (eMain) {
                    eMain.scrollIntoView();
                }
            }
        }
    }

    removeNavigationStyleMobile() {
        document.body.classList.remove("mobile-nav");
    }

    /* Events */

    actOnMobileMenuIconClick(inEvent) {
        if (this.eNavMenu) {
            if (this.isNavigationStyleMobile()) {
                this.removeNavigationStyleMobile();
            }
            else {
                this.setNavigationStyleMobile();
            }
        }
    }

    actOnMobileMenuIconKeyUp(inEvent) {
        if (inEvent.keyCode == 13) {
            // If this widget receives the enter key as input (key up) then simulate a click event.
            // TODO accessibility WCAG standards, firefox asks for more?
            this.actOnMobileMenuIconClick(inEvent);
        } 
    }

    actOnNavOverlayClick(inEvent) {
        this.removeNavigationStyleMobile();
    }

    actOnNavOverlayKeyUp(inEvent) {
        if (inEvent.keyCode == 13) {
            // If this widget receives the enter key as input (key up) then simulate a click event.
            // TODO accessibility WCAG standards, firefox asks for more?
            this.actOnNavOverlayClick(inEvent);
        } 
    }

    actOnWindowResize(inEvent) {
        if (!this.isNavigationStyleMobile()) {
            return;
        }

        if (window.innerWidth > app.utility.screenWidthMobile) {
            this.removeNavigationStyleMobile();
        }
    }
}

class MyApp {
	constructor() {
        this.compacts = [];
        this.pluginCarousels = [];
        this.utility = null;
        this.interactionTracker = null;
        this.navigationMenu = null;

        console.log("Welcome! I am Roy Wierer. Some of you know me by my programmer nickname Seda145 (The creator of Road To The North). Ferrefy is the company I created to bring my Unreal Engine plugins to the marketplace (EPIC FAB).\n\nThis app provides documentation for my plugins. download the repo to a folder on your PC, then double click the /App/app.htm file to open it in your browser. It should load like a styled website, with images and scripts running. Done!\n\nThis app version builds website components from my data on demand, to work locally on your PC. This version does not contain my website exporter (I used to host just the website files). I do not allow hosting my app or parts of it like a website.\n\nWhile running the app, you can inspect the code by typing 'app' into the browser console. Everything is custom made.");
	}

    /* Functions */

    create() {
        this.utility = new Utility();

		this.interactionTracker = new InteractionTracker();
        this.interactionTracker.create();

        for (let eCompact of document.getElementsByClassName("compact")) {
            let newCompact = new Compact();
            newCompact.create(eCompact);
            this.compacts.push(newCompact)
        }

        this.navigationMenu = new NavigationMenu();
        this.navigationMenu.create();

        const eHeaderBanner = document.getElementById("header-banner");
        if (eHeaderBanner && eHeaderBanner.children.length > 0) {
            document.body.classList.add("has-banner-content");
        }

        for (let ePluginCarousel of document.getElementsByClassName("plugin-carousel")) {
            let newPluginCarousel = new PluginCarousel();
            newPluginCarousel.create(ePluginCarousel);
            this.pluginCarousels.push(newPluginCarousel)
        }

        // Done creating. This class is useful to add CSS animation on page load. Initial state there would assume JS is enabled though.
        document.body.classList.add("js-loaded-app");
    }
}

const app = new MyApp();
app.create();
