class DocumentationOptionEventManager {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionEventManager.getNavTitle();
    }

    static getNavTitle() {
        return "Plugin: Event Manager";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return appBuilder.getPluginInfo(appBuilder.pluginIdEventManager).docsNavId;
    }

    static create() {
        DocumentationContent.create(DocumentationOptionEventManager.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return `
<p>
The Event Manager Plugin manages global info in your virtual world, as a collection of text strings. Systems can read / write this info in this one place, decoupling them from others and providing easy access to information. 
</p>
<p>
This technique is efficient to implement mission systems, dialog systems, gameplay, simulations and more, as they are systems which often require complex information from another, which is now easy to manage.
</p>
<p>
Example usage:
</p>
<ol>
    <li>
Have a dialog option unlock while X info is present and Y info is not, such as a topic to talk about only during daytime.    
    </li>
    <li>
Have a door automatically open when X info is present ("player_found_key").    
    </li>
    <li>
Set up complex event designs with ease, such as progressing a game level or mission.
    </li>
</ol>
        `;
    }

    static getCompactOptionContent() {
        let pluginInfoBuilder = new PluginInfoBuilder();
        return [
            {
                id: "event-manager",
                title: DocumentationOptionEventManager.getNavTitle(),
                url: "",
                pluginInfoId: appBuilder.pluginIdEventManager,
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
                        html: DocumentationOptionEventManager.getCompactOptionSummary(),
                        image: "documentation/docs-eventmanager-intro.gif",
                        imageWidth: 1000,
                        imageHeight: 509
                    },
                    {
                        id: "plugin-benefits",
                        title: "Benefits",
                        bSub: false,
                        groupStart: "",
                        html: `
<ul>
    <li>Read / Write global information in one place.</li>
    <li>Automatically run functions for a combination of information.</li>
    <li>Efficient for sharing info to mission systems, dialogs, simulations and more.</li>
    <li>Systems sharing information can be decoupled.</li>
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
                        html: pluginInfoBuilder.create(appBuilder.pluginIdEventManager),
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
                        groupStart: "Quick start",
                        html: ``,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "definitions",
                        title: "Definitions",
                        bSub: false,
                        groupStart: "",
                        html: `
<p><strong>Info:</strong> is a short piece of text, describing what is going on in your virtual world. In a game these can look like "found_key_X", "started_mission_X", or "weather_sunny".</p>
<p><strong>Info Event Subsystem:</strong> All info is stored here. Globally read from / write info to this system.</p>
<p><strong>Event Trigger:</strong> An event trigger makes an event happen automatically (function call) for a combination of info. Example: A door opens for the combination: (has info "found_door_x_key", not info "door_x_lock_broken").</p>
<p><strong>Info Event:</strong> This is an action (function call) which is automatically performed by an Event Trigger. This is the code which makes something happen in your world, like opening a door or spawning objects.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "building-an-environment",
                        title: "Building an environment",
                        bSub: false,
                        groupStart: "",
                        html: `

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
The example image shows how an Info Event Component registers a single info event for the actor it is attached to, an example door. The method "ActOnInfoOpenDoor" will be called when the info "FoundKey" is present and "OpenedDoor" is not.</p>
                        `,
                        image: "documentation/docs-eventmanager-infoeventcomponent.jpg",
                        imageWidth: 1618,
                        imageHeight: 457
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The door actor contains a few components: two walls, the door, a key, a collision box for the key. Walking through the collision box adds the info "FoundKey" to the Info Event Subsystem.</p>
                        `,
                        image: "documentation/docs-eventmanager-keyoverlap.jpg",
                        imageWidth: 1912,
                        imageHeight: 447
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The addition of info to the Info Event Subsystem causes the Info Event Component to check if any of its info events matches the current info. It does (Only "FoundKey" is present). The bound function "ActOnInfoOpenDoor" is called, which hides the key, removes the door, and adds the info "OpenedDoor" to the Info Event Subsystem.</p>
                        `,
                        image: "documentation/docs-eventmanager-actoninfoopendoor.jpg",
                        imageWidth: 1042,
                        imageHeight: 328
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Walking over the key now opens the door. The info system is extremely useful when dealing with large amounts of information from several systems.</p>
                        `,
                        image: "documentation/docs-eventmanager-intro.gif",
                        imageWidth: 1000,
                        imageHeight: 509
                    },
                    {
                        id: "example-usage-of-info",
                        title: "Example usage of info",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Common uses for info: mission systems, simulations, AI, level events (doors unlocking, object spawning.), and dialog systems.</p>
<p>Info can be used without events and event triggers as well. Following is an example on how this is done in a dialog system, where a combination of 4 info strings from different systems unlock a dialog topic:</p>
<p>A dialog starts. Person B can ask person A to buy apples, only if the info condition is met:</p>
<ul>
    <li>has info: "overall_relation_good" > Relation with person A is good.</li>
    <li>has info: "time_day" > It is day time.</li>
    <li>not info: "task_buy_apples_done" > The task hasn't already been done.</li>
    <li>not info: "shop_x_closed_permanently" > A world event would not prevent this from being possible.</li>
</ul>
<p>Without Info you would require more complex code to integrate the dialog system with the mentioned example systems ("relations", "time", "tasks", "world events"), to get to all the information required.</p>
<p>With the Info system all the required information was retrievable from one place at once, the Info Event Subsystem. This reduced complexity and decoupled the example systems.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "Class design",
                        html: ``,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                    {
                        id: "info-event-subsystem",
                        title: "Info Event Subsystem",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Info Event Subsystem is a Game Instance Subsystem. It manages Info. Info strings can be globally read or written by any system. This makes information easy to access while decoupling those systems.</p>
<p>Examples of info strings are given in the previous topic "Info".</p>
<p>This subsystem broadcasts when info is added or removed.</p>
<p>The state "Has Full Info" tells if the current collection of info is considered complete or incomplete. While you are loading a collection of default info (from a save file or elsewhere), "Has Full Info" must be marked as false to make the system aware that we shouldn't broadcast changes until "Has Full Info" is set to true. This avoids responses to incomplete info. By default, the info is considered complete and any add / remove actions to info broadcast directly.</p>
<p>The method "Full Info Contains" is used to check if the full info contains a string of info. This gives you an error if "Has Full Info" is currently false, to notify you of probable misuse. This is the method you would use in the previously given example of a dialog system looking for a topic's info conditions.</p>
                        `,
                        image: "documentation/docs-eventmanager-infoeventsubsystem-methodsbp.jpg",
                        imageWidth: 465,
                        imageHeight: 549
                    },
                    {
                        id: "info-event-component",
                        title: "Info Event Component",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Info Event Component can be added to any actor. It listens for info from the Info Event Subsystem, and manages its own info events.</p>
<p>An info event is a function which is automatically called for a specific combination of info. (has info X, has info Y, not info Z.)</p>
<p>The task of this component is to connect info events to the actor this component is on. (if placed on a door, a combination of info opens the door.)</p>
<p>Blueprint users can configure this by calling the method "Add Info Event" on their Info Event Component.</p>
                        `,
                        image: "documentation/docs-eventmanager-infoeventcomponent.jpg",
                        imageWidth: 1618,
                        imageHeight: 457
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>C++ users can do the same in one line using "Bind Info Effect":</p>
                        `,
                        image: "documentation/docs-eventmanager-bindinfoevent.jpg",
                        imageWidth: 971,
                        imageHeight: 111
                    },
                    {
                        id: "event-trigger-behavior-in-detail",
                        title: "Event Trigger behavior in detail",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This detailed explanation of the event trigger behavior can help you make design choices on a larger scale, important to deal with questions like when to add / remove info, how to prevent retriggers, and how to deal with events when loading a saved state.</p>
<p>An event triggers when the info subsystem holds a combination of HasInfo and not NotInfo. The trigger can look like:</p>
<ul>
    <li>has info: "mission_1_starts"</li>
    <li>not info: "spawned_mission_1_enemies"</li>
    <li>event: SpawnEnemies() + AddInfo(spawned_mission_1_enemies)</li>
</ul>
<p>In this example info was added (spawned_mission_1_enemies) to prevent a future retrigger.</p>
<p>In general it is better to add info to function as "not info" on the trigger, than to remove info, to avoid a trigger condition. This depends a bit on the situation. A weather system reporting the current weather as info might remove "weather_sunny" and add "weather_rain". A game mission however, often acts a bit as a log of things which did happen and can not be undone. ("started_mission_1", "opened_door_1", "found_key_x", ...)</p>
<p>An immediate retrigger is guarded against, as long as the event was triggerable on the previous check (when info was added or removed globally). An event trigger meeting info conditions will trigger the event only once until the conditions are no longer met. then it can retrigger when info conditions are met again. This can reduce the amount of HasInfo / NotInfo required, has HasInfo(found_key) does not require NotInfo(opened_door) to prevent a retrigger.</p>
<p>However, your event trigger / retrigger guard design depends entirely on your implementation. If for example, you use a save game system to load some previously stored data, you must consider what you restore and how you restore it. For example, restoring previously spawned characters from a save system does not prevent an event trigger from spawning new (duplicate) ones if not instructed to.</p>
                        `,
                        image: "",
                        imageWidth: 0,
                        imageHeight: 0
                    },
                ]
            }
        ];
    }
}