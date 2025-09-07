class DocumentationOptionIntroductionAndUsage {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionIntroductionAndUsage.getNavTitle();
    }

    static getNavTitle() {
        return "Introduction And Usage";
    }
    
    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return "docsIntroductionAndUsage";
    }

    static create() {
        DocumentationContent.create(DocumentationOptionIntroductionAndUsage.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return "";
    }
    
    static getCompactOptionContent() {
        return [
            {
                id: "about-documentation",
                title: DocumentationOptionIntroductionAndUsage.getNavTitle(),
                url: "",
                pluginInfoId: null,
                summary: DocumentationOptionIntroductionAndUsage.getCompactOptionSummary(),
                content: [
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This is the documentation section for all Ferrefy plugins made for Unreal Engine.</p>
<p>In general, documentation topics order their content to be read top to bottom. Read it before using the plugins. It will save you time.</p>
<p>Basic knowledge on Unreal Engine is expected of the reader, so this documentation can remain to the point. Tutorials on Unreal Engine and related software exist at their official sources, forums, and Youtube. Through feedback I can balance the efficient amount of documentation here. If parts of my systems remain unexplained, contact me so I can adapt the documentation.</p>
<p>Ferrefy plugins are developed as clean and consistent as possible, intended to get you straight to solutions. The working environment looks familiar, with more features and no elements unneccessary for their core functionality. The plugins are parts for the project you want to build, easy to combine and adapt to fit the specific needs of your project. When example assets are provided, they are used to reduce implementation time. These plugins respect your time.</p>
<p>Plugin requirements are listed on its documentation page, in the "requirements" section. Plugins are developed for specific tasks, and combined into larger systems. This is efficient.</p>
<p>Plugins are developed and tested for Unreal Engine running on Windows, with input devices keyboard / mouse / gamepad.</p>
<p>All text is provided in English.</p>
<p>Some of the information written here is technical. I intend to keep it readable. I write in depth information inside the software for the people who need it. In project development some overlap in programming, design and other fields is expected. Feedback on readability of the documentation is appreciated.</p>
<p>By default I write my code in C++, not in blueprints. C++ is a much more efficient solution for professional use. Systems written in C++ are often accessible through blueprint nodes, or in ways that do not require any programming knowledge. All developers should enjoy the clean blueprint assets.</p>
<p>Blueprint assets are used to implement variations of a C++ class. Using a widget as example: C++ implements core functionality (a button can be pressed), and the blueprint widget provides the visual designs (no code by default, but possible for visual effects).</p>
<p>All plugins provide detailed logs. If a problem occurs, look for warnings / errors which log misconfigurations. Asserts (intentional crash) are guards against misconfigurations and (should) explain what happened.</p>
<p>Enjoy!</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    }
                ]
            }
        ];
    }
}