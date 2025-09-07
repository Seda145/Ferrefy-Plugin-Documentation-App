class DocumentationOptionsOverview {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation";
    }

    static getNavTitle() {
        return "Documentation";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavTitle();
    }

    static getNavId() {
        return "docs";
    }

    static create() {
        DocumentationContent.create(DocumentationOptionsOverview.getCompactOptionContent(), null);
    }

    static getCompactOptionSummary() {
        return "";
    }

    static getCompactOptionContent() {
        const makeOption = ((InTopicClass) => {
            if (!InTopicClass 
                || InTopicClass.getNavTitle() == null
                || InTopicClass.getNavId() == null
            ) {
                console.error("values could be an empty string but should not be null, as that is likely a configuration error. Class:");
                console.error(InTopicClass);
            }

            return {
                id: "",
                title: InTopicClass.getNavTitle(),
                url: "",
                pluginInfoId: null,
                summary: InTopicClass.getCompactOptionSummary() + `<a href="` + appBuilder.getNavInfo(InTopicClass.getNavId()).url + `">Read the documentation</a>`,
                content: []
            }
        });

        const makeUrlOption = ((InTopicClass) => {
            if (!InTopicClass 
                || InTopicClass.getNavTitle() == null
                || InTopicClass.getNavId() == null
            ) {
                console.error("values could be an empty string but should not be null, as that is likely a configuration error. Class:");
                console.error(InTopicClass);
            }

            return {
                id: "",
                title: InTopicClass.getNavTitle(),
                url: appBuilder.getNavInfo(InTopicClass.getNavId()).url,
                pluginInfoId: null,
                summary: "",
                content: []
            }
        });

        // To make an overview of topics that act as url, we can add simplified versions of their data without adding the summary
        // , plugin info or their content.
        return [
            makeUrlOption(DocumentationOptionIntroductionAndUsage),
            makeUrlOption(DocumentationOptionGeneral),
            // Now sort abc
            makeUrlOption(DocumentationOptionAssetNaming),
            makeUrlOption(DocumentationOptionCentralUI),
            makeUrlOption(DocumentationOptionCustomSettings),
            makeUrlOption(DocumentationOptionEventManager),
            makeUrlOption(DocumentationOptionStatusEffects),
            makeUrlOption(DocumentationOptionTime),
            makeUrlOption(DocumentationOptionUIAdditions),
            makeUrlOption(DocumentationOptionUtility),
        ]
    }
}