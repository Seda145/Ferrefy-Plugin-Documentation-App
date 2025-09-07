class DocumentationOptionTime {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Documentation - " + DocumentationOptionTime.getNavTitle();
    }

    static getNavTitle() {
        return "Plugin: Time";
    }

    static getNavItemTitle() {
        return DocumentationOptionsOverview.getNavItemTitle();
    }

    static getNavId() {
        return appBuilder.getPluginInfo(appBuilder.pluginIdTime).docsNavId;
    }

    static create() {
        DocumentationContent.create(DocumentationOptionTime.getCompactOptionContent(), DocumentationOptionsOverview);
    }

    static getCompactOptionSummary() {
        return `
<p>The Time Plugin simulates time in your virtual world. Time itself is managed through one subsystem (Time Subsystem). Digital and analog clocks can be placed on the UI and as 3D objects in a level.</p>
<p>The Time subsystem controls the current date, time and speed of time, which can be configured at any moment. It can control the time dilation system provided by Unreal Engine, or run independent from it. It supports (clock) time reversal, which itself does not reverse the state of the world, but can be used for such specific implementations. It provides analog and digital clock classes (mesh and widget based) which synchronize with this system and can be designed in any way you wish. Clocks can also be controlled manually, and given offsets individually. Examples are provided to get you started quickly.</p>
        `;
    }

    static getCompactOptionContent() {
        let pluginInfoBuilder = new PluginInfoBuilder();
        return [
            {
                id: "time",
                title: DocumentationOptionTime.getNavTitle(),
                url: "",
                pluginInfoId: appBuilder.pluginIdTime,
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
                        html: DocumentationOptionTime.getCompactOptionSummary(),
                        image: "documentation/docs-time-plugin.gif",
                        imageWidth: 956,
                        imageHeight: 618
                    },
                    {
                        id: "plugin-benefits",
                        title: "Benefits",
                        bSub: false,
                        groupStart: "",
                        html: `
<ul>
    <li>Simulate a date / time and speed of time for your virtual environment.</li>
    <li>Manage the time in one place, through the Time subsystem.</li>
    <li>Have automatically synchronizing clocks, simple to design in both 2D and 3D.</li>
    <li>Clocks can also be controlled manually, and given a time offset individually.</li>
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
                        html: pluginInfoBuilder.create(appBuilder.pluginIdTime),
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
                        id: "time-subsystem",
                        title: "Time Subsystem",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The Time Subsystem (Game Instance subsystem) is used to globally manage time for clocks. A timescale (speed of "clock" time) can be configured which can work with or independent from Unreal Engine's time dilation system. It tracks the 'current' time and date, which can be set to anything you want by calling "Set Date Time".</p>
                        `,
                        image: "documentation/docs-time-timesubsystemmethods.jpg",
                        imageWidth: 1355,
                        imageHeight: 432
                    },                        
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The timescale can be modified by calling "Set Control Global Time Dilation", where the first parameter is the new timescale and the second is wether we want to control Unreal Engine's time dilation system with it. When the time dilation factor is set by this method, the timescale value will be clamped to the time dilation  factor to respect its configuration. You can find this configuration in world settings.</p>
                        `,
                        image: "documentation/docs-time-dilation-worldsettings.jpg",
                        imageWidth: 583,
                        imageHeight: 377
                    },                        
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Delegates are called on any change in its date / time, making it possible to respond to changes from within any other system. The time is updated during its Tick and pauses when the world is paused. It offers a mode to have "clock time" move in reverse, but does not restore the world itself to a previous state in time. This is normal behavior, as world state always moves forward. If you are looking to build some form of time travel feature, you would use the time reported by the Time Subsystem by implementing a response to it, to modify things of choice from one state to another.</p>
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
<p>To implement a response to the Time Subsystem, you can bind an event to one of its delegates. The example image shows how to set up a clock to execute a custom event every time the hour value changes on the Time Subsystem. The Time Subsystem tracks the current time in DateTime format, which includes the year, month, day, hour, minute, second and millisecond, processed as earth's date / time is. A change in these values (through "Set Date Time") causes the matching delegates to be called. If the time changes from 14:25:00 to 15:26:00, the delegates "On Time Changed", "On Minute Changed", "On Hour Changed" will be called. Note that while time moved forward, the seconds did not change and "On Second Changed" was not called. If you want to play a sound effect (or do anything else) once every exact hour (14:00:00), you would respond to a change in the hour value as done on the example image, and then check if the minute and second values are both 0.</p>
                        `,
                        image: "documentation/docs-time-timesubsystemdelegates.jpg",
                        imageWidth: 1258,
                        imageHeight: 628
                    },                       {
                        id: "clocks-in-general",
                        title: "Clocks in general",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>All clocks are prepared to automatically synchronize their time to the Time Subsystem. Their time can be set individually by calling "Set Time" on a clock, but to manually control one you you must disable automatic synchronization with the Time Subsystem by calling "Set Enable Manual Time Override" on a clock.</p>
                        `,
                        image: "documentation/docs-time-clock-manualtimeoverride.jpg",
                        imageWidth: 912,
                        imageHeight: 701
                    },                       {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Every instance of a clock can be configured with an additional time offset if desired. This creates a time difference between clocks.</p>
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
<p>Clocks must visualize the combined time (Time + Time Offset). Visual synchronization is implemented by overriding the method "Visualize Time". This method is called during "Begin Play" (actor) or "On Initialized" (widget), when time (second) passes on the Time Subsystem, and when a clock changes its time relevant settings. You can override the Visualize Time method to change or add effects, like playing a clock ticking sound.</p>
                        `,
                        image: "documentation/docs-time-clock-function-visualizetime.jpg",
                        imageWidth: 1260,
                        imageHeight: 734
                    },
                    {
                        id: "analog-clock",
                        title: "Analog Clock (Mesh)",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>This is a mesh based analog clock. Any design is supported, and the example prepared with a simple model is provided.</p>
                        `,
                        image: "documentation/docs-time-analogclock-demo.gif",
                        imageWidth: 576,
                        imageHeight: 383
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To add a mesh based analog clock into your project, create a new blueprint asset based on "Analog Clock Actor".</p>
                        `,
                        image: "documentation/docs-time-asset-analogclock.gif",
                        imageWidth: 981,
                        imageHeight: 649
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The asset automatically contains the components it requires to function. The "Root Component" is used to attach your clock mesh to, excluding the clock hands. The "Clock Hands Root" is used to center the clock hands onto your clock. It acts as their rotation origin. The "Hand...root" components are used to attach your hour / minute / second hand meshes to.</p>
                        `,
                        image: "documentation/docs-time-clock-components-default.jpg",
                        imageWidth: 499,
                        imageHeight: 243
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The "Hand...root" components are automatically given a relative rotation over their X axis to match the time. Seen on the image, I moved the "Clock Hands Root" component up on the Z axis to the point where the clock hands should be on this clock model. Transforms on other components have not been modified and left at default (0 position, 0 rotation).</p>
                        `,
                        image: "documentation/docs-time-clock-components-meshes.jpg",
                        imageWidth: 1216,
                        imageHeight: 720
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The attached static meshes visualize the clock and its hands. The origin point of the clock hand meshes was set to the point they are expected to rotate from, in 3D modeling software. All the meshes are set up with X+ as their "forward" axis (the clock hands are also positioned on the X+ side), default for Unreal Engine and required to get the clockwise motion. The clock hand meshes were modeled pointing up (Z+) towards the 0 seconds position.</p>
                        `,
                        image: "documentation/docs-time-clock-components-hands.jpg",
                        imageWidth: 1300,
                        imageHeight: 708
                    },
                    {
                        id: "analog-clock-widget",
                        title: "Analog Clock (Widget)",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The analog clock widget supports both use on the UI and inside the 3D world.</p>
                        `,
                        image: "documentation/docs-time-analogclockwidget-demo.jpg",
                        imageWidth: 373,
                        imageHeight: 368
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To add a widget based analog clock, create a new widget blueprint asset based on "Analog Clock Widget".</p>
                        `,
                        image: "documentation/docs-time-asset-analogclockwidget.gif",
                        imageWidth: 1042,
                        imageHeight: 726
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To visualize the time, it is required to add widgets for the clock hands. Often these are images, but any type of UWidget is supported. They need to be added with the correct names "HandHour", "HandMinute", "HandSecond" as shown on the example image. Their rotation will then automatically be managed by the clock system when it synchronizes to time. Inside the editor the widget attempts to use system time for preview purposes (PreConstruct at design time). Rotation of the clock hand widgets is performed automatically by modifying their Angle (Render Transform > Transform > Angle). The Pivot property under Render Transform should be adapted to your design, so that the clock hands rotate from their 'base' point (Y 1) like a clock hand instead of from their center (Y 0.5). The clock hands are designed pointing upwards to the 0 seconds on the clock. The example asset shown is provided.</p>
                        `,
                        image: "documentation/docs-time-analogclockwidget-hierarchy.jpg",
                        imageWidth: 1184,
                        imageHeight: 711
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Their rotation will then automatically be managed by the clock system. This is done through modification of the Angle property (Render Transform > Transform > Angle). The Pivot property under Render Transform should be adapted to your design, so that the clock hands rotate from their 'base' point (Y 1) like a clock hand instead of from their center (Y 0.5). The clock hands are designed pointing upwards to the 0 seconds on the clock, with their angle set to 0. The example asset shown is provided and is already prepared for use. You can adapt it to any design you wish. The borders now used to visualize the clock can be replaced with images or anything else.</p>
                        `,
                        image: "documentation/docs-time-analogclockwidget-pivot.jpg",
                        imageWidth: 949,
                        imageHeight: 641
                    },
                    {
                        id: "digital-clock-widget",
                        title: "Digital Clock (Widget)",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The digital clock is set up as a widget, supporting both use on the UI and inside the 3D world.</p>
                        `,
                        image: "documentation/docs-time-digitalclockwidget-demo.jpg",
                        imageWidth: 361,
                        imageHeight: 298
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>To create a new digital clock widget, create a new blueprint asset based on "Digital Clock Widget".</p>
                        `,
                        image: "documentation/docs-time-asset-digitalclock.gif",
                        imageWidth: 605,
                        imageHeight: 699
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>For the digital clock widget to display the time, a text widget is added inside it with the name "TextTimeWidget". The simple example asset shown is provided, and you can customize the design in any way you wish.</p>
<p>By default the digital clock displays the time formatted as 00:00 (hour:minute) in 24 hours format, and this can be configured as well. To display the time in 12 hour format, uncheck "Display as 24 Hours" on the editor panel or use its setter method. Inside the editor the widget attempts to use system time for preview purposes (PreConstruct at design time).</p>
                        `,
                        image: "documentation/docs-time-digitalclockwidget.jpg",
                        imageWidth: 1081,
                        imageHeight: 511
                    },
                    {
                        id: "",
                        title: "",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>The digital clock formats the DateTime it is set to as a text to display through its text widget. The way this text is formatted can be customized entirely from the default 00:00 to any format you desire by overriding the method "Format Date Time As Clock Text". For example, you could remove the prefixed 0, or choose to display the date next to the time. On the example image the prefix 0 is not added, and seconds are displayed after the minutes (9:15:5).</p>
                        `,
                        image: "documentation/docs-time-digitalclockwidget-timeformat.jpg",
                        imageWidth: 961,
                        imageHeight: 627
                    },
                    {
                        id: "clock-widgets-in-3d-actor",
                        title: "Using clock widgets in 3D (Actor)",
                        bSub: false,
                        groupStart: "",
                        html: `
<p>Clock widgets can be added onto an actor so it can be placed inside the world's 3D space instead of on the 2D UI. This is done by adding a widget component to any actor and setting the widget class to the clock widget you designed, as shown on the example image. The example is provided. The clock configuration / control is done through the widget, so you don't have to configure anything else on this actor. You can optionally design a 3D model to display the widget on, of any design.</p>
                        `,
                        image: "documentation/docs-time-clockwidget-widgetcomponent.jpg",
                        imageWidth: 1466,
                        imageHeight: 973
                    }
                ]
            }
        ];
    }
}