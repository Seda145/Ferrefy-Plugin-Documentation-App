// Utilities to build html components
class BuilderUtils {
    constructor() {
        // console.warn("component builder script loaded");
    }

	/* Functions */
	
	static createElement(inHTML) {
		// Helper method to create an element exactly as the html argument specifies, without leaving a wrapping parent container created by "createElement".
		let newElem = document.createElement("div");	
        newElem.innerHTML = inHTML;
        newElem = newElem.firstElementChild;
		return newElem;		
	}

	static setInnerHTML(inParentElement, inHTML) {
		// Helper method to create and append an element exactly as the html argument specifies, without leaving a wrapping parent container created by "createElement".
		let newElem = BuilderUtils.createElement(inHTML);
        inParentElement.appendChild(newElem);
		// inParentElement.innerHTML = inHTML;
		return newElem;
	}

	static replaceElement(inParentElement, inHTML) {
		let newElem = BuilderUtils.createElement(inHTML);
		inParentElement.replaceWith(newElem);
		return newElem;
	}
}
