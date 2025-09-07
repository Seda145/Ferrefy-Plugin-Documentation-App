class DocumentationContent {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static create(inCompactOptions, inParentTopicClass) {
        document.body.classList.add("page-documentation");
        
        this.element = BuilderUtils.replaceElement(document.querySelector("main"), this.getHTMLTemplate());
        
        const compactBuilder = new CompactBuilder();
        compactBuilder.create({
            scope: this.element,
            intro: "",
            options: inCompactOptions,
            parentTopicClass: inParentTopicClass
        });
    }

    static getHTMLTemplate() {
        const html = (inString) => { return inString };
        return (`
 			
<main class="main-bottom-fill">
    <div class="content-detail max-width-wrap">
        <div data-component="compact"></div>
    </div>
</main>

        `);
    }
}


// options: [
//     {
//         id: "",                     (id, gets suffixed to 'compact-option-' and is used for navigation)
//         title: "",                  (option title)
//         url: "",                    (optional url, if this option is supposed to be a simple Url. In that case certain JS response and data will not be used.)
//         pluginInfoId: null,         (optional object to plugin info containing shop url, dependencies etc.)
//         content: [
//             {
//                 id: "",              (content id used for navigation. gets suffixed to option id)
//                 title: "",           (content title)
//                 bSub: "",            (is it a sub section of the title)
//                 groupStart: "",      (adds a group name above the navigation)
//                 html: `              (html contents of the documentation)

//                 `,
//                 image: ""            (single image to display)
//             }
//         ]
//     }
// ]
