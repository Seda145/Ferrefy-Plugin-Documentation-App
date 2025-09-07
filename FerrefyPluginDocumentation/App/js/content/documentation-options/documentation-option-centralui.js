class DocumentationOptionCentralUI {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionCentralUI.getNavTitle();
    }

    static getNavTitle() {
        return "Plugin: Central UI";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return appBuilder.getPluginInfo(appBuilder.pluginIdCentralUI).docsNavId;
    }

    static create() {
        DocumentationContent.create(DocumentationOptionCentralUI.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return `
<p>This plugin improves the widget design workflow of Unreal Engine. With it, you can easily control the design of any number of widgets at once from one place. This is the closest you can efficiently get to a centralized design system with a plugin.</p>
        `;
    }

    static getCompactOptionContent() {
        let pluginInfoBuilder = new PluginInfoBuilder();
        return [
            {
                id: "central-ui",
                title: DocumentationOptionCentralUI.getNavTitle(),
                url: "",
                pluginInfoId: appBuilder.pluginIdCentralUI,
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
                        html: DocumentationOptionCentralUI.getCompactOptionSummary(),
                        image: "documentation/docs-centralui-datatable-usage.gif",
                        imageWidth: 1842,
                        imageHeight: 986
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Widget styles are managed through the datatable system. From a datatable, you can also find all the widgets using a style.</p>
                        `,
                        image: "documentation/docs-centralui-dt-rowreference.gif",
                        imageWidth: 1357,
                        imageHeight: 856
                    },
                    {
                        id: "plugin-benefits",
                        title: "Benefits",
                        bSub: false,
                        groupStart: "",
                        html: `
<ul>
    <li>UI design is all controlled from one place (datatable), instead of per widget.</li>
    <li>Datatables show exactly the same style properties as the original widgets.</li>
    <li>Easily swap one design for another.</li>
    <li>Greatly reduce risk of editing mistakes.</li>
    <li>Save so much time, especially when the design changes mid development.</li>
    <li>Large and complex projects become managable.</li>
    <li>Datatables can be exported as json / csv, then reimported, allowing external editing through text editor, Excel, code, etc.</li>
    <li>Datatable changes do not alter widget files. It keeps source control clean.</li>
    <li>Convert original widgets with ease. Central widgets are subclasses. You can use both if you wish.</li>
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
                        html: pluginInfoBuilder.create(appBuilder.pluginIdCentralUI),
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
<p>This plugin does not require any setup. It comes with a default configuration which can be be customized from the project settings.</p>
<p>Optionally you can choose to hide widgets on the widget palette which do not use a centralized style. This does not hide widgets you have already added to a design, since the "palette" is just the editor panel for finding new widgets to add.</p>
                        `,
                        image: "documentation/docs-centralui-projectsettings.jpg",
                        imageWidth: 758,
                        imageHeight: 281
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
                        id: "add-and-use-a-central-style",
                        title: "Add and use a central style",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Open a UserWidget asset as you would normally. The widget palette can show both the original type and the centralized type of a widget. The centralized version is displayed with a "(C)" next to its name.</p>
                        `,
                        image: "documentation/docs-centralui-widgetpalette.jpg",
                        imageWidth: 490,
                        imageHeight: 482
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The centralized widget behaves exactly as the original widget, but its design is controlled from a datatable. You can select one on the details panel. Each type of Slate widget (like "text block") gets a datatable. Modifications made to a style will be visible on all widgets linked to it.</p>
                        `,
                        image: "documentation/docs-centralui-slider.jpg",
                        imageWidth: 1108,
                        imageHeight: 412
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>You can create your own datatables and rows yourself to define the widget styles in.</p>
                        `,
                        image: "documentation/docs-centralui-create-datatable.gif",
                        imageWidth: 1136,
                        imageHeight: 626
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Inside that datatable you make rows (like "Header1, Header2, Paragraph") in which the design properties are set (such as "font", "font size", "color"). The datatable panel on which you configure the style properties looks exactly how it is normally displayed on the widget editor panel.</p>
                        `,
                        image: "documentation/docs-centralui-create-datatable-row.gif",
                        imageWidth: 1136,
                        imageHeight: 626
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-centralui-datatable-usage.gif",
                        imageWidth: 1842,
                        imageHeight: 986
                    }
                ]
            }
        ];
    }
}