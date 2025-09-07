class SeparatorBuilder {
	constructor() {
    // console.warn("component builder script loaded");
	}

	static create() {
		document
			.querySelectorAll("[data-component='content-separator']")
			.forEach((elX) => {
				BuilderUtils.replaceElement(
					elX,
					this.getHTMLTemplate(elX.classList, elX.id, elX.getAttribute("data-custom-anchor"))
				);
			});
	}

	static getHTMLTemplate(inClassList, inId, inCustomAnchor) {
    // Default href to self.
    let href = "#" + inId;
		if (inCustomAnchor != null && inCustomAnchor != "") {
			href = "#" + inCustomAnchor;
		}
		const html = (inString) => {
			return inString;
		};
		//return (html`
		return `
    <a id="${inId}" class="content-separator-wrap ${inClassList}" href="${href}"><div class="content-separator"><div class="separator-icon"></div></div></a>
      `;
	}
}

SeparatorBuilder.create();
