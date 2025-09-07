class HeaderBuilder {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static create(inScopeElement) {
        BuilderUtils.replaceElement(inScopeElement.querySelector('[data-component="header"]'), this.getHTMLTemplate());
    }

    static getHTMLTemplate() {
        const html = (inString) => { return inString };
        //return (html`
        return (`
 
        <header>
        <div id="header-top">
            <div id="header-top-wrap" class="max-width-wrap">
                <div id="header-banner">
                    <a href="${appBuilder.getNavInfo("home").url}" id="banner-logo-wrap">
                        <div id="banner-logo-left" style="background-image: url('${appBuilder.buildMediaUrl("branding/logo-150x100-left.png")}')"></div>
                        <div id="banner-logo-right" style="background-image: url('${appBuilder.buildMediaUrl("branding/logo-350x100-right.png")}')"></div>
                    </a>
                </div>
            </div>
        </div>

        <div id="header-bottom">
            <div id="header-bottom-wrap" class="max-width-wrap">
                <a href="${appBuilder.getNavInfo("home").url}" id="header-logo-wrap" style="opacity: 0; background-image: url('${appBuilder.buildMediaUrl("branding/logo-216x45.png")}')" ></a>

                <nav id="header-nav-menu">
                    <div id="header-nav-menu-inner">

                    </div>
                </nav>

                <div id="mobile-menu-icon" tabindex="0">
                    <div class="mobile-menu-icon-line"></div>
                    <div class="mobile-menu-icon-line"></div>
                    <div class="mobile-menu-icon-line"></div>
                </div>
            </div>
        </div>

        <div id="navigation-overlay" tabindex="0">
            <div
                id="navigation-overlay-icon"
                class="content-separator-wrap"
            >
                <div class="content-separator">
                    <div class="separator-icon"></div>
                </div>
            </div>
        </div>

        <nav id="mobile-nav-menu">
            <div id="mobile-nav-menu-inner">

            </div>
        </nav>
    </header>

        `);
    }
}

HeaderBuilder.create(document);