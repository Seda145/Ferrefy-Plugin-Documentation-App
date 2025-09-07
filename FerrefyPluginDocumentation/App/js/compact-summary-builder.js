// Builds the navigation for a compact.
// Given a compact option, this is done automatically by scanning content sections for ids to make anchors for.
class CompactSummaryBuilder {
    constructor() {
        // console.warn("component builder script loaded");
        // List to debug when we accidentally add a dupe id into the summary items.
        this.dbgListOfContentIDs = [];
    }

    create(inCompactOption) {
        let bCanSummarizeContentNavigation = false;
        for (let contentX of inCompactOption.content) {
            if (contentX.id != "") {
                bCanSummarizeContentNavigation = true;
                break;
            }
        }

        if (!bCanSummarizeContentNavigation) {
            return null;
        }

        this.element = BuilderUtils.createElement(this.getHTMLTemplate(inCompactOption));

        // console.log(inCompactOption);

        this.eDocsSummaryWrap = this.element.querySelector(".docs-summary-wrap");
        if (bCanSummarizeContentNavigation) {
            this.eDocsSummaryWrap.insertAdjacentHTML('beforeend', `<h5 class="docs-summary-header">Content navigation:</h5>`);
            this.eDocsSummaryWrap.insertAdjacentHTML('beforeend', `<ul class="docs-summary"></ul>`);
            this.eDocsSummary = this.eDocsSummaryWrap.querySelector(".docs-summary");

            if (bCanSummarizeContentNavigation) {
                // Build the content summary
                // console.warn(inCompactOption.content);
                for (let contentX of inCompactOption.content) {
                    // build the anchor version of the id.
                    const contentId = CompactContentSectionBuilder.makeContentId(CompactOptionBuilder.makeOptionId(inCompactOption.id), contentX.id);
                    // If not a group start, there must be an ID to form a link for
                    if (contentX.groupStart != "" || contentId != "") {
                        this.injectSummaryItem(this.eDocsSummary, contentId, contentX.groupStart, contentX.title);
                    }
                }
            }
        }

        return this.element;
    }

    injectSummaryItem(inParentElement, inId, inGroupStart, inTitle) {
        if (inId != "") {
            if (this.dbgListOfContentIDs.includes(inId)) {
                console.error("A dupe content ID is being processed into summary for this compact option: " + inId);
            }
            else {
                this.dbgListOfContentIDs.push(inId);
            }
        }
        if (inGroupStart != "") {
            let eGroupStart = null;
            if (inId != "") {
                eGroupStart = BuilderUtils.createElement(`<li class="summary-group-start"><a href="#${inId}">${inGroupStart}:</a></li>`);    
            }
            else {
                eGroupStart = BuilderUtils.createElement(`<li class="summary-group-start">${inGroupStart}:</li>`);    
            }

            inParentElement.insertAdjacentElement('beforeend', eGroupStart);
        }
        else {
            if (inId != "") {
                let eItem = BuilderUtils.createElement(`<li class="summary-item"><a href="#${inId}">${inTitle}</a></li>`);
                inParentElement.insertAdjacentElement('beforeend', eItem);
            }
            else {
                console.error("Could not inject summary item, id: " + inId + ", title: " + inTitle + ". If not a group start, there must be an ID to form a link for!");
            }
        }
    }

    getHTMLTemplate(inObject) {
        const html = (inString) => { return inString };
        //return (html`
        return (`

<div class="docs-section">
    <div class="doc-section-content">
        <div class="row">
            <div class="col-6 col-12-l">
                <div class="docs-summary-wrap">

                </div>
            </div>
        </div>
    </div>
</div>
 
        `);
    }
}