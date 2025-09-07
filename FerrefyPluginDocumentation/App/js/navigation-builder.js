class NavigationBuilder {
    constructor() {
        // console.warn("component builder script loaded");

        this.footerNavs = {};
        this.headerNavs = {};
        this.mobileNavs = {};
    }

    create() {
        /* State */
        this.eFooterNavMenuInner = document.querySelector("#footer-nav-menu-inner");
        this.eHeaderNavMenuInner = document.querySelector("#header-nav-menu-inner");
        this.eMobileNavMenuInner = document.querySelector("#mobile-nav-menu-inner");

        this.addNavItemEverywhere(IndexContent.getNavItemTitle(), appBuilder.getNavInfo(IndexContent.getNavId()).url, false);
        this.addNavItemEverywhere(DocumentationOptionsOverview.getNavItemTitle(), appBuilder.getNavInfo(DocumentationOptionsOverview.getNavId()).url, false);

        this.addNavItemEverywhere("GitHub", "https://github.com/Seda145?tab=repositories", true);
    }

    makeNavItemElement(inName, inUrl, bInOpenNewTab) {
        return BuilderUtils.createElement(this.getNavItemHTMLTemplate(inName, inUrl, bInOpenNewTab));
    }

    addNavItemEverywhere(inName, inUrl, bInOpenNewTab) {
        this.addNavItemToFooter(inName, inUrl, bInOpenNewTab);
        this.addNavItemToHeader(inName, inUrl, bInOpenNewTab);
        this.addNavItemToMobile(inName, inUrl, bInOpenNewTab);
    }

    addNavItemToFooter(inName, inUrl, bInOpenNewTab) {
        this.footerNavs[inName] = this.eFooterNavMenuInner.insertAdjacentElement('beforeend', this.makeNavItemElement(inName, inUrl, bInOpenNewTab));
    }

    addNavItemToHeader(inName, inUrl, bInOpenNewTab) {
        this.headerNavs[inName] = this.eHeaderNavMenuInner.insertAdjacentElement('beforeend', this.makeNavItemElement(inName, inUrl, bInOpenNewTab));
    }

    addNavItemToMobile(inName, inUrl, bInOpenNewTab) {
        this.mobileNavs[inName] = this.eMobileNavMenuInner.insertAdjacentElement('beforeend', this.makeNavItemElement(inName, inUrl, bInOpenNewTab));
    }

    setActiveNavItem(inKey, bInActive) {
        const setActive = ((inEl) => {
            if (!inEl) {
                return;
            }
            if (bInActive) {
                inEl.classList.add("active");
            }
            else {
                inEl.classList.remove("active");
            }
        });

        setActive(this.footerNavs[inKey]);
        setActive(this.headerNavs[inKey]);
        setActive(this.mobileNavs[inKey]);
    }

    getNavItemHTMLTemplate(inName, inUrl, bInOpenNewTab) {
        const html = (inString) => { return inString };
        //return (html`
        return (`<a class="nav-item" ${(bInOpenNewTab === true ? `target="_blank"`: ``)} href="${inUrl}">${inName}</a>`);
    }
}

navigationBuilder = new NavigationBuilder();
navigationBuilder.create();