class DocumentationOptionUIAdditions {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionUIAdditions.getNavTitle();
    }

    static getNavTitle() {
        return "Plugin: UI Additions";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return appBuilder.getPluginInfo(appBuilder.pluginIdUIAdditions).docsNavId;
    }

    static create() {
        DocumentationContent.create(DocumentationOptionUIAdditions.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return `
<p>This plugin adds new widget types and input functionality. It is used to efficiently build common and advanced UI, with a consistent user input and feedback behavior.</p>
<p>It adds essential new features such as widget lazy loading, a highly customizable cursor type, input device recognition and response, and among more widgets, a menu system that routes navigation between menus. Menus offer improved control over widget focusing.</p>
<p>A HUD is provided which centralizes and automates management of widgets, cursor behavior, and player controller input modes. It guards against undesired focus loss on widgets.</p>
<p>UI navigation input is now configurable from the project settings. These input actions and few more intended to implement a consistent UI experience with are automatically added and validated.</p>
<p>Behavior of existing UI elements (Slate) has been improved through the additions, to create a better and more similar experience when using gamepad, keyboard and mouse input devices. Unreal Engine's "Enhanced Input" is not used.</p>
<p>Some example images show UI content of my Custom Settings Plugin, which was built with this plugin.</p>
        `;
    }

    static getCompactOptionContent() {
        let pluginInfoBuilder = new PluginInfoBuilder();
        return [
            {
                id: "ui-additions",
                title: DocumentationOptionUIAdditions.getNavTitle(),
                url: "",
                pluginInfoId: appBuilder.pluginIdUIAdditions,
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
                        html: DocumentationOptionUIAdditions.getCompactOptionSummary(),
                        image: "documentation/docs-uiadditions-overview.gif",
                        imageWidth: 958,
                        imageHeight: 560
                    },
                    {
                        id: "plugin-benefits",
                        title: "Benefits",
                        bSub: false,
                        groupStart: "",
                        html: `
<ul>
    <li>Instantly get access to professional UI features.</li>
    <li>Designers can work directly on advanced UI with no programming knowledge required.</li>
    <li>Get access to new utilities, such as automated localization of widgets created by code.</li>
    <li>Get fully customizable new widget classes.</li>
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
                        html: pluginInfoBuilder.create(appBuilder.pluginIdUIAdditions),
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
<p>In "Project settings - Engine - Input", the "Default Player Input Class" is set to "Core Player Input". This class installs customizable input mappings for Slate (UI) navigation.</p>
<p>This plugin does not require further setup, but can be configured from the project settings.</p>
<p>Unreal Engine's default input key to stop playing PIE (play in editor) is "Esc". This key is also used by the UI to toggle the main menu. Consider changing the editor's key in: "Editor Preferences - General - Keyboard Shortcuts - Play World - Stop". Personally I assigned the numpad "." key.</p>
<p>A few input action mappings are automatically installed there (Nav...) used for UI interactions.</p>
<p>These are input mappings which Unreal Engine already used, made configurable: "NavSelect", "NavBack", "NavDown", "NavLeft", "NavRight", "NavUp", "NavNext", "NavPrevious".</p>
<p>You can disable "Render Focus Rule" in Project Settings - Engine - User Interface - Focus. This prevents ugly default outlines when focusing widgets.</p>
                        `,
                        image: "documentation/docs-uiadditions-inputaction-navback.jpg",
                        imageWidth: 594,
                        imageHeight: 423
                    }, 
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A few extra "Nav..." input actions are installed, intended for UI interaction, if already used by Ferrefy plugins. This encourages using the same input keys for interactions with the entire UI.</p>
<p>The new input actions are "NavExtra, NavMainMenu, NavReset".</p>
<p>"NavExtra" is intended to be used for uncommon / one-time UI interactions which you prefer to share the same input mapping.</p>
<p>"NavMainMenu" is used to toggle a main menu widget or pause.</p>
<p>"NavReset" is intended to be used to reset values to a default state, like a group of settings on a setting menu.</p>
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
<p>A few extremely common input axis mappings are installed, these are: "Forward", "Backward", "Left", "Right", "Up", "Down", "YawPos", "YawNeg", "PitchPos", "PitchNeg". These are intended for implementation on Pawn / Controller for world navigation. I decided to avoid mixed axis mappings (yaw / pitch) and certain axis input keys (thumbstick) when possible. This keeps in-game keybinding UI managable and already avoids some keys which Slate's key selector widgets don't take.</p>
                        `,
                        image: "documentation/docs-uiadditions-inputaxis.jpg",
                        imageWidth: 446,
                        imageHeight: 462
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
                        id: "keybound",
                        title: "Keybound",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Keybound widget makes it extremely simple to set up a widget's response to an input action. As shown on the image, you can bind an input action to an event or function by calling "Listen For Routed Input Action". There you provide the name of an input action (as set in Project Settings > Input) and select the function to call. At any time you can also stop listening to the action by calling "Stop Listen For Routed Input Action".</p>
<p>A key press can execute multiple times as long as you hold down the key. For this reason actions such as "move up / down / left / right" are usually registered to a key press, while actions which should be performed once such as closing a menu are registered on key release.</p>
                        `,
                        image: "documentation/docs-uiadditions-keybound-listenforrouted.jpg",
                        imageWidth: 1223,
                        imageHeight: 527
                    },                         
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-uiadditions-keybound-inputactionmapping.jpg",
                        imageWidth: 586,
                        imageHeight: 401
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Additional to "ListenForRoutedInputAction", c++ users can also simply call "BindRoutedInputAction" which shortens the code on the c++ side.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-bindroutedinputactions.jpg",
                        imageWidth: 850,
                        imageHeight: 98
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Keybound widgets are also very useful to catch any input left unhandled by any inner widget you interact with. Something like a menu is often not focusable but is still desired to respond input regardless (to close a menu, reset settings, etc.), which is why a Menu Widget is Keybound.</p>
<p>The Keybound Widget has a property "Additional Input Action Replies" which is a set of input action names, empty by default. Depending on the mode "Additional Input Action Reply Mode", you can choose to handle any additional input on this set if its action is in it, or handle additional input except actions in the set. This can be used to block input actions being processed outside of the Keybound Widget, without doing anything with them.</p>
                        `,
                        image: "documentation/docs-uiadditions-keybound-additionalinputactionreplies.jpg",
                        imageWidth: 523,
                        imageHeight: 178
                    },
                    {
                        id: "menu",
                        title: "Menu",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Menu widget is a Keybound widget. A menu can be described as a panel made for holding content, which also implements navigating between menus. It can cooperate with Menu Navigation Buttons and provides improved focus control on inner widgets.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-navigation.gif",
                        imageWidth: 1026,
                        imageHeight: 488
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>On the example image I added a menu widget asset. I added three of them and named them:</p>
<ul>
    <li>"WBP_MySettingsMenu"</li>
    <li>"WBP_MyGraphicsSettingsMenu"</li>
    <li>"WBP_MyAudioSettingsMenu"</li>
</ul>
<p>Finally I opened WBP_MySettingsMenu and placed the others inside of it on a canvas, taking up all space. I styled both inner menus with a black background and a text. Menu visibility is by default set "collapsed" and not modified.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-createasset.gif",
                        imageWidth: 1097,
                        imageHeight: 715
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-uiadditions-menu-menuhierarchy.jpg",
                        imageWidth: 1470,
                        imageHeight: 943
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>As seen already, a menu can hold other menus inside of it. Menus directly inside are registered to navigation routes, to the menu it is held by (a "parent" menu). This connects menus as a navigatable structure. For example:</p>
<ul>
    <li>"MainMenu > Settings > Audio"</li>
    <li>"MainMenu > Settings > Graphics"</li>
    <li>"MainMenu > Extras > Credits"</li>
</ul>
<p>By default, a menu automatically tries to register itself to a parent menu. You only need to set the navigation route per inner menu as shown on the image.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-autoregister.jpg",
                        imageWidth: 419,
                        imageHeight: 521
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>It is possible to manually access menu registrations from blueprints, but it is efficient to keep "Auto Register To Parent Menu" enabled. That automatically updates registrations during OnInitialized and Construct.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-registermethods.jpg",
                        imageWidth: 409,
                        imageHeight: 277
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Being a widget, Unreal Engine allows its visibility to be altered directly through "Set Visibility" or the property on the editor panel. This must not be done on a menu. The menu's navigation system automatically handles visibility, while properly notifying related systems like the HUD additions of the updated state.</p>
<p>To navigate properly, we call "Navigate To" or "Navigate To Route". In both cases, this refers to an inner menu widget registered to a route.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-navigatetomethods.jpg",
                        imageWidth: 369,
                        imageHeight: 527
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>If the menu is registered to a parent menu, we can call "Request UI Navigation". This requests the parent menu to navigate to one of its own routes, navigating "out". Navigating to route "None" closes an active menu.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-requestnavigationmethods.jpg",
                        imageWidth: 378,
                        imageHeight: 321
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>During navigation, widget focus is restored. This is an automated feature which protects against undesired focus loss as well, essential when you are not using a cursor device to interact with the UI.</p>
<p>To restore focus, it calls the method "Restore Focus" on itself. This is called recursively through nested menus navigated to, and restores focus once on the correct menu.</p>
<p>The correct menu attempts to provide a preferred widget to focus. This is commonly the last widget you focused on this menu, which is remembered. If that fails, the menu must provide any valid focusable widget through "Get Default Preferred Focus Entry Widget", a method which is overridden per menu widget in blueprints. Providing the default is very simple, as shown on the image. Nothing else needs to be done.</p>
<p>If your visual design of a specific menu does not show anything focusable (no buttons etc.), then you could add a button and render it invisible.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-getdefaultfocusentrywidget.jpg",
                        imageWidth: 1268,
                        imageHeight: 445
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Being a Keybound widget, the menu can easily be set up to user input. By default it listens to the "NavBack" input action, to request navigation to "None" on a registered parent menu to close itself when a user "navigates back" with a key press.</p>
<p>When a Menu Navigation Button requests the route "None" on a menu, the result is exactly the same, instead of causing navigating through the inner menus as the button would using other routes.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-navigationrequestresponse.jpg",
                        imageWidth: 623,
                        imageHeight: 354
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Documented with its own topic, is the Menu Navigation Button. This type of button can be registered to a menu by calling "Register Navigation Button". The buttons request navigation on their menu when they are activated. Additionally, they appear "Pressed" automatically when the active menu navigation route matches theirs.</p>
<p>The image shows the former settings menu, updated with a list of menu navigation buttons with their navigation routes set to "Audio", "Graphics", "None" to the settings menu. The inner menus and buttons are using matching routes. On all menus, I set the default focus entry widget to be an inner Slate button, which will be focused the first time that menu is navigated to. The inner menus are positioned on the hierarchy below the widgets that they should render in front of.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-menuhierarchywithbuttons.jpg",
                        imageWidth: 833,
                        imageHeight: 616
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-uiadditions-buttonwidget-getbutton.jpg",
                        imageWidth: 930,
                        imageHeight: 386
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Now that the menu has been configured, it still needs to be added to the viewport and started. This process is centralized, managed and automated if done through the HUD additions, which this example does not. The HUD additions are documented on its own topic. The image just demonstrates how a menu at the top level (not placed within another menu) could be added manually to the viewport, while not respecting the HUD additions. That is the default method to show widgets in Unreal Engine, that i don't recommend. To learn how UI is managed properly, read the documentation on the HUD additions.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-addtoviewport.jpg",
                        imageWidth: 1316,
                        imageHeight: 338
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Watch how the navigation system works with just that minimal amount of configuration, automatically keeping the menu buttons in focus and switching panels.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-navigation.gif",
                        imageWidth: 1026,
                        imageHeight: 488
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Even without a cursor device, you can immediately start using a gamepad or keyboard to interact.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-navigation-keyboard.gif",
                        imageWidth: 1016,
                        imageHeight: 450
                    },
                    {
                        id: "button",
                        title: "Button",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Button Widget is a UserWidget wrapped around a (central) Slate button widget, which adds in some common functionality oddly missing in the original Slate button:</p>
<ul>
    <li>It can appear hovered or pressed at any time when asked to.</li>
    <li>It can appear hovered when on the focus path (keyboard, gamepad etc.).</li>
</ul>
<p>To make this possible without engine modifications, I used the central button widget from my CentralUI plugin to control appearances.</p>
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
<p>To create a type of button, create a UserWidget asset of type Button Widget.</p>
                        `,
                        image: "documentation/docs-uiadditions-buttonwidget-createasset.gif",
                        imageWidth: 1060,
                        imageHeight: 714
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Inside, the (central) Slate button is added, and given the name "ButtonWidget". Nothing else needs to be configured. The CentralUI documentation explains how to configure a centralized style for the inner button.</p>
                        `,
                        image: "documentation/docs-uiadditions-buttonwidget-centralbutton.jpg",
                        imageWidth: 722,
                        imageHeight: 723
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The UserWidget wrapping around the slate button does not take over functionality from the Slate widget. For example, it is expected that the UserWidget is not treated as focusable, but the inner Slate widget is. At any time, you can retrieve the Slate button from the userwidget by calling "Get Button Widget" As shown on the image.</p>
                        `,
                        image: "documentation/docs-uiadditions-buttonwidget-getbutton.jpg",
                        imageWidth: 930,
                        imageHeight: 386
                    },
                    {
                        id: "button-menu-navigation",
                        title: "Button (Menu Navigation)",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A Menu Navigation Button is a Button Widget, intended to be used with a menu. When the button is released, it requests navigation on a parent menu it is registered to.</p>
                        `,
                        image: "documentation/docs-uiadditions-menunavigationbuttonwidget-createasset.gif",
                        imageWidth: 1408,
                        imageHeight: 761
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Just like a Menu, a Menu Navigation Button supports automatic registration to a parent menu, and it holds a navigation route used in the navigation request.</p>
                        `,
                        image: "documentation/docs-uiadditions-menunavigationbuttonwidget-detailpanel.jpg",
                        imageWidth: 348,
                        imageHeight: 341
                    },
                    {
                        id: "button-input-action",
                        title: "Button (Input Action)",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Input Action Button Widget is a Button Widget which can simulate an input action, routed through Slate as if a user pressed a key. It is common for menu designs to display input actions available to interact with it. These are displayed as a combination of key icon and description ("Esc key == Navigate Back"), and can be clicked or pressed like buttons as well. The Input Action Button Widget is exactly that. The icon shown and the text displayed are fully automated by default. On the example image you can see how I made this for the Custom Settings Plugin.</p>
                        `,
                        image: "documentation/docs-uiadditions-inputactionbutton.gif",
                        imageWidth: 1028,
                        imageHeight: 507
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To create this type of button, create a UserWidget asset of type Input Action Button.</p>
                        `,
                        image: "documentation/docs-uiadditions-inputactionbutton-createasset.gif",
                        imageWidth: 1035,
                        imageHeight: 655
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The button uses a few widget bindings that need to be set up. To do so, add the required widgets into it as shown on the image. First add a Button widget named "ButtonWidget", inside of that any content is added. Two more required widgets are added inside of it, the "KeyImageWidget" is used to display an icon for an input key and the "KeyTextWidget" is used to describe what happens when that key (or the button itself) is pressed. I used a SizeBox widget to ensure the loaded content will have a constant size.</p>
                        `,
                        image: "documentation/docs-uiadditions-inputactionbutton-hierarchy.jpg",
                        imageWidth: 1636,
                        imageHeight: 663
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Many icons for the keyboard, mouse, gamepad, and their Blender3D (4.0) source file are already provided. I rendered these into individual icon assets through a keyframed camera.</p>
                        `,
                        image: "documentation/docs-uiadditions-providediconsource.jpg",
                        imageWidth: 1312,
                        imageHeight: 772
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Input Action Button widget is automated. On the details panel you find the property "Action Mapping Name". This is the name of the input action that it will attempt to display information for.</p>
<p>It will automatically try to load a matching image on "KeyImageWidget" for the an input key found for that input action, from the datatable in "Key Binding Image DT". This datatable handle can be overridden. It will respect the input device being used.</p>
<p>The widget will also automatically try to localize a text for "KeyTextWidget". By default it looks in the string table asset "ST_HID", and this string table can be overridden per widget. More information about the localization can be found on the Localization Utils topic.</p>
                        `,
                        image: "documentation/docs-uiadditions-inputactionbutton-details.gif",
                        imageWidth: 1289,
                        imageHeight: 386
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-uiadditions-inputaction-navback.jpg",
                        imageWidth: 594,
                        imageHeight: 423
                    },
                    {
                        id: "decision-dialog",
                        title: "Decision Dialog",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Decision Dialog Widget is a Menu Widget which asks you to respond to a question with a simple yes or no, to which a response action can be implemented.</p>
                        `,
                        image: "documentation/docs-uiadditions-decisiondialog-decide.gif",
                        imageWidth: 1032,
                        imageHeight: 458
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Decision Dialog Widget is commonly placed within another menu. After a decision has been made, it will then automatically request its parent menu to close it.</p>
<p>On the details panel you will find properties used to control its contents, such as the text for the title and description.</p>
<p>As the decision dialog is a Menu widget itself, its navigation route is set on the details panel, and the default focus entry widget must be set.</p>
                        `,
                        image: "documentation/docs-uiadditions-decisiondialog-addedonmenu.jpg",
                        imageWidth: 1561,
                        imageHeight: 827
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-uiadditions-decisiondialog-getdefaultfocusentry.jpg",
                        imageWidth: 903,
                        imageHeight: 272
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To create a Decision Dialog widget, create a User Widget asset based on the Decision Dialog class.</p>
                        `,
                        image: "documentation/docs-uiadditions-decisiondialog-createasset.gif",
                        imageWidth: 1202,
                        imageHeight: 711
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Decision Dialog automatically manages specific widgets through widget bindings. These are highlighted on the example image.</p>
                        `,
                        image: "documentation/docs-uiadditions-decisiondialog-hierarchy.jpg",
                        imageWidth: 1521,
                        imageHeight: 419
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>If enabled, the "Auto Decide" feature will show the auto decide panel to notify the user that something will happen after a X seconds countdown. The auto decision is what will happen after the countdown reaches 0.</p>
<p>The text widget showing the countdown number is automatically updated every second of the countdown, through the method "Update Auto Decide Duration Widget". This function can optionally be overridden in blueprints if you want to implement more effects.</p>
                        `,
                        image: "documentation/docs-uiadditions-decisiondialog-detailspanel.jpg",
                        imageWidth: 742,
                        imageHeight: 553
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>When a decision has been made either manually or automatic, the yes or no decision is broadcasted from the decision dialog widget, and it asks its registered parent menu to close it (by requesting navigation to "None"). Commonly the parent menu binds a function to "On Decided" of an inner decision dialog widget, to implement a response to the decision.</p>
                        `,
                        image: "documentation/docs-uiadditions-decisiondialog-decisiondelegate.jpg",
                        imageWidth: 1167,
                        imageHeight: 739
                    },
                    {
                        id: "playercontrollercore",
                        title: "Player Controller Core",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Player Controller Core is a Player Controller class which has only one purpose. It avoids an Unreal Engine bug, which would otherwise causes focus loss in a specific situation. It is optional, but I recommend that when you create a new Player Controller, that you use this class as its base class. Additionally, it already uses the related "HUD Core Player Controller Component" for conveniently managing input modes.</p>
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
<p>Programmers: The avoided bug is as follows. When (on the Player Controller) "Show Mouse Cursor" is enabled and "Input Mode" is set to "Game" (BlueprintWidgetLibrary), then focus would be lost after releasing any mouse button. Another symptom is any mouse axis value reading 0 unless a button is pressed. The workaround is to reapply the input mode. A fix could require an engine modification on Scene Viewport. The input mode is set through "HUD Core Player Controller Component" which further guards against such situations unexpected by users.</p>
                        `,
                        image: "documentation/docs-uiadditions-playercontrollercore-avoidfocusloss.jpg",
                        imageWidth: 1223,
                        imageHeight: 400
                    },
                    {
                        id: "hudcoreplayercontrollercomponent",
                        title: "HUD Core Player Controller Component",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>By adding a "HUD Core Player Controller Component" to any Player Controller, it is prepared for cooperation with a "HUD Core". Its function is to manage input behavior on the player controller (input mode UI / Game, show mouse cursor etc.), which "HUD Core" automates. Besides using the HUD Core class as your HUD and adding this component to your Player Controller class, there is nothing else you need to do to enjoy the automation.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcoreplayercontrollercomponent-component.jpg",
                        imageWidth: 598,
                        imageHeight: 270
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Here I will give the technical explanation of what exactly is managed through this component and why:</p>
<p>Player Controllers originally come with several blueprint accessible methods and properties which alter input / input routing / cursor behaviors. These are "Show Mouse Cursor" and "Set Input Mode ..." (Widget Blueprint Library), shown on the image.</p>
<p>Due to engine bugs (misbehaving combinations and unexpected behaviors), I advise users to completely ignore these and let my system automate them entirely.</p>
                        `,
                        image: "documentation/docs-uiadditions-playercontroller-managedinputmodes.jpg",
                        imageWidth: 936,
                        imageHeight: 364
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Essentially, I let the HUD Core register menu widgets to the screen, and let the HUD decide what input mode the player controller should be using, based on if there is a UI, Game, or  UI + Game to interact with. This already automates everything, centralized in one place.</p>
<p>How the "HUD Core Player Controller Component" sets the input mode is only relevant to programmers, and shown on the image. The default implementation is blueprint overridable.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcoreplayercontrollercomponent-setinputmode.jpg",
                        imageWidth: 1493,
                        imageHeight: 623
                    },
                    {
                        id: "subhud",
                        title: "Sub HUD",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>A "Sub HUD" is a Menu Widget used with "HUD Core". It contains the UI, structured as nested menus. This provides the full structure of UI to the HUD Core, allowing the HUD Core to manage it.</p>
<p>It acts as a bridge between the HUD Core and inner menus, by notifying the HUD of changes in visibility of menus nested directly inside of a Sub HUD.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcore-subhud-hierarchy.jpg",
                        imageWidth: 1199,
                        imageHeight: 578
                    },
                    {
                        id: "hudcore",
                        title: "HUD Core",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The "HUD Core" is a HUD which centralizes and automates management of the entire UI, and Player Controller input modes.</p>
<p>Additionally it cooperates with its inner Menu Widgets to guard / restore situations of undesired widget focus loss, greatly improving the experience with non cursor input devices.</p>
<p>HUD Core can be instructed to enable a custom analog cursor, and a custom cursor widget system if desired, which cooperate with features on this HUD class.</p>
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
<p>A configured HUD Core class is already provided, named "BP_HUD_UIAdditions".</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcore-assetuiadditions.jpg",
                        imageWidth: 1013,
                        imageHeight: 507
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Configuration is simple. The properties "Player Screen HUD Widget Class", "Player Viewport HUD Widget Class", "Pawn HUD Widget Class" are set if used.</p>
<p>These three classes are of the previously explained type "Sub HUD". They contain the UI, structured as nested menus. This provides the full structure of UI to the HUD Core, allowing the HUD Core to manage it.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcore-setupdetailspanel.jpg",
                        imageWidth: 587,
                        imageHeight: 572
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To enable the HUD, it is chosen to be the HUD class in the Game Mode class that your world is using. If you don't have a custom game mode class set for your world yet, select or create it. Open it, and select the HUD class in its class defaults. I set the "Player Controller Core" to be used as well.</p>
                        `,
                        image: "documentation/docs-uiadditions-addgamemode.jpg",
                        imageWidth: 863,
                        imageHeight: 737
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-uiadditions-configuregamemode.jpg",
                        imageWidth: 836,
                        imageHeight: 565
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Every player gets a HUD.</p>
<p>The HUD automatically adds its 3 "Sub HUDs" to the screen at their correct position, and when required.</p>
<p>"Viewport" is all the available space on the screen. "Player Screen" only differs from it when using split screen mode, then "Player Screen" is a player's own portion of the screen.</p>
<p>The Pawn HUD is created per controlled pawn and stored until the pawn is destroyed.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcore-subhud-hierarchy.jpg",
                        imageWidth: 1199,
                        imageHeight: 578
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Because the HUD is an actor class, it already comes with a root component that is used in world space. This can be convenient to attach widget components to if you wish, keeping their management centralized in the HUD as well.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcore-rootcomponent.jpg",
                        imageWidth: 518,
                        imageHeight: 259
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>If the HUD makes a custom cursor widget, it is added to Z-index 4 in viewport space (top level). There is nothing above it. To start using a custom cursor, calling this method is all you need to do.</p>
                        `,
                        image: "documentation/docs-uiadditions-hud-makecustomcursorwidget.jpg",
                        imageWidth: 1063,
                        imageHeight: 393
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Default in Unreal Engine, users were tasked to perform several tasks to get a single widget on the screen and its input to behave. These tasks are shown on the image. This is not proper management of UI and left users with headaches. This is not done by users with this plugin, because the HUD Core fully manages everything shown for you.</p>
                        `,
                        image: "documentation/docs-uiadditions-menu-addtoviewport.jpg",
                        imageWidth: 1316,
                        imageHeight: 338
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The HUD Core tracks UI visibility when using menu navigation inside its Sub HUDs. Based on visibility it updates the input mode on a Player Controller automatically, through "HUD Core Player Controller Component". Widgets always use the natural order of depth as designed on the widget editor (widgets placed after another are "in front", and widgets are nested within widgets.). On the example image you can see how I did this for the Custom Settings Plugin.</p>
                        `,
                        image: "documentation/docs-uiadditions-lazywidget.jpg",
                        imageWidth: 1792,
                        imageHeight: 899
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        
                        `,
                        image: "documentation/docs-uiadditions-mmmainmenu-hierarchy.jpg",
                        imageWidth: 1794,
                        imageHeight: 889
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>While everything remains automated, you can still access the Sub HUDs manually from blueprints.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcore-methods-subhud.jpg",
                        imageWidth: 408,
                        imageHeight: 409
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>HUD Core provides additional methods to control cursor behavior.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcore-methods-cursor.jpg",
                        imageWidth: 408,
                        imageHeight: 407
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The HUD Core's method "Make Custom Cursor Widget" adds a Cursor Widget directly to the viewport. You don't need to do anything else.</p>
<p>When HUD Core makes the cursor, it also provides some cursor contexts for convenience, such as when a Sub HUD menu is visible or not, or when a pawn desires a cursor to be centered (World Cursor Modifier Component).</p>
                        `,
                        image: "documentation/docs-uiadditions-hud-makecustomcursorwidget.jpg",
                        imageWidth: 806,
                        imageHeight: 328
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Following is the technical explanation of how the HUD Core adds the cursor, which is only of interest to programmers.</p>
<p>The cursor acts like a software cursor, but is added slightly different. Software cursors are overridden with an empty dummy "Disabled Cursor Widget".</p>
<p>The reason why the Cursor Widget is not configured as a software cursor (project settings / viewport), is that Unreal Engine doesn't associate a player with any software cursor made from there. That is is odd, because a lack of player association introduces limitations on programming and visual design. For example, you would not be able to differ cursor designs per player in split screen, and you would not retrieve the correct player's screen geometry.</p>
<p>Because we want a player associated with a cursor, HUD Core adds the cursor to the viewport like this.</p>
                        `,
                        image: "documentation/docs-uiadditions-hud-makecustomcursorwidget-cplus.jpg",
                        imageWidth: 1063,
                        imageHeight: 393
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The HUD Core cooperates with its inner Menu Widgets to restore undesired focus loss on widgets. A focused widget is the widget which directly receives input, commonly a button. If focus is lost, a non cursor device such as a gamepad usually becomes unable to control the application. This situation occurs surprisingly often in Unreal Engine, caused by misconfiguration of widgets or by engine behaviors. HUD Core can effectively guard against this by restoring focus right when it is lost, under conditions assumed undesired.</p>
<p>To use this feature, all you need to do is to use HUD Core and its inner menus (Sub HUDs and menus nested in them).</p>
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
<p>Following is the technical explanation of how HUD Core guards and restores focus in cases of undesired focus loss. This is only of interest to programmers, or useful if you run into problems (read the project's logs then.).</p>
<p>"Undesired" focus loss is assumed if: focus changes && the new path is invalid && the focus cause is not "set directly". A common situation this guards against is loss of focus when clicking a cursor device anywhere random.</p>
<p>If focus is lost to the editor, it is respected.</p>
<p>If focus changes to a new path which does not include a Sub HUD, it is marked undesired. Then we test if the old path contains a Sub HUD we can restore through.</p>
<p>If not, we test if there is any Sub HUD with visible menus we can restore through.</p>
<p>If we found a Sub HUD we can restore through, it will be done. This is extremely powerful as it uses the "RestoreFocus" menu method. This walks through the structure of nested menus navigated to, to find a desired widget to focus. This gives a large amount of fallbacks even when parts of the UI were removed.</p>
<p>The image shows this technical explanation in code. This method, "ActOnFocusChanging" is overridable in c++.</p>
                        `,
                        image: "documentation/docs-uiadditions-hudcore-actonfocuschanging-cplus.jpg",
                        imageWidth: 1021,
                        imageHeight: 863
                    },
                    {
                        id: "defer-paint",
                        title: "Defer Paint",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Defer Paint Widget is a Content Widget. It forces its content to be rendered on top of everything else, regardless of how it is ordered. This can be required to render widget based cursors on top of all the UI, over a Menu Anchor widget for example. To respect the order of widgets, the technique is avoided unless there is no alternative solution.</p>
                        `,
                        image: "documentation/docs-uiadditions-deferpaintwidget.jpg",
                        imageWidth: 1068,
                        imageHeight: 434
                    },
                    {
                        id: "cursor",
                        title: "Cursor",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Cursor Widget is a User Widget which can be used as a software cursor. It keeps track of information that you want it to respond to, like when the user switches to another input device.</p>
                        `,
                        image: "documentation/docs-uiadditions-cursor.jpg",
                        imageWidth: 311,
                        imageHeight: 268
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To create a new Cursor Widget, create a new asset based on "Cursor Widget", or, just use the WBP_CursorWidget asset which is already provided by this plugin and ready to use.</p>
<p>I will use the example asset (WBP_CursorWidget) to explain how the Cursor Widget works.</p>
                        `,
                        image: "documentation/docs-uiadditions-cursor-createasset.gif",
                        imageWidth: 1164,
                        imageHeight: 705
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The asset requires a few widgets inside of it. First is a Defer Paint widget called "RootPanel". This forces the cursor to render on top of all the UI at all times. Inside that is a canvas panel named "RootInner". That allows the cursor to freely move around the screen. Inside that is a canvas panel named "CursorContainer". That contains your cursor design(s) and makes it simple to set up cursor texture alignment. You can implement your cursor design(s) inside "CursorContainer".</p>
                        `,
                        image: "documentation/docs-uiadditions-cursor-hierarchy.jpg",
                        imageWidth: 1310,
                        imageHeight: 660
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>During tick, "CursorContainer" is automatically positioned on its parent canvas to match the position of the hardware cursor. Being a software cursor, there is a very small delay in positioning.</p>
<p>It can also be frozen to the center of the screen, regardless of the position of the hardware cursor. This is a feature commonly desired in first person gameplay where a "cursor" interacts with world objects, centered at where the player's camera is looking at. Design choices such as these are better supported by software cursors than hardware cursors.</p>
                        `,
                        image: "documentation/docs-uiadditions-cursor-methods.jpg",
                        imageWidth: 409,
                        imageHeight: 410
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>In the example the "Cursor Container" contains two texture widgets. The "UICursor" texture intended to be used with UI interactions, and "GameCursor" for non UI use, such as a dot centered on the middle of the screen during gameplay. "GameCursor" is aligned at 0.5 for it to appear centered at the actual (top left) cursor position.</p>
                        `,
                        image: "documentation/docs-uiadditions-cursor-alignment.jpg",
                        imageWidth: 1465,
                        imageHeight: 845
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>You can place multiple cursor designs inside one Cursor Widget just like that. The benefit is that everything will be controlled in one place. It also allows you to easily make animated transitions.</p>
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
<p>To a user, cursors are expected to visually adapt in response to different contexts: "What am I interacting with?", "What input device?", "which player?", "Is the UI shown?", "Animation?", "Anything else?"</p>
<p>A context can be added or removed by calling "Add Cursor Context" / "Remove Cursor Context". This can be as simple or complex as you want, and it is entirely optional.</p>
<p>You can make the cursor respond to a change in contexts by overriding the method "On Cursor Contexts Changed". This method is called automatically when the current input device changes and when a context is added or removed.</p>
<p>The image shows a simple response. If a "visible UI panel" context is present, "UICursor" will be shown. Otherwise "GameCursor" will be shown.</p>
<p>You can test against any combination of your own contexts that you wish the cursor to respond to. It is common to check if the current input device is a cursor or not, and hide a cursor when a gamepad or other device is in use.</p>
<p>Remember that only visually hiding or freezing just a cursor widget does not disable a cursor device or analog cursor (joystick controlled cursor). "HUD Core" can control such cursor behaviors on a larger scale.</p>
                        `,
                        image: "documentation/docs-uiadditions-cursor-oncursorcontextschanged.jpg",
                        imageWidth: 1631,
                        imageHeight: 833
                    },
                    {
                        id: "worldcursormodifiercomponent",
                        title: "World Cursor Modifier Component",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The World Cursor Modifier Component has just one purpose. It tracks if the actor it is added to desires a cursor centered to the screen. The HUD Core class processes this request for non UI gameplay interactions. This is added to Pawns, which depending on their implementation can desire to use a cursor at the center of the screen or freely at any position on the screen.</p>
<p>Tip: If the hardware cursor snaps to center unexpectedly, for example when you press Shift + F1 for mouse cursor during PIE, you are likely experiencing HUD Core's cursor centering feature. While possessing a pawn, a pawn can instruct the HUD Core's cursor centering through the World Cursor Modifier Component.</p>
                        `,
                        image: "documentation/docs-uiadditions-worldcursormodifiercomponent.jpg",
                        imageWidth: 1291,
                        imageHeight: 700
                    },
                    {
                        id: "coreplayerinput",
                        title: "Core Player Input",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Core Player Input is a Player Input class, which registers Custom Slate Navigation Config to Slate (UI). This makes the UI navigation keys configurable from the project settings. It also tracks desired input modifiers (axis multipliers, input key modes (hold / toggle)) and tracks the currently used input device. Tracked values are intended to be implemented elsewhere (Pawn / Controller) where required.</p>
<p>In-game input modifiers can be added and removed for various reasons. A setting inverting the pitch input mapping on a gamepad, can do exactly that by registering an input axis multiplier for it.</p>
<p>The benefit of having multiple input modifiers, is that the same system is merged with gameplay functionality. For example, the pitch inversion setting adds up to other game features:</p>
<ul>
    <li>(gamepad) Base sensitivity + (gamepad) inversion setting + vehicle sensitivity + vehicle damage + vehicle inversion</li>
    <li>(Mouse) Base sensitivity + (mouse) inversion setting + rifle weight + is aiming? + is shooting?</li>
</ul>
<p>In blueprints, you can get to the Core Player Input through Slate Utils.</p>
                        `,
                        image: "documentation/docs-uiadditions-slateutils-gettercoreplayerinput.jpg",
                        imageWidth: 1086,
                        imageHeight: 303
                    },
                    {
                        id: "uiadditionscharacter",
                        title: "UI Additions Character",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The UI Additions Character is set up with all it needs to use the features offered by this plugin:</p>
<ul>
    <li>Input bindings are set up (walking / looking).</li>
    <li>World Cursor Modifier Component is added to pawn (Instructs if to freeze cursor on Pawn).</li>
    <li>It implements response to a HUD Core Player Controller Component on its controller (HUD integration).</li>
    <li>It implements input modifiers of the Core Player Input class (look speed / inversion).</li>
</ul>
<p>Pawn implementations vary greatly. Most likely you will just use this class as an implementation example.</p>
                        `,
                        image: "documentation/docs-uiadditions-uiadditionscharacter-setupplayerinputcomponent.jpg",
                        imageWidth: 1255,
                        imageHeight: 153
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>On the image I give a c++ example. In blueprints you can do this the same way. Here a method is ran every frame for the input mapping YawPos (used to look left / right here). Instead of directly passing on the yaw value to the controller, features of the UI Additions Plugin are implemented:</p>
<ol>
    <li>Do not move the camera when the cursor is not desired to be centered (which would mean we are doing something with the cursor.).</li>
    <li>Do not move the camera in UI / UI Game mode, because we are using a cursor.</li>
    <li>A multiplied axis value is retrieved from Core Player Input. This allows to have multiple axis multipliers (speed / inversion), per input device.</li>
</ol>
<p>This is just one way you might want to implement your Pawns, use it as an example.</p>
                        `,
                        image: "documentation/docs-uiadditions-uiadditionscharacter-inputaxisyaw.jpg",
                        imageWidth: 1156,
                        imageHeight: 425
                    },
                    {
                        id: "lazy",
                        title: "Lazy",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Lazy Widget is a Content Widget. It provides lazy loading functionality for UserWidgets. "Lazy" means that content can be loaded just when desired, instead of being loaded by default. This reduces memory usage and improves overall performance.</p>
<p>The example image shows a menu widget of the Custom Settings Plugin containing a lazy widget. The lazy widget's configurable properties are shown on the details panel. These are explained next. Here it is configured to lazy load another menu.</p>
                        `,
                        image: "documentation/docs-uiadditions-lazywidget.jpg",
                        imageWidth: 1792,
                        imageHeight: 899
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>You can manually load or unload lazy content by calling "Load Content" or "Unload Content". This can also be done automatically, based on the visibility of the UserWidget the lazy widget is inside of, or based on the visibility of itself. The relevant properties to control this behavior for both loading and unloading are visible on the details panel as "Load Controlled By Outer Visibility" and "Load Controlled By Self Visibility".</p>
<p>Also on the details panel, you can find "Load In Editor", which if enabled, loads the content on the design panel on the widget editor.</p>
<p>If enabled, "Collect Garbage On Unload" will trigger Unreal Engine's garbage collector when the method "Unload Content" is called. Garbage collection can be a slow operation, so this trigger is disabled by default. Unreal Engine's behavior, is that widgets hidden or removed from the viewport still use all their resources until they are collected. Meaning, if a user is allowed to rapidly add and remove a widget, resource usage will increase until any garbage collection happens.</p>
<p>"Load Async" allows content to be loaded in the "background". This means the program will not pause until it is loaded, and a user can continue to interact with the program while it is being loaded. It is common to load content asynchronous that is not required directly. This improves the responsiveness of the program.</p>
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
<p>As usual, you also can control these properties by calling the blueprint accessible methods.</p>
                        `,
                        image: "documentation/docs-uiadditions-lazywidget-blueprintmethods.jpg",
                        imageWidth: 410,
                        imageHeight: 409
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To implement a response to the moment lazy content completes loading, you can bind a function to the delegate "On Load Complete".</p>
                        `,
                        image: "documentation/docs-uiadditions-lazywidget-binddelegateonloadcomplete.jpg",
                        imageWidth: 1242,
                        imageHeight: 499
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Shown on the example image, is how the previously shown menu widget responds to the inner, now loaded, menu. It navigates to it.</p>
                        `,
                        image: "documentation/docs-uiadditions-lazywidget-onloadcomplete.jpg",
                        imageWidth: 1179,
                        imageHeight: 382
                    },
                    {
                        id: "hoverfeedback",
                        title: "Hover Feedback",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This widget is used to activate a visual response on demand, when hovering, and when focusing content. It can be used as outline / background for content in its ContentSlot. The visual result can vary from hovering a button to outlining widgets during a tutorial, and is fully customizable.</p>
<p>It responds to changes in the currently used input device, so that it can simulate a hover appearance for gamepads as well.</p>
                        `,
                        image: "documentation/docs-uiadditions-hoverfeedback-result.jpg",
                        imageWidth: 335,
                        imageHeight: 92
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The hover feedback widget is already configured to respond to focus / hover events. At times a designer wants to place the hover feedback widget inside of a UserWidget which handles these events instead. This UserWidget can notify its inner hover feedback widget of such events at all times. This method can also be used to visualize feedback on demand. For example, to light up a widget during a tutorial. To lock a hover feedback widget to a hovered appearance, call method "Set Appear Hovered By Default".</p>
                        `,
                        image: "documentation/docs-uiadditions-hoverfeedback-hierarchyusage.jpg",
                        imageWidth: 1415,
                        imageHeight: 335
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-uiadditions-hoverfeedback-bpnotifyusage.jpg",
                        imageWidth: 1462,
                        imageHeight: 427
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To set up a hover feedback widget, you can override its methods "Appear Hovered" and "Appear Normal". The designer is free to implement these states in any way. On the example image I load a Central style onto a border widget background.</p>
                        `,
                        image: "documentation/docs-uiadditions-hoverfeedback-setup.jpg",
                        imageWidth: 1223,
                        imageHeight: 473
                    },
                    {
                        id: "virtualkeyboard",
                        title: "Virtual Keyboard",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Virtual Keyboard Widget is a Menu Widget, which holds button widgets representing input keys or text strings. The input a button represents is simulated when the button is used.</p>
<p>The widget is intended for use when Unreal Engine does not offer a built-in virtual keyboard for the OS / devices you are using. For example, when you use a gamepad on a desktop running Windows. It does not disable a built-in virtual keyboard if one is present, and is not built to replace one.</p>
<p>By default, the left trigger on a gamepad toggles caps, and the left face button on a gamepad simulates backspace.</p>
<p>On the example image I show how I use the virtual keyboard in the Custom Settings Plugin's main menu to type into an editable text widget.</p>
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
<p>Widget designers can design their own virtual keyboard. Buttons placed anywhere on the virtual keyboard automatically register their presence to the keyboard.</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboard-alphanumericpanel.jpg",
                        imageWidth: 1439,
                        imageHeight: 411
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The virtual keyboard is instructed to send input to a widget by calling "Bind Widget Which Receives Input" with the target widget. The target widget must be focusable.</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboard-bindwidgetwhichreceivesinput.jpg",
                        imageWidth: 1091,
                        imageHeight: 286
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>There are two new button types for use with the virtual keyboard:</p>
<p>"Virtual Keyboard Key Widget": This button is configured by providing just an input key (FKey, the keys you use with input action mappings.). The button then sets itself up with the correct input key texture and behavior. When pressed or released (configurable), the virtual keyboard responds by simulating the key press on the target widget. This type of button is useful to quickly set up keys and simulate input actions, but lacks engine support for text editing and certain keys.</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboardkey-configure.gif",
                        imageWidth: 704,
                        imageHeight: 389
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>"Virtual Keyboard Text Key Widget": This button is configured by providing an input string and it's shift version ("r" "R", "1" "!", or anything custom like ".com"). Two textures are configured to visualize the input as a button. When pressed or released (configurable), the virtual keyboard responds by sending characters of the string configured on this button to the target widget. This type of button is very useful and very customizable for text editing usage. The virtual keyboard will use this button's input string or its shifted version depending on if the caps modifier is enabled on the virtual keyboard ("Get / Set Is Caps Modifier Enabled").</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboardtextkey-configure.gif",
                        imageWidth: 838,
                        imageHeight: 628
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
                        
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboard-numericpanel.jpg",
                        imageWidth: 1073,
                        imageHeight: 646
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Layouts should be customized to fit the needs of the target widget (what characters does it take?) and its purpose (email? web? math? code?) to be user friendly. The provided virtual keyboard menu widget can be used as it is, or as template to quickly set up new variants.</p>
<p>When you create a larger panel you can consider wrapping around Slate navigation from one side of the panel to the other, so that gamepad users can reach keys faster.</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboard-symbolpanel.jpg",
                        imageWidth: 1381,
                        imageHeight: 345
                    },
                    {
                        id: "virtualkeyboardmenu",
                        title: "Virtual Keyboard Menu",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>If you wish to have multiple types of virtual keyboards (alpha, numeric etc.) separately but nested on one menu, you can speed up development by creating a menu widget based on the class "Virtual Keyboard Menu".</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboardmenu-panels.jpg",
                        imageWidth: 1333,
                        imageHeight: 322
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Navigation setup is quick, done as documented on the menu widget. Menus and buttons are given matching navigation routes on the editor panel, and everything is automated.</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboardmenu-buttons.jpg",
                        imageWidth: 1326,
                        imageHeight: 319
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Widget designers must override the method "Get Virtual Keyboard Widgets" and return an array of the virtual keyboard widgets present inside the menu. This makes it possible to call the methods "Is Any Virtual Keyboard Simulating Input" and "Bind Widget Which Receives Input" directly on this menu instead of on individual virtual keyboard widgets.</p>
                        `,
                        image: "documentation/docs-uiadditions-virtualkeyboardmenu-getvirtualkeyboardwidgets.jpg",
                        imageWidth: 1065,
                        imageHeight: 333
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
                        id: "slateutils",
                        title: "Slate Utils",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Slate Utils is a blueprint function library which makes Slate related engine code a little more accessible to blueprints. It also provides some utilities related to input mappings, input conversions, widget geometry calculations, finding ancestor widgets, retrieving player / controller / player input information, and to retrieve which input device is currently being used by a user.</p>
<ul>
    <li>It can be used to simulate a key press for a user (ProcessKeyEvent)</li>
    <li>It is used to get the current input device.</li>
    <li>It does some (widget) geometry calculations, such as getting the screen center position, or clamping.</li>
    <li>It finds a widget's ancestor by class (FindAncestorWidget...).</li>
    <li>Methods to retrieve a Slate user index.</li>
    <li>Contains validation methods for default mouse cursors and input mappings.</li>
    <li>Contains methods to convert or retrieve data from input.</li>
    <li>Method to retrieve a char / key code from an input key.</li>
    <li>It can find input mappings from the project settings, given minimal information (FindActionMappingBy...)</li>
    <li>It retrieve an input chord from a key / pointer event, or action / axis key mapping (GetInputChordFrom...).</li>
    <li>"Is First Local Player Controller" tests if a PlayerController is the first local PlayerController. This exists to allow blueprints access to c++ engine code. It is used, where certain widgets such as main menu settings would not be shown for player 2.</li>
</ul>
                        `,
                        image: "documentation/docs-uiadditions-slateutils-methods.jpg",
                        imageWidth: 411,
                        imageHeight: 897
                    },
                    {
                        id: "localizationutils",
                        title: "Localization Utils",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Localization Utils is a blueprint function library which can be used to procedurally localize text.</p>
                        `,
                        image: "documentation/docs-uiadditions-localizationutils-methods.jpg",
                        imageWidth: 410,
                        imageHeight: 410
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The method "Localize" is used to localize procedural content. It is only used when keys to retrieve localized text need to be built dynamically. An example of such dynamic content is a list of widgets displaying current input mappings and their information. Such large amounts of localized widgets can now easily be generated from code and no longer require you to manually place them on the design panel.</p>
                        `,
                        image: "documentation/docs-uiadditions-localizationutils-localize.jpg",
                        imageWidth: 836,
                        imageHeight: 318
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The localization methods use a string table id + a key to find a localized text. The string table id can be the string table asset path, formatted as "UIAdditionsPlugin/Localization/Text/ST_HID.ST_HID".</p>
<p>A string table Id can also be retrieved from a String Table pointer, and this is often preferred. In blueprints this can be done through the Localization Utils.</p>
                        `,
                        image: "documentation/docs-uiadditions-localizationutils-localize-stringtablepointer-bp.jpg",
                        imageWidth: 1025,
                        imageHeight: 259
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The additional methods "Localize ..." are utilities which prefix / suffix the key you provide into a matching format, to look for a localized value. This helps keeping your string tables organized.</p>
<p>For example, calling "LocalizeInputMappingDescription" with name "NavBack", results in localization for the key "InputMapping_NavBack_Description".</p>
                        `,
                        image: "documentation/docs-uiadditions-localizationutils-localizeinput.jpg",
                        imageWidth: 1548,
                        imageHeight: 305
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `

                        `,
                        image: "documentation/docs-uiadditions-localizationutils-localizeinputcplus.jpg",
                        imageWidth: 865,
                        imageHeight: 367
                    },
                ]
            }
        ];
    }
}