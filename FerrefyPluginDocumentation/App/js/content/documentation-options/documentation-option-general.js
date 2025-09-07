class DocumentationOptionGeneral {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionGeneral.getNavTitle();
    }

    static getNavTitle() {
        return "General Information";
    }
    
    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return "docsGeneral";
    }

    static create() {
        DocumentationContent.create(DocumentationOptionGeneral.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return "";
    }
    
    static getCompactOptionContent() {
        return [
            {
                id: "general-information-documentation",
                title: DocumentationOptionGeneral.getNavTitle(),
                url: "",
                pluginInfoId: null,
                summary: DocumentationOptionGeneral.getCompactOptionSummary(),
                content: [
                    {
                        id: "plugin-installation",
                        title: "Install a plugin",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>If you only have the source code of a plugin, it needs to be built using Visual Studio before it can be used within Unreal Engine. EPIC provides the documentation for this process.</p>

<p>Built plugins can be placed in one of two places to install them:</p>
<ul>
    <li>Inside a project folder: C:/.../MyProject/Plugins/MyPlugin</li>
    <li>Inside Unreal Engine: C:/.../Unreal Engine/UE*.*/Engine/Plugins/Marketplace/MyPlugin</li>
</ul>

<p>When installed to the engine, all projects on that engine version will have access to the plugin. If you want to load or modify a plugin in specific projects only, install a plugin files in the project folder instead.</p>
<p>I recommend installing a copy of plugins on the project level, so you have the most control over modifications and updates.</p>
<p>This can make your project's version control and backup systems easier to manage, and avoids data conflicts.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "activate-a-plugin",
                        title: "Activate a plugin",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Installed plugins are listed in the project settings, and can be activated here. Ferrefy plugins have their own category.</p>
                        `,
                        image: "documentation/docs-general-information-open-plugin-settings.jpg",
                        imageWidth: 614,
                        imageHeight: 380
                    }, 
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Plugin specific instructions can be found in their documentation sections, if required. The project log can assist if a warning / error is logged.</p>
                        `,
                        image: "documentation/docs-general-information-activate-plugins.jpg",
                        imageWidth: 910,
                        imageHeight: 462
                    }
                ]
            }
        ];
    }
}