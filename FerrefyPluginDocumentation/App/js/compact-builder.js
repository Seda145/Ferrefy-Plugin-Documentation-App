class CompactBuilder {
    constructor() {
        // console.warn("component builder script loaded");
    }

    create(inObject) {
        this.element = BuilderUtils.replaceElement(inObject.scope.querySelector('[data-component="compact"]'), this.getHTMLTemplate(inObject));
        this.eCompactOptions = this.element.querySelector(".compact-options");

        for (let optionX of inObject.options) {
            const compactOptionBuilder = new CompactOptionBuilder();
            let eCompactOption = compactOptionBuilder.create(optionX);
            
            this.eCompactOptions.insertAdjacentElement('beforeend', eCompactOption);
        }
    }

    getHTMLTemplate(inObject) {
        const html = (inString) => { return inString };
        //return (html`
        return (`
 
        <div class="compact">
            <div class="compact-intro">
                ${
                    inObject.intro != ""
                    ? 
                    `
                    <h1>${inObject.intro}</h1>
                    `
                    : ``
                }
                
                ${(inObject.parentTopicClass != null
                    ? 
                    `
                <div class="parent-topic-navigation">
                        <a href="${appBuilder.getNavInfo(inObject.parentTopicClass.getNavId()).url}">
                            <div class="arrow-icon"></div>
                            <p>Return to: ${inObject.parentTopicClass.getNavTitle()}</p>
                        </a>
                </div>
                    `
                    : ``
                        )}
            </div>
            <div class="compact-options">

            </div>
        </div>

        `);
    }
}



/*
compact
  intro
  option
    title
    navigation (generated content)
	content
      id
	  title
      groupStart (indicator that this is the start of what is desired displayed as a group)
	  codeClass (often the title as c++ class if it is about one)
	  html (the documentation content)
	  image
	content...
	...
  option...
  ...
*/


/* Suggested order of content

1. What is it? Parts summary (few lines)
2. Navigation links to content sections
3. content
    Part 1
        - What do I get? (Benefits)
        - How do I use it? 
            step by step, visual? detail?
        - Technical insides for the programmers, high detail of what happens in the back
    Part 2...
*/