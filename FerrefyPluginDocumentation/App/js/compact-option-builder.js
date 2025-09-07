class CompactOptionBuilder {
    constructor() {
        // console.warn("component builder script loaded");
    }

    create(inOptionObject) {
        const bIsUrl = inOptionObject.url != "";
        // console.log(inOptionObject);
        if (bIsUrl) {
            this.element = BuilderUtils.createElement(this.getUrlHTMLTemplate(inOptionObject));
        }
        else {
            this.element = BuilderUtils.createElement(this.getHTMLTemplate(inOptionObject));
        }

        // If this is just a topic acting as URL instead of having content, then stop here.
        if (bIsUrl) {
            return this.element;
        }

        this.eContentInner = this.element.querySelector(".compact-content-inner");

        let compactContentSectionBuilder = new CompactContentSectionBuilder();

        // Summary
        let compactSummaryBuilder = new CompactSummaryBuilder();
        let eSummary = compactSummaryBuilder.create(inOptionObject);
        if (eSummary != null) {
            this.eContentInner.insertAdjacentElement('beforeend', eSummary);
        }
      
        // General content
        for (let contentX of inOptionObject.content) {
            this.eContentInner.insertAdjacentElement('beforeend', compactContentSectionBuilder.create(CompactOptionBuilder.makeOptionId(inOptionObject.id), contentX));
        }

        return this.element;
    }

    static makeOptionId(inOptionId) {
        // build the anchor version of the id.
        return "compact-" + inOptionId;
    }

    getHTMLTemplate(inOptionObject) {
        const html = (inString) => { return inString };
        //return (html`
        return (`
 
            <div class="compact-option">
                <div class="compact-title" tabindex="0">
                    <div class="compact-title-wrap-2">
                        <div class="compact-title-wrap">
                            <div class="arrow-icon"></div>
                            <div class="compact-reading-wrap">
                                <h4 class="compact-reading">Reading:&nbsp;</h4>
                                <h4 class="compact-reading-title">${inOptionObject.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="compact-content">
                    <div class="compact-content-inner">

                    </div>
                </div>
            </div>

        `);
    }

    getUrlHTMLTemplate(inOptionObject) {
        const html = (inString) => { return inString };
        //return (html`
        // Kept compact-content in it for its borders thickness keeps the style equal to normal html version.
        return (`
 
            <div class="compact-option compact-option-url">
                <div class="compact-title">
                    <div class="compact-title-wrap-2">
                        <a href="${inOptionObject.url}">
                            <div class="compact-title-wrap">
                                <div class="arrow-icon"></div>
                                <div class="compact-reading-wrap">
                                    <h4 class="compact-reading-title">${inOptionObject.title}</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="compact-content">
                    <div class="compact-content-inner">

                    </div>
                </div>
            </div>

        `);
    }
}