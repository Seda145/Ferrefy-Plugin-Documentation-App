class DocumentationOptionStatusEffects {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionStatusEffects.getNavTitle();
    }

    static getNavTitle() {
        return "Plugin: Status Effects";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return appBuilder.getPluginInfo(appBuilder.pluginIdStatusEffects).docsNavId;
    }

    static create() {
        DocumentationContent.create(DocumentationOptionStatusEffects.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return `
<p>The Status Effect Plugin is used to track and modify "Status Effect" values over time. In games examples of such values are: health points, player score, a hunger meter, a happiness meter. Create any effect.</p>
<p>This is especially useful in games and simulations where so many different effects can be created.</p>
<p>Modifiers can alter a Status Effect over time. For example, to remove stamina while running, or add health over time.</p>
<p>The Status Effects plugin is very compact and set up to make it simple to implement any effects and modifiers, through code and datatable.</p>
<p>The UI can be connected to display information of a Status Effect.</p>
<p>The example given on the image is a demo project, which is not included with the plugin.</p>
        `;
    }

    static getCompactOptionContent() {
        let pluginInfoBuilder = new PluginInfoBuilder();
        return [
            {
                id: "statuseffects",
                title: DocumentationOptionStatusEffects.getNavTitle(),
                url: "",
                pluginInfoId: appBuilder.pluginIdStatusEffects,
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
                        html: DocumentationOptionStatusEffects.getCompactOptionSummary(),
                        image: "documentation/docs-statuseffects-in-action.gif",
                        imageWidth: 773,
                        imageHeight: 419
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: ``,
                        image: "documentation/docs-statuseffects-uibars.gif",
                        imageWidth: 205,
                        imageHeight: 79
                    },
                    {
                        id: "plugin-benefits",
                        title: "Benefits",
                        bSub: false,
                        groupStart: "",
                        html: `
<ul>
    <li>Track and modify values over time.</li>
    <li>Compact and universal. Ideal for games and simulations.</li>
    <li>Simple to set up in code and datatable.</li>
    <li>Widgets can connect to Status Effects (add a health bar to your game).</li>
    <li>Multiple modifiers can alter a Status Effect over time.</li>
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
                        html: pluginInfoBuilder.create(appBuilder.pluginIdStatusEffects),
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
<p>
While not made a requirement, I strongly recommend using my plugins 
"<a href="${appBuilder.getNavInfo(appBuilder.getPluginInfo(appBuilder.pluginIdCentralUI).docsNavId).url}">${appBuilder.getPluginInfo(appBuilder.pluginIdCentralUI).title}</a>", 
"<a href="${appBuilder.getNavInfo(appBuilder.getPluginInfo(appBuilder.pluginIdUIAdditions).docsNavId).url}">${appBuilder.getPluginInfo(appBuilder.pluginIdUIAdditions).title}</a>", 
for implementation of any UI.
</p>
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
                        id: "status-effect",
                        title: "Status Effect",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A Status Effect is a class which manages a single value (float). It tracks the current value, it's min / max amounts and broadcasts events for when the value changes, or when the value reaches its min / max amount. Status Effects are injected into a Status Effect Component. There they are named and track a value with a purpose, such as a character's health or stamina points. The Status Effect itself is injectable for any purpose, which is especially useful for games and simulations where many different effects can be created.</p>
                        `,
                        image: "documentation/docs-statuseffects-effect-methodsbp.jpg",
                        imageWidth: 429,
                        imageHeight: 592
                    },
                    {
                        id: "status-effect-component",
                        title: "Status Effect Component",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Status Effect Component is a manager for status efffects and their modifiers. This component can be added to any actor. In games this component is commonly added to a Pawn, to track status effects related to that pawn (health / stamina points etc.).</p>
                        `,
                        image: "documentation/docs-statuseffects-addcomponent.jpg",
                        imageWidth: 551,
                        imageHeight: 474
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Blueprint users have access to various methods and events, to manage status effects and modifiers.</p>
                        `,
                        image: "documentation/docs-statuseffects-component.jpg",
                        imageWidth: 474,
                        imageHeight: 610
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Effects and modifiers can be inserted or removed through code at any time, as shown on the image. On the example the effect "Health" is inserted, which is modified by "HealthRecovery", increasing "Health" 5 points per second infinitely. Modification happens on every tick.</p>
                        `,
                        image: "documentation/docs-statuseffects-component-insertbp.jpg",
                        imageWidth: 1001,
                        imageHeight: 556
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>In code I recommend storing the names of the effects and modifiers as constants, so that there is no risk of typing mistakes. You could also use a datatable to load the data from. Datatables are easy to manage as text / csv, and produce reusable data.</p>
                        `,
                        image: "documentation/docs-statuseffects-component-insertbp-dt.jpg",
                        imageWidth: 1117,
                        imageHeight: 384
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This example shows the configuration of a datatable containing effects and modifiers. I added "Health", "Stamina", and their modifiers.</p>
                        `,
                        image: "documentation/docs-statuseffects-dtstatuseffects.jpg",
                        imageWidth: 948,
                        imageHeight: 883
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A Status Effect modifier will be removed automatically when its remaining duration reaches 0. Think of a fantasy game where you drink a magic potion to recover some health points for a few seconds.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "status-effect-info-widget",
                        title: "Status Effect Info Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The "Status Effect Info Widget" visualizes data from a status effect. The example uses a bar style to display health / stamina points for a game character.</p>
<p>Widget designers have full freedom over their design. A bar widget is not required. Designers override the method "Update Status Effect Appearance" to implement a visual response to changes in values of the status effect.</p>
<p>A Status Effect needs to be tracked. This is done by calling the method "Bind Status Effect" on this widget. Status effects are retrieved from a "Status Effects Component". This component is usually added to a Pawn, or another actor.</p>
<p>Visibility of this widget is automatically managed. This widget will collapse when the status effect is removed from the Status Effect Component, and shown when inserted. If you want additional control over visibility of Status Effect Info widgets you should control visibility of a parent panel.</p>

                        `,
                        image: "documentation/docs-statuseffects-effectbar-updatestatuseffectappearance.jpg",
                        imageWidth: 1361,
                        imageHeight: 649
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Blueprint users will find several methods on this widget to bind / unbind the widget to a status effect, or retrieve information about the current binding (if any). The retrieved Status Effect contains more blueprint accessible methods to get information about its current values.</p>
                        `,
                        image: "documentation/docs-statuseffects-effectbar-methodsbp.jpg",
                        imageWidth: 413,
                        imageHeight: 411
                    },
                    {
                        id: "status-effect-panel",
                        title: "Status Effect Panel",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Status Effect Panel is a User Widget. It is an example asset which shows how to set up the "Status Effect Info Widget" on a panel, setting up their style and status effect binding in one place.</p>
<p>In the example I retrieved a Status Effect Component from a Pawn associated with the widget's controller. The Pawn was a logical place to attach the component, because this component tracks the Pawn's health and stamina Status Effects.</p>
                        `,
                        image: "documentation/docs-statuseffects-bp-statuseffectspanel-bindbars.jpg",
                        imageWidth: 1163,
                        imageHeight: 741
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The "Bar style" property shown on the image is added just to the example Status Effect Info Widget, to set up a different color for different status effects. You can implement the design of the widgets in any way desired.</p>
                        `,
                        image: "documentation/docs-statuseffects-bp-statuseffectspanel-barstyle.jpg",
                        imageWidth: 1513,
                        imageHeight: 462
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The simplest method to get the widget to show on your screen, is to add it to the viewport as shown on the image. If you are using my UI Additions plugin and follow best practices, you can follow its <a href="${appBuilder.getNavInfo(appBuilder.getPluginInfo(appBuilder.pluginIdUIAdditions).docsNavId).url}#compact-ui-additions-hudcore">documentation</a> to add this panel to the HUD in a different way. Its HUD class properly manages the entire UI.</p>
                        `,
                        image: "documentation/docs-statuseffects-bp-statuseffectspanel-viewport.jpg",
                        imageWidth: 1115,
                        imageHeight: 327
                    },
                ]
            }
        ];
    }
}