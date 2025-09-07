class DocumentationOptionUtility {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionUtility.getNavTitle();
    }

    static getNavTitle() {
        return "Plugin: Utility";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return appBuilder.getPluginInfo(appBuilder.pluginIdUtility).docsNavId;
    }

    static create() {
        DocumentationContent.create(DocumentationOptionUtility.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return `
<p>The Utility plugin shares common utilities between Ferrefy plugins. It can be used as a thin layer of additions to very commonly used engine code (math / input / widgets / logging / data) and to improve blueprint access to engine methods.</p>
<p>The Utility Plugin is intended to be as small as possible, to efficiently provide methods actively used in Ferrefy plugins as a single plugin.</p>
        `;
    }

    static getCompactOptionContent() {
        let pluginInfoBuilder = new PluginInfoBuilder();
        return [
            {
                id: "utility",
                title: DocumentationOptionUtility.getNavTitle(),
                url: "",
                pluginInfoId: appBuilder.pluginIdUtility,
                content: [
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "About this plugin",
                        html: ``,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "plugin-introduction",
                        title: "Introduction",
                        bSub: false,
                        groupStart: "",
                        html: DocumentationOptionUtility.getCompactOptionSummary(),
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "plugin-benefits",
                        title: "Benefits",
                        bSub: false,
                        groupStart: "",
                        html: `
<ul>
    <li>Packs common methods used by Ferrefy plugins into a single plugin.</li>
    <li>Adds a thin layer of additions to common engine code (math / input / widgets / logging / data) which also improves blueprint access to engine methods.</li>
</ul>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "plugin-requirements",
                        title: "Requirements",
                        bSub: false,
                        groupStart: "",
                        html: pluginInfoBuilder.create(appBuilder.pluginIdUtility),
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "plugin-installation",
                        title: "Installation",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>First follow the docs on <a href="` + appBuilder.getNavInfo("docsGeneral").url + `#compact-general-information-documentation-plugin-installation"> how to install a plugin in general</a>.</p>
<p>This plugin does not require any setup.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    }, 
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "Usage",
                        html: ``,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "debug-utils",
                        title: "Debug Utils",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>UDebugUtils provides a compact logging method for c++ and blueprints which displays more information than the default ways of logging. For example, in c++ CUR_LOG automatically adds the class, function and line number of the log method when called:</p>
<p class="codeclass">CUR_LOG(LogYourPlugin, Warning, "This is the value: (%f)", YourFloatValue);</p>
<p>Calling that function could log the following example:</p>
<p class="codeclass">LogYourPlugin: Warning: FYourClass::ItsMethod (12): This is the value (0.6).</p>
<p>In blueprints a (Debug Utils) log method of desired verbosity level can be called. This node has a compact mode, but can also provide extra information. Blueprints do not have line numbers.</p>
                        `,
                        image: "/documentation/docs-utility-debugutils-bpmethods.jpg",
                        imageWidth: 479,
                        imageHeight: 271
                    },
                    {
                        id: "general-project-setting-utils",
                        title: "General Project Setting Utils",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The General Project Setting Utils makes it possible to retrieve the following general project settings from blueprints:</p>
<ul>
	<li>Company Name</li>
	<li>Company Distinguished Name</li>
	<li>Copyright Notice</li>
	<li>Homepage</li>
	<li>Licensing Terms</li>
	<li>Privacy Policy</li>
	<li>Project Name</li>
	<li>Project Version</li>
	<li>Support Contact</li>
</ul>
                        `,
                        image: "/documentation/docs-utility-generalprojectsettingsutils-bpmethods.jpg",
                        imageWidth: 412,
                        imageHeight: 329
                    },
                    {
                        id: "intersection-utils",
                        title: "Intersection Utils",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>UIntersectionUtils provides 2 blueprint accessible methods used to test if a given point in space is inside a shape (plane or box) or not. If it is not, a line between the center of the shape and the given point intersects with the edge of the shape. It then gives you the position of that intersection point.</p>
                        `,
                        image: "/documentation/docs-utility-intersectionutils-bpmethods.jpg",
                        imageWidth: 410,
                        imageHeight: 162
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "/documentation/docs-utility-intersectionutils-2dplane.jpg",
                        imageWidth: 649,
                        imageHeight: 359
                    },
                    {
                        id: "sorting-utils",
                        title: "Sorting Utils",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>USortingUtils is a minimal blueprint function library which provides bubble sorting functions of int, float and datetime (BubbleSort). This is intended to be used in blueprints.</p>
                        `,
                        image: "/documentation/docs-utility-sortingutils-bpmethods.jpg",
                        imageWidth: 416,
                        imageHeight: 178
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The input array is passed as reference and sorted. The return value is an array of original indexes at their new indexes. These indexes can be helpful in some situations: 1. to program a UI animation to move widget X from position at old index 2 to position at new index 15. 2. To get data from other arrays by reusing the current sort result.</p>
                        `,
                        image: "/documentation/docs-utility-sortingutils-sort.jpg",
                        imageWidth: 1063,
                        imageHeight: 409
                    },
                    {
                        id: "bpml-container",
                        title: "Blueprint Macro Library 'Container'",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Blueprint Macro Library 'Container' provides a few utilities used to speed up writing blueprint logic for arrays, sets and maps.</p>
                        `,
                        image: "/documentation/docs-utility-bpml-container.jpg",
                        imageWidth: 414,
                        imageHeight: 387
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>In a single blueprint node you can test if a container is empty, get a previous or next element, or filter elements by class.</p>
                        `,
                        image: "/documentation/docs-utility-bpml-container-macros.jpg",
                        imageWidth: 1173,
                        imageHeight: 613
                    },
                ]
            }
        ];
    }
}