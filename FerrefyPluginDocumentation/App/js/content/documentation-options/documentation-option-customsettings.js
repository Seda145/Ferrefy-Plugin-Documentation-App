class DocumentationOptionCustomSettings {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionCustomSettings.getNavTitle();
    }

    static getNavTitle() {
        return "Plugin: Custom Settings";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return appBuilder.getPluginInfo(appBuilder.pluginIdCustomSettings).docsNavId;
    }

    static create() {
        DocumentationContent.create(DocumentationOptionCustomSettings.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return `
<p>The Custom Settings plugin makes implementation of engine and custom settings simple and efficient.</p>
<p>Settings are classes which are registered into the Player Settings Subsystem, also referred to as the "setting solver", providing information about what they do and require.</p>
<p>The setting solver builds and tracks setting compatibility and cooperation. The solver makes it possible to allow, test and inject complex setting behavior. Settings can even be injected by other plugins.</p>
<p>Applied setting values are written to an ini file, stored per player profile. Profiles can be set through code, or managed by players in-game. Players can also play together with settings personalized by their profiles.</p>
<p>50+ c++ settings are already provided, including settings controls, graphics, audio accessibility, and keybinding. Unreal Engine's experimental "Enhanced Input" is not used.</p>
<p>On top of that, it comes with a complete main menu UI, no code required, which is incredibly easy to design and maintain because it's built with the Central UI and UI Additions plugins. This main menu lets you manage settings and profiles. Everything is supported in split-screen. It contains extras (intro, credits animation system) to further speed up development.</p>
        `;
    }

    static getCompactOptionContent() {
        let pluginInfoBuilder = new PluginInfoBuilder();
        return [
            {
                id: "custom-settings",
                title: DocumentationOptionCustomSettings.getNavTitle(),
                url: "",
                pluginInfoId: appBuilder.pluginIdCustomSettings,
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
                        html: DocumentationOptionCustomSettings.getCompactOptionSummary(),
                        image: "documentation/docs-customsettingsplugin.gif",
                        imageWidth: 913,
                        imageHeight: 529
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        
                        `,
                        image: "documentation/docs-customsettings-accessibility.gif",
                        imageWidth: 916,
                        imageHeight: 530
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        
                        `,
                        image: "documentation/docs-customsettings-gamepad.gif",
                        imageWidth: 916,
                        imageHeight: 530
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        
                        `,
                        image: "documentation/docs-customsettings-graphics.gif",
                        imageWidth: 916,
                        imageHeight: 530
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        
                        `,
                        image: "documentation/docs-customsettings-credits.gif",
                        imageWidth: 916,
                        imageHeight: 530
                    },
                    {
                        id: "plugin-benefits",
                        title: "Benefits",
                        bSub: false,
                        groupStart: "",
                        html: `
<ul>
    <li>Build complete, professional setting menus in a very short time.</li>
    <li>Control common engine settings such as graphics quality, but also any custom settings.</li>
    <li>Settings can be applied from code, UI and INI.</li>
    <li>The setting system manages compatibility and cooperation between settings.</li>
    <li>A complete UI is provided, which can be modified entirely with no code knowledge required. Widget bindings are used, so you can add just what you need.</li>
    <li>The UI is built with all the benefits of the UI Additions plugin and the Central UI plugin.</li>
    <li>Offline player profiles personalize settings per player.</li>
    <li>Each player can be assigned to a profile at any time.</li>
    <li>Splitscreen support.</li>
    <li>All UI is designed with keyboard, mouse and gamepad in mind.</li>
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
                        html: pluginInfoBuilder.create(appBuilder.pluginIdCustomSettings),
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
<p>In "Project settings > Engine > Input", the "Default Player Input Class" is set to "Custom Settings Player Input", overriding what the UI Additions Plugin needed here. This class responds to keybindings and other input related settings.</p>
<p>Unreal Engine's default input key to stop playing PIE (play in editor) is "Esc". This key is also used by the UI to toggle the main menu. Consider changing the editor's key in: "Editor Preferences - General - Keyboard Shortcuts - Play World - Stop". Personally I assigned the numpad "." key.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    }, 
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "UI",
                        html: ``,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "main-menu-design",
                        title: "Main menu design",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The entire main menu is designed to be maintainable and quick to set up. It uses my Central UI and UI Additions plugins with all their benefits. Widget styles are centralized to the datatable system. Menu layouts can all be controlled at once as well, because I built the layouts with Named Slot widgets.</p>
<p>My Central UI and UI Additions plugins are well documented and provide the information on how menus, design, navigation and other things work.</p>
                        `,
                        image: "documentation/docs-customsettings-mainmenu-layout.jpg",
                        imageWidth: 1277,
                        imageHeight: 510
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        `,
                        image: "documentation/docs-customsettings-mainmenu-layout-2.jpg",
                        imageWidth: 1515,
                        imageHeight: 659
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This image shows the setting menu for keyboard and mouse controls, controlled by the layout shown previously.</p>
                        `,
                        image: "documentation/docs-customsettings-mainmenu-keyboardmouse-hierarchy.jpg",
                        imageWidth: 1490,
                        imageHeight: 591
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>All UI assets are extremely clean to work with. Blueprint code exists only when it is relevant to visual design. Everything related to core functionality is handled for you by my c++ code.</p>
                        `,
                        image: "documentation/docs-customsettings-mainmenu-keyboardmouse-bp.jpg",
                        imageWidth: 1645,
                        imageHeight: 658
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Widget bindings (most are optional) automatically bind your designs to my code.</p>
                        `,
                        image: "documentation/docs-customsettings-mainmenu-settingset-widgetbindings.jpg",
                        imageWidth: 1242,
                        imageHeight: 336
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The widget hierarchy is well organized. Menus are nested and everything is created with maintainability and reusability in mind.</p>
                        `,
                        image: "documentation/docs-customsettings-mainmenu-hierarchy.jpg",
                        imageWidth: 1273,
                        imageHeight: 516
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-customsettings-mainmenuingame-hierarchy.jpg",
                        imageWidth: 1555,
                        imageHeight: 570
                    },
                    {
                        id: "main-menu-intro-widget",
                        title: "Main Menu Intro Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Widget designers can build a main menu intro animation of one or multiple steps by creating a widget based on class "Main Menu Intro Widget". This is a menu widget. Each intro "stage" is registered during OnInitialized, providing their widget animation and the option if the stage is skippable or not. When a stage is skipped, the next stage is activated and its animation played. The menu is closed when the end is reached.</p>
                        `,
                        image: "documentation/docs-customsettings-introwidget.gif",
                        imageWidth: 936,
                        imageHeight: 509
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: ``,
                        image: "documentation/docs-customsettings-introwidget-bp.jpg",
                        imageWidth: 1171,
                        imageHeight: 638
                    },
                    {
                        id: "main-menu-credits-widget",
                        title: "Main Menu Credits Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Widget designers can build a main menu credits animation by creating a widget based on class "Main Menu Credits Widget". This is a menu widget, which starts its animation when it's shown. The animation is implemented by overriding method "Replay Credits". Further implementation is done fully in blueprints, to give designers the freedom they need.</p>
                        `,
                        image: "documentation/docs-customsettings-creditswidget.gif",
                        imageWidth: 936,
                        imageHeight: 509
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The provided blueprint implementation is set up to fade in / out one credits block. A block contains the title (category / department) and a list of the people involved in it. Each time the block fades in, this information is automatically injected into the same block. The information (departments and people) is taken from the datatable set in property "CreditsDT", and entries are looped through one by one automatically. This greatly reduces the time a designer needs to show everyone in the credits, and the automation does not limit the visual design.</p>
                        `,
                        image: "documentation/docs-customsettings-creditswidget-hierarchy.jpg",
                        imageWidth: 1098,
                        imageHeight: 300
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        `,
                        image: "documentation/docs-customsettings-creditswidget-creditsdt.jpg",
                        imageWidth: 979,
                        imageHeight: 579
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        `,
                        image: "documentation/docs-customsettings-creditswidget-procedural.jpg",
                        imageWidth: 1354,
                        imageHeight: 365
                    },
                    {
                        id: "setting-set-widget",
                        title: "Setting Set Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The "Setting Set Widget" class is great to group setting widgets together, and bind them to their settings. This widget is already set up to respond to when the Player Settings Subsystem finished initial application of settings, so it binds its inner setting widgets to their settings at the right moment.</p>
                        `,
                        image: "documentation/docs-customsettings-mainmenu-settingset-widgetbindings.jpg",
                        imageWidth: 1242,
                        imageHeight: 336
                    }, 

                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        
                        `,
                        image: "documentation/docs-customsettings-settingsetwidget-actonfinishedinitialapplysettings.jpg",
                        imageWidth: 915,
                        imageHeight: 371
                    }, 
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The only thing you need to do is to override its method "Get Widget Setting Binding Info" in c++ or blueprints and provide a matching setting name per setting widget. The provided Setting Set widgets already register their setting widgets in c++.</p>
                        `,
                        image: "documentation/docs-customsettings-settingsetwidget-hierarchy.jpg",
                        imageWidth: 1460,
                        imageHeight: 157
                    }, 
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-customsettings-getwidgetsettingbindinginfo.jpg",
                        imageWidth: 1065,
                        imageHeight: 418
                    }, 
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-customsettings-settingsetwidget.jpg",
                        imageWidth: 839,
                        imageHeight: 199
                    }, 
                    {
                        id: "setting-widget",
                        title: "Setting Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This class is a parent class for setting widget types. Setting widgets are used to show and interact with settings on the in-game UI.</p>
<p>A setting widget must be bound once to a setting by calling "Bind To Setting" on it, providing the name of the setting. This can be done after the Player Settings Subsystem has finished initial application of settings. The subsystem broadcasts the delegate "On Finished Initial Apply Settings", to which the response can be implemented. A Setting Set Widget is already set up to handle this response and bind its inner widgets, if you provide binding info to it.</p>
<p>A setting widget synchronizes visually and in functionality to the state of the setting. The min / max / step size values, current value, possible values, previous / next values etc. are automatically read from the setting object. Setting widgets require no manual work to configure, since all this data is injected.</p>
<p>Certain events, such as a setting becoming locked, or changes in another setting relevant to its compatibility, cause the setting widget to synchronize visually. It tests if it can apply its previous / next values and tests if its setting is locked.</p>
<p>A setting widget also takes focus when hovered by a mouse. This improves the navigation experience when switching from mouse to keyboard or mouse to gamepad, because UI navigation then starts from the last hovered widget.</p>
                        `,
                        image: "documentation/docs-customsettings-settingwidget.gif",
                        imageWidth: 331,
                        imageHeight: 67
                    },
                    {
                        id: "setting-multi-choice-widget",
                        title: "Setting Multi Choice Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This is the common setting widget class, set up to visualize the current setting value, and navigate between applicable previous or next values.</p>
                        `,
                        image: "documentation/docs-customsettings-settingwidget-multi.gif",
                        imageWidth: 330,
                        imageHeight: 32
                    },
                    {
                        id: "setting-slider-widget",
                        title: "Setting Slider Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This is the slider type setting widget class, set up to visualize the current value as text and as a slider handle positioned on a progress bar. The text to display for the current float value is shortened dynamically. The slider handle moves 1:1 with the cursor position, regardless of the configured step size. This is an improvement over Slate's original cursor behavior here which does not move 1:1.</p>
                        `,
                        image: "documentation/docs-customsettings-settingwidget-slider.gif",
                        imageWidth: 330,
                        imageHeight: 33
                    },
                    {
                        id: "setting-keybinding-widget",
                        title: "Setting Keybinding Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Setting Keybinding Widget is used to configure the visualization and behavior of the keybinding UI. Its content is procedurally generated, which is configurable from its editor panel. By default nothing is placed on the editor panel manually except for "Input Key Selectors Panel Widget", the panel to which generated content is added.</p>
<p>You can choose to show keybindings for the preferred input device (bShowKeyboardAndMouse / bShowGamepad) and select the class which is going to be used to generate grouped keybinding widgets (InputKeySelectorsWidgetClass). The procedural content is generated once, and synchronized to the setting value when required.</p>
                        `,
                        image: "documentation/docs-customsettings-keybindingswidget.gif",
                        imageWidth: 435,
                        imageHeight: 428
                    },
                    {
                        id: "setting-keybinding-input-key-selectors-widget",
                        title: "Setting Keybinding Input Key Selectors Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This widget is generated by the Setting Keybinding Widget, and is used to group input keys by input mapping. By default it contains a widget to show the name of the input mapping (Input Name Title Widget), and a panel to which input key selector widgets are added procedurally (InputKey Selector Panel Widget).</p>
                        `,
                        image: "documentation/docs-customsettings-keybindingselectorswidget.jpg",
                        imageWidth: 1254,
                        imageHeight: 274
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-customsettings-keybindingselectorswidget-ingame.jpg",
                        imageWidth: 434,
                        imageHeight: 376
                    },
                    {
                        id: "setting-keybinding-input-key-selector-widget",
                        title: "Setting Keybinding Input Key Selector Widget",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Setting Keybinding Input Key Selector Widget is a User Widget which contains a panel for images, and an input key selector (Slate widget). The image panel synchronizes to the applied key, by loading texture widgets for the key and modifiers into its panel (Keybinding Images Panel Widget). Following Unreal Engine's input support, only action mappings show modifier keys (ctrl, shift etc.). Its property "Setting Keybinding Image Widget Class" is the widget class visualizing each image.</p>
                        `,
                        image: "documentation/docs-customsettings-keybindingselectorwidget.jpg",
                        imageWidth: 804,
                        imageHeight: 271
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The engine (UE5.2) currently registers one modifier key per action mapping through a keybinding widget.</p>
                        `,
                        image: "documentation/docs-customsettings-keybindingselectorwidget-ingame.jpg",
                        imageWidth: 114,
                        imageHeight: 67
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "Player Profiles",
                        html: `

                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "player-profile",
                        title: "Player Profile",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Player profiles are used to identify who is playing (by name), so that settings can be personalized. This works in local multiplayer too. Profiles are stored offline in the savegame file "Profiles.sav", and configurations like applied setting values in GameUserSettings.ini. Profiles are not used for other purposes.</p>
<p>Managing profiles in-game can be done through the Player Profile Manager Widget, or directly through the Player Identification Subsystem.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "player-profile-manager",
                        title: "Player Profile Manager",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Player Profile Manager Widget is in-game UI, which controls and responds to the Player Identification Subsystem.</p>
<p>The Player Profile Creator Widget on it is used to add a new profile by name. Even users with gamepads can type a profile name with the virtual keyboard provided by the UI Additions plugin. This is great for players in local multiplayer.</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboard.gif",
                        imageWidth: 984,
                        imageHeight: 576
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>User feedback is given if a player profile name contains invalid characters, or if a profile already exists. The used virtual keyboard widget is set up to show only valid characters.</p>
                        `,
                        image: "documentation/docs-customsettings-profilecreatorwidget-feedback.gif",
                        imageWidth: 934,
                        imageHeight: 510
                    },
                    {
                        id: "player-identification-subsystem",
                        title: "Player Identification Subsystem",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Player Identification Subsystem is a game subsystem which manages player profiles. Through this subsystem, you can create, load, save, assign and unassign profiles. Profiles can be assigned to players, and are used by the Player Settings Subsystem to personalize settings for people playing. Blueprint users have access through blueprint exposed methods and delegates. When a player joins, the subsystem automatically assigns the last used player profile for this player.</p>
                        `,
                        image: "documentation/docs-customsettings-playeridentificationsubsystem-methods-bp.jpg",
                        imageWidth: 706,
                        imageHeight: 454
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "Settings",
                        html: ``,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "custom-setting",
                        title: "Custom Setting",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Setting classes are based on the Custom Setting class, or its slider / keybinding versions. A Custom Setting stores its value as a string. Constants and conversion methods are provided by Custom Setting Utils.</p>
<p>On the image you can see methods of the Custom Setting which are exposed to blueprints.</p>
                        `,
                        image: "documentation/docs-customsettings-setting-bpmethods.jpg",
                        imageWidth: 704,
                        imageHeight: 533
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        `,
                        image: "documentation/docs-customsettings-setting-bpmethods-override.jpg",
                        imageWidth: 722,
                        imageHeight: 181
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A setting can implement a system effect to apply by overriding "Apply Value To System". Some settings do not apply an effect directly. This is common when external systems use the setting just to look at its value.</p>
<p>For a setting with a system effect, the method "Does Applied Value Match System State" can be implemented as a test to report if the applied result is as expected. Finding a mismatching value here is a great tool for debugging, and not always an error. Example: your application might require a restart for the system effect to be applied.</p>
                        `,
                        image: "documentation/docs-customsettings-uiscale.jpg",
                        imageWidth: 962,
                        imageHeight: 519
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>"Is Valid Value" can be overridden to test if a value is within value bounds of this setting, and to test system hardware / state support for it. An invalid value can not be applied. The save mode value must always be reported valid here as well. An empty value is treated as invalid by default.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A method which is required to be overridden, is "Get Save Mode Value". The save mode value must be applicable at all times to be valid. This is often the setting's "off" state.</p>
                        `,
                        image: "documentation/docs-customsettings-uiscale-savemode.jpg",
                        imageWidth: 798,
                        imageHeight: 249
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>"Try Apply In Direction" can be called to attempt to apply the previous or next value, as ordered on the setting registration info. Values which can not be applied will be skipped. If a previous or next value is not available at all, you can choose to wrap around from first to last or last to first to continue searching. It uses "Find Applicable Value In Direction" to find a value. This method is also used by the UI when it visualizes possibilities during various events.</p>
                        `,
                        image: "documentation/docs-customsettings-setting-tryapplyindirection-bp.jpg",
                        imageWidth: 285,
                        imageHeight: 191
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A setting does not work alone. The Player Settings Subsystem manages its settings. A setting provides information about its cooperation / compatibility with other settings, by overriding "Get Solver Registration Info". This is required.</p>
<p>Information for the Player Settings Subsystem is provided by overriding "Get Solver Registration Info". In its simplest form, this provides the setting's name and values. The registration info is always required, but the property "Value Registrations" is only required on the standard setting class. On a slider / keybinding setting you can leave the "Value Registrations" property empty. Registration info can be provided in a longer format, to notify the setting solver that this setting can adjust another setting, or to notify it of an incompatibility with a setting and one or more of its values. The image shows how the method is overridden in blueprints.</p>
                        `,
                        image: "documentation/docs-customsettings-bp-getsolverregistrationinfo.jpg",
                        imageWidth: 1421,
                        imageHeight: 679
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>I have created blueprint exposed getter methods for all c++ constants on Custom Settings Utils. I recommend using constants instead of typing your setting names / values. This guards against typing errors and makes it maintainable.</p>
                        `,
                        image: "documentation/docs-customsettings-customsettingsutils-constants-bp.jpg",
                        imageWidth: 721,
                        imageHeight: 429
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>On this image I show an example of how to format the registration info previously shown in blueprints in c++.</p>
<p>The field "Not Compatible" registers that a value is not compatible with a value on another setting.</p>
<p>The field "Sets" registers that a value sets a value on another setting. You can configure if this is required for the value to be applicable, or optional.</p>
<p>The field "Set By" registers that a value is set by a value on another setting. You can configure if this is required for the value to be applicable, or optional.</p>
<p>When marked required, a Set / Set By can only be applied when the other setting can be applied. When that gets applied, a lock is added to that setting, preventing other settings from changing it while locks remain on it.</p>
                        `,
                        image: "documentation/docs-customsettings-cplus-getsolverregistrationinfo-longer.jpg",
                        imageWidth: 717,
                        imageHeight: 267
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Settings can set eachother in a permitted loop. Infinite loops are guarded against by the Player Setting Subsystem. Other loops are part of your implementation. You can see a permitted "Set loop" on the graphics settings menu:</p>
<ul>
    <li>Overall Quality Level: Low, sets Shadow Quality: Low</li>
    <li>Shadow Quality: Low, sets Overall Quality Level: Custom</li>
    <li>Overall Quality Level: Custom, sets nothing.</li>
</ul>
                        `,
                        image: "documentation/docs-customsettings-graphics-qualityloop.gif",
                        imageWidth: 916,
                        imageHeight: 530
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>On the following two images I use this loop again to show the flexibility of the setting system.</p>
<p>Here you can see the full implementation of the Overall Quality Level setting.</p>
                        `,
                        image: "documentation/docs-customsettings-overallqualitylevel.jpg",
                        imageWidth: 899,
                        imageHeight: 446
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Here I show how through providing just the registration info, the Shadow Quality setting injects how it desires to cooperate with the Overall Quality Level setting. It does so by using the "Set" and "Set By" fields.</p>
<p>Set: When any value of the Shadow Quality setting is applied, the Overall Quality Level setting's value is set to "Custom".</p>
<p>Set By: When the Overall Quality Level setting is applied, any value also present on the Shadow Quality is set on the Shadow Quality (so here it synchronizes to all except "Custom").</p>
                        `,
                        image: "documentation/docs-customsettings-shadowqualitylevel.jpg",
                        imageWidth: 972,
                        imageHeight: 373
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Information from the "Not Compatible" field is injected both ways as well: Both settings become aware of the incompatibility through the Player Settings Subsystem. As you can see, this makes new settings injectable (you can create extension plugins), without the need for modifying setting classes they refer to. The Player Settings Subsystem and UI automatically react to incompatibilities, so there is no need to implement anything manually for it.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "custom-slider-setting",
                        title: "Custom Slider Setting",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>On a slider type setting some additional methods must be overridden: "Get Step Size", "Get Min Value", "Get Max Value". This setting typically does not register its own values to the solver (if you want this, the normal setting is far more likely to be efficient).</p>
                        `,
                        image: "documentation/docs-customsettings-cplus-rotatesensitivitysetting.jpg",
                        imageWidth: 856,
                        imageHeight: 603
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>"Try Apply (Slider) In Direction" can be called to attempt to apply the previous or next value, in its configured step size clamped to slider bounds. It uses "Find Applicable (Slider) Value In Direction" to find a value. It does not wrap around.</p>
                        `,
                        image: "documentation/docs-customsettings-setting-tryapplysliderindirection-bp.jpg",
                        imageWidth: 288,
                        imageHeight: 168
                    },
                    {
                        id: "custom-keybinding-setting",
                        title: "Custom Keybinding Setting",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A single instance of the keybinding setting manages all keybindings for a player. Its value is a string containing all keybindings. Conversion between struct and string is handled by the Custom Settings Utils ("String To Key Mappings Struct").</p>
<p>When an input mapping is added or removed from the project settings, the save mode value of this setting will be used when applied.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "player-settings-subsystem",
                        title: "Player Settings Subsystem",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Player Settings Subsystem is a subsystem created per player. It is sometimes referred to as the "setting solver" because it manages all of a player's settings.</p>
<p>It combines information of the settings (setting compatibility, cooperation), so that the whole becomes possible, automated, testable, and injectable. It ensures that there must be a save state to default to as well.</p>
<p>During and post setting registration, the registered information is tested. Various misconfigurations made by developers are detected, which are logged and prevented immediately. Examples are bad save mode values / method arguments / property configurations / infinite loops / duplicates / missing registrations. Crash? Look at the project's log for the error. This is a safety feature which helps you spot issues right away. Many details are logged.</p>
<p>Setting application order is figured out automatically. Settings which adjust other settings follow rules built during the registration process, preventing hijacking of the tested configuration.</p>
<p>It also handles loading and saving setting values with an INI file. When a player is assigned to a player profile, setting values for that profile will be loaded from INI and applied. When a profile is deleted, the subsystem deletes the saved setting values from the INI file.</p>
<p>The subsystem's implementation is done in c++. Blueprint users have access blueprint exposed methods and delegates.</p>
<p>In local multiplayer, settings which directly or indirectly have a global effect (display resolution, vsync etc.) are managed only by the first player. They are registered, but fully ignored (not applied!) and hidden for other players. The UI is adapted to this.</p>
<p>Unreal Engine's settings must no longer be controlled through their original managing classes, to prevent value mismatches! ("Game User Settings", "Gameplay Statics" etc.)</p>
                        `,
                        image: "documentation/docs-customsettings-playersettingssubsystem-methods-bp.jpg",
                        imageWidth: 681,
                        imageHeight: 352
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Setting classes can be registered to the subsystem by adding them to "Custom Setting Classes" in the project settings of this plugin. Registration order is irrelevant, because application order is automated. This field is shown on the project settings to give blueprint users the possibility to register blueprint based settings.</p>
                        `,
                        image: "documentation/docs-customsettings-devsettings.jpg",
                        imageWidth: 1086,
                        imageHeight: 812
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>C++ users can register settings through code before UPlayerSettingsSubsystem::Initialize, as shown on the image. C++ users must keep in mind that the "Custom Setting Classes" (if configured) on the project settings can override what gets registered. You can clear that configuration by deleting stored entries in DefaultGame.ini. If no blueprint settings are used, you should consider removing "config, EditAnywhere" from the c++ property and adding "Transient" to it. This prevents such overrides.</p>
                        `,
                        image: "documentation/docs-customsettings-devsettings-cplus.jpg",
                        imageWidth: 525,
                        imageHeight: 257
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "Setting Integration",
                        html: `
<p>Setting / Setting UI customizations are up to preference, or can be done to match hardware / OS support. Documentation on Unreal Engine's settings can be found at official sources. If a setting is not supported for your hardware / OS target, or you do not wish to use a setting, you can simply remove its UI element and remove it from the setting registrations.</p>
<p>Here I will further explain setting integration if a few extra steps are required to use the settings as they are, inside your application.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "sound-classes",
                        title: "Sound Classes",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The sound settings use sound class assets to manage the volume of sounds.</p>
                        `,
                        image: "documentation/docs-customsettings-settings-soundclasses-ui.jpg",
                        imageWidth: 745,
                        imageHeight: 292
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The "master volume" class controls the overall volume of the other sound classes.</p>
                        `,
                        image: "documentation/docs-customsettings-settings-soundclasses.jpg",
                        imageWidth: 655,
                        imageHeight: 764
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>An asset of type "Sound Cue" can be assigned to a sound class asset. A sound used as music would be configured to use the music sound class, etc. Nothing else needs to be done. The sound's volume can now be managed from the in-game UI.</p>
                        `,
                        image: "documentation/docs-customsettings-settings-soundcue.jpg",
                        imageWidth: 1184,
                        imageHeight: 315
                    },
                    {
                        id: "subtitle-scale",
                        title: "Subtitle Scale",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Two settings are provided to handle subtitle scaling (Subtitle Scale Setting, Subtitle Scale Legacy Setting). Register only one.</p>
<p>The legacy setting is registered by default. This setting directly sets the legacy font size property on the subtitle font. This scales anything using this font, including the subtitles Unreal Engine generates for sound wave assets.</p>
                        `,
                        image: "documentation/docs-customsettings-soundwave-subtitle.jpg",
                        imageWidth: 525,
                        imageHeight: 391
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        `,
                        image: "documentation/docs-customsettings-legacysubtitle-ingame.jpg",
                        imageWidth: 593,
                        imageHeight: 327
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>If you wish to build a custom implementation (UMG), you could use the normal setting instead. This sets the font scaling factor property on the subtitle font. Custom implementation is up to the designer. A widget could also just look at the value of the setting itself.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "raytracing",
                        title: "Raytracing",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Settings are provided to configure raytracing. You can follow Unreal Engine's documentation on how to set up the project settings, lights, etc. to enable raytracing in general.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "custom-settings-player-input",
                        title: "Custom Settings Player Input",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Custom Settings Player Input is a Core Player Input which automatically pulls keybindings from the keybinding setting. It also adds input axis multipliers for the controls settings related to input axis mappings (gamepad rotate sensitivity, inversion, mouse sensitivity etc.).</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "custom-settings-player-controller",
                        title: "Custom Settings Player Controller",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Custom Settings Player Controller is a Player Controller Core. Does one thing: It sets its camera manager class to be Custom Settings Player Camera Manager.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "custom-settings-player-camera-manager",
                        title: "Custom Settings Player Camera Manager",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Custom Settings Player Camera Manager is a camera manager. It does two things: 1. It creates a Custom Settings Player Camera Manager Component, 2. it broadcasts when its method InitializeFor ran, so that its component can be notified when a Player Controller has been set on this camera manager.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "custom-settings-player-camera-manager-component",
                        title: "Custom Settings Player Camera Manager Component",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Custom Settings Player Camera Manager Component must be on a Custom Settings Player Camera Manager to work. It responds to the FOV setting by applying the configured FOV to the camera manager.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "Utilities",
                        html: ``,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "custom-settings-utils",
                        title: "Custom Settings Utils",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Custom Settings Utils is a function library used with the Custom Settings Plugin. It provides:</p>
<p>Constants: Setting names, values are stored as static constants.</p>
<p>Utilities: provides information about display resolution and RHI (render hardware interface).</p>
<p>Conversion: provides conversion between between string and data types of setting values. The conversion methods assert (intentional crash) when input is invalid, as output would be nonsense. This helps tracking misconfigurations.</p>
                        `,
                        image: "documentation/docs-customsettings-customsettingsutils-bp.jpg",
                        imageWidth: 420,
                        imageHeight: 418
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: ``,
                        image: "documentation/docs-customsettings-customsettingsutils-bp-2.jpg",
                        imageWidth: 421,
                        imageHeight: 409
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>I have created blueprint exposed getter methods for all c++ constants on this utility library.</p>
                        `,
                        image: "documentation/docs-customsettings-customsettingsutils-constants-bp.jpg",
                        imageWidth: 721,
                        imageHeight: 429
                    },
                ]
            }
        ];
    }
}