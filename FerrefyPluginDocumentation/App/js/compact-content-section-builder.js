class CompactContentSectionBuilder {
    constructor() {
        // console.warn("component builder script loaded");
    }

    create(inOptionId, inContentObject) {
        this.element = BuilderUtils.createElement(this.getHTMLTemplate(inOptionId, inContentObject));
        this.eContentContainer = this.element.querySelector(".content-container");
        this.eContentContainer.insertAdjacentHTML('beforeend', inContentObject.html);

        return this.element;
    }

    static makeContentId(inOptionId, inContentId) {
        // build the anchor version of the id.
        return inContentId != "" ? inOptionId + "-" + inContentId : "";
    }

    getHTMLTemplate(inOptionId, inContentObject) {
        const html = (inString) => { return inString };
        //return (html`
        return (`
 
<div id="${CompactContentSectionBuilder.makeContentId(inOptionId, inContentObject.id)}" class="docs-section">
    ${
        inContentObject.groupStart != ""
        ? `<div class="content-group-start"><h5>Next:&nbsp;&nbsp;${inContentObject.groupStart}</h5></div>`
        : ``
    }

    ${
        inContentObject.title != "" ? 
        `
    <div class="doc-section-title ${inContentObject.bSub ? 'doc-section-sub-title' : ''}" tabindex="0">
        <h5>${inContentObject.title}${inContentObject.bSub ? ':' : ''}</h5>
    </div>
        `
        : ''
    }
    <div class="doc-section-content">
        <div class="row">
            <div class="col-6 col-12-l content-container">
                
            </div>
            <div class="col-6 col-12-l">
                ${
                    inContentObject.image != ""
                    ?
                    `
                <div class="doc-img-wrap">
                    <a href="${appBuilder.buildMediaUrl(inContentObject.image)}"><img ${inContentObject.imageWidth != 0 ? `width="${inContentObject.imageWidth}px"` : `` } ${inContentObject.imageHeight != 0 ? `height="${inContentObject.imageHeight}px"` : ``} loading="lazy" src="${appBuilder.buildMediaUrl(inContentObject.image)}"/></a>
                </div>                            
                    `
                    : ''
                }
            </div>
        </div>
    </div>
</div>

        `);
    }
}

// Lazy load in content screws with scrolling to anchors in documentation. No way to just load image height and set it for CSS?
{/* <a href="${inContentObject.image}"><img src="${inContentObject.image}" loading="lazy" /></a> */}
