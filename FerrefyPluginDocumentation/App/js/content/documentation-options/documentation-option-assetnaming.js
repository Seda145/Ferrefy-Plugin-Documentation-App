class DocumentationOptionAssetNaming {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionAssetNaming.getNavTitle();
    }

    static getNavTitle() {
        return "Plugin: Asset naming";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return appBuilder.getPluginInfo(appBuilder.pluginIdAssetNaming).docsNavId;
    }

    static create() {
        DocumentationContent.create(DocumentationOptionAssetNaming.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return `
<p>The Asset Naming plugin automates naming your Unreal Engine assets correctly.</p>
<p>In every project, asset names must be short, unique, readable and consistent. It is essential. This is only possible if you and your team name assets by the same rules.</p>
<p>Using these rules, asset names can be easily identified by their prefix / suffix as follows:</p>
<ul>
    <li>"T_Hands_D": (Texture - Hands - Diffuse)</li>
    <li>"T_Hands_N": (Texture - Hands - Normal Map)</li>
    <li>"SC_Rain_2": (Sound Cue - Rain - type 2)</li>
</ul>
<p>More than 150 asset types are automated out of the box, and you can add more!. This fully configurable plugin can rename any number of assets in 2 clicks, as shown on the image.</p>
        `;
    }

    static getCompactOptionContent() {
        let pluginInfoBuilder = new PluginInfoBuilder();
        return [
            {
                id: "asset-naming",
                title: DocumentationOptionAssetNaming.getNavTitle(),
                url: "",
                pluginInfoId: appBuilder.pluginIdAssetNaming,
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
                        html: DocumentationOptionAssetNaming.getCompactOptionSummary(),
                        image: "documentation/docs-asset-naming-asset-action-plugin-menu.gif",
                        imageWidth: 1112,
                        imageHeight: 607
                    },
                    {
                        id: "plugin-benefits",
                        title: "Benefits",
                        bSub: false,
                        groupStart: "",
                        html: `
<ul>
    <li>Names can be short, unique, readable, and consistent.</li>
	<li>Asset types are quickly identified by their prefix.</li>
    <li>150+ asset types automated out of the box.</li>
    <li>Fully adaptable. Make your own rules.</li>
    <li>Teams love how much easier cooperation becomes.</li>
    <li>Rename any number of assets in 2 clicks.</li>
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
                        html: pluginInfoBuilder.create(appBuilder.pluginIdAssetNaming),
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
<p>The styleguide is fully configurable. Add, remove or modify rules. You can set a prefix and suffix for names based on the asset type, like "M_*_Inst" for a material instance.</p>
<p>C++ references the engine plugins listed previously in "Requirements", to build the default configuration (asset naming rules) for their asset types.</p>
                        `,
                        image: "documentation/docs-asset-naming-project-settings.jpg",
                        imageWidth: 505,
                        imageHeight: 462
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
                        id: "renaming-assets",
                        title: "Renaming assets",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Assets can be renamed by right clicking an asset in the content browser and choosing "Apply naming style", as shown on the image. This will keep the original asset name and add a configured prefix / suffix to it if not already present.</p>
<p>This menu shows several other options as well, to remove a name's prefix or suffix.</p>
                        `,
                        image: "documentation/docs-asset-naming-asset-action-plugin-menu.gif",
                        imageWidth: 1112,
                        imageHeight: 607
                    }
                ]
            }
        ];
    }
}