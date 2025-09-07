// Program to build html files written as javascript components.
class AppBuilder {
    constructor() {
		// Company constants
		this.companyEmail 	= "";

		// Plugin Ids
		this.pluginIdAssetNaming 				= "assetNaming";
		this.pluginIdCentralUI 					= "centralUI";
		this.pluginIdCustomSettings 			= "customSettings";
		this.pluginIdEventManager				= "eventManager";
		this.pluginIdStatusEffects				= "statusEffects";
		this.pluginIdTime 						= "time";
		this.pluginIdUIAdditions 				= "uiAdditions";
		this.pluginIdUtility 					= "utility";
		// External dependency ids
		this.pluginIdTemplateSequence 			= "templateSequence"
		this.pluginIdAnimationSharing 			= "animationSharing"
		this.pluginIdImgMedia 					= "imgMedia"
		this.pluginIdNiagara 					= "niagara"
		this.pluginIdVariantManagerContent 		= "variantManagerContent"
		this.pluginIdPaper2D 					= "paper2D"
		this.pluginIdAudioSynesthesia 			= "audioSynesthesia"
		this.pluginIdMotoSynth 					= "motoSynth"


		// App logic
		this.appName = 'FerrefyPluginDocumentation';
	}
	
	/* Functions */

	getRootUrl() {
		// From the private path (containing your .htm file), we can extract a "root" reference to (re)write paths to the public folder.
		// This is used to build paths to js, css, images etc. regardless of the folder structure on your PC.
		return document.location.pathname.split('/' + this.appName + '/App/')[0] + '/' + this.appName + '/App/';
	}

	buildMediaUrl(inFile) {
		return this.getRootUrl() + "media/" + inFile; 
	}

	buildUrl(inPage) {
			return this.getRootUrl() + 'app.htm?p=' + inPage; 
	}

	getNavInfo(inNavId) {
		switch(inNavId) {
			// URL
			case("home"):
			return {
				url: this.buildUrl("home"),
			}
			// URL - Docs
			case("docs"):
			return {
				url: this.buildUrl("documentation/overview"),
			}
			case("docsAssetNaming"):
				return {
					url: this.buildUrl("documentation/asset-naming-plugin"),
				}
			case("docsCentralUI"):
				return {
					url: this.buildUrl("documentation/central-ui-plugin"),
				}
			case("docsCustomSettings"):
				return {
					url: this.buildUrl("documentation/custom-settings-plugin"),
				}
			case("docsGeneral"):
				return {
					url: this.buildUrl("documentation/general-information"),
				}
			case("docsEventManager"):
				return {
					url: this.buildUrl("documentation/event-manager-plugin"),
				}
			case("docsIntroductionAndUsage"):
				return {
					url: this.buildUrl("documentation/introduction-and-usage"),
				}
			case("docsStatusEffects"):
				return {
					url: this.buildUrl("documentation/status-effects-plugin"),
				}
			case("docsTime"):
				return {
					url: this.buildUrl("documentation/time-plugin"),
				}
			case("docsUIAdditions"):
				return {
					url: this.buildUrl("documentation/ui-additions-plugin"),
				}
			case("docsUtility"):
				return {
					url: this.buildUrl("documentation/utility-plugin"),
				}
			// URL - Shop
			case("shopAssetNaming"):
				return {
					url: "https://github.com/Seda145/Ferrefy-Plugin-Asset-Naming",
					navTitle: "Free"
				}
			case("shopCentralUI"):
				return {
					url: "https://github.com/Seda145/Ferrefy-Plugin-Central-UI",
					navTitle: "Free"
				}
			case("shopCustomSettings"):
				return {
					url: "https://github.com/Seda145/Ferrefy-Plugin-Custom-Settings",
					navTitle: "Free"
				}
			case("shopEventManager"):
				return {
					url: "https://github.com/Seda145/Ferrefy-Plugin-Event-Manager",
					navTitle: "Free"
				}
			case("shopStatusEffects"):
				return {
					url: "https://github.com/Seda145/Ferrefy-Plugin-Status-Effects",
					navTitle: "Free"
				}
			case("shopTime"):
				return {
					url: "https://github.com/Seda145/Ferrefy-Plugin-Time",
					navTitle: "Free"
				}
			case("shopUIAdditions"):
				return {
					url: "https://github.com/Seda145/Ferrefy-Plugin-UI-Additions",
					navTitle: "Free"
				}
			case("shopUtility"):
				return {
					url: "https://github.com/Seda145/Ferrefy-Plugin-Utility",
					navTitle: "Free"
				}
			default:
			console.error("No navigation info found for this ID: " + inNavId);
			return null;
		}
	}

	getPluginInfo(inPluginId) {
		switch(inPluginId) {
		case(this.pluginIdAssetNaming):
			return {
				title: "Asset Naming",
				docsNavId: "docsAssetNaming",
				shopNavId: "shopAssetNaming",
				carouselVideo: appBuilder.buildMediaUrl("carousel/Carousel-AssetNaming.mp4"),
				descriptionHTML: `
<p>The Asset Naming plugin automates naming your Unreal Engine assets correctly.</p>
<ul>
	<li>Names can be short, unique, readable, and consistent.</li>
	<li>Asset types are quickly identified by their prefix.</li>
	<li>150+ asset types automated out of the box.</li>
	<li>Fully adaptable. Make your own rules.</li>
	<li>Teams love how much easier cooperation becomes.</li>
    <li>Rename any number of assets in 2 clicks.</li>
</ul>
`,
				bIsIncludedWithEngine: false,
				dependencies: [
					this.pluginIdTemplateSequence,
					this.pluginIdAnimationSharing,
					this.pluginIdImgMedia,
					this.pluginIdNiagara,
					this.pluginIdVariantManagerContent,
					this.pluginIdPaper2D,
					this.pluginIdAudioSynesthesia,
					this.pluginIdMotoSynth
				]
			}
		case(this.pluginIdCentralUI):
			return {
				title: "Central UI",
				docsNavId: "docsCentralUI",
				shopNavId: "shopCentralUI",
				carouselVideo: appBuilder.buildMediaUrl("carousel/Carousel-CentralUI.mp4"),
				descriptionHTML: `
<p>This plugin improves the widget design workflow of Unreal Engine. With it, you can easily control the design of any number of widgets at once from one place.</p>
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
				bIsIncludedWithEngine: false,
				dependencies: [
					
				]
			};
		case(this.pluginIdCustomSettings):
			return {
				title: "Custom Settings",
				docsNavId: "docsCustomSettings",
				shopNavId: "shopCustomSettings",
				carouselVideo: appBuilder.buildMediaUrl("carousel/Carousel-CustomSettings.mp4"),
				descriptionHTML: `
<p>The Custom Settings plugin makes implementation of engine and custom settings simple and efficient.</p>
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
				bIsIncludedWithEngine: false,
				dependencies: [
					this.pluginIdUtility,
					this.pluginIdUIAdditions,
				]
			};
		case(this.pluginIdEventManager):
			return {
				title: "Event Manager",
				docsNavId: "docsEventManager",
				shopNavId: "shopEventManager",
				carouselVideo: appBuilder.buildMediaUrl("carousel/Carousel-EventManager.mp4"),
				descriptionHTML: `
<p>
The Event Manager Plugin manages global info in your virtual world, as a collection of text strings. Systems can read / write this info in this one place, decoupling them from others and providing easy access to information. 
</p>
<p>
This technique is efficient to implement mission systems, dialog systems, gameplay, simulations and more, as they are systems which often require complex information from another, which is now easy to manage.
</p>
<ul>
    <li>Read / Write global information in one place.</li>
    <li>Automatically run functions for a combination of information.</li>
    <li>Efficient for sharing info to mission systems, dialogs, simulations and more.</li>
    <li>Systems sharing information can be decoupled.</li>
</ul>
`,
				bIsIncludedWithEngine: false,
				dependencies: [
					
				]
			};
		case(this.pluginIdStatusEffects):
			return {
				title: "Status Effects",
				docsNavId: "docsStatusEffects",
				shopNavId: "shopStatusEffects",
				carouselVideo: appBuilder.buildMediaUrl("carousel/Carousel-StatusEffects.mp4"),
				descriptionHTML: `
<p>
The Status Effect Plugin is used to track and modify "Status Effect" values over time. In games examples of such values are: health points, player score, a hunger meter, a happiness meter. Create any effect. 
Modifiers can alter a Status Effect over time. For example, to remove stamina while running, or add health over time.
</p>
<ul>
    <li>Track and modify values over time.</li>
    <li>Compact and universal. Ideal for games and simulations.</li>
    <li>Simple to set up in code and datatable.</li>
    <li>Widgets can connect to Status Effects (add a health bar to your game).</li>
    <li>Multiple modifiers can alter a Status Effect over time.</li>
</ul>
`,
				bIsIncludedWithEngine: false,
				dependencies: [
					
				]
			};
		case(this.pluginIdTime):
			return {
				title: "Time",
				docsNavId: "docsTime",
				shopNavId: "shopTime",
				carouselVideo: appBuilder.buildMediaUrl("carousel/Carousel-Time.mp4"),
				descriptionHTML: `
<p>The Time Plugin simulates time in your virtual world. Time itself is managed through one subsystem. Digital and analog clocks can be placed on the UI and as 3D objects in a level.</p>
<ul>
    <li>Simulate a date / time and speed of time for your virtual environment.</li>
    <li>Manage the time in one place, through the Time subsystem.</li>
    <li>Have automatically synchronizing clocks, simple to design in both 2D and 3D.</li>
    <li>Clocks can also be controlled manually, and given a time offset individually.</li>
</ul>
`,
				bIsIncludedWithEngine: false,
				dependencies: [
					
				]
			};
		case(this.pluginIdUIAdditions):
			return {
				title: "UI Additions",
				docsNavId: "docsUIAdditions",
				shopNavId: "shopUIAdditions",
				carouselVideo: appBuilder.buildMediaUrl("carousel/Carousel-UIAdditions.mp4"),
				descriptionHTML: `
<p>This plugin adds new widget types and input functionality. It is used to efficiently build common and advanced UI, with a consistent user input and feedback behavior.</p>
<p>It adds essential new features such as widget lazy loading, a highly customizable cursor type, input device recognition and response, and among more widgets, a menu system that routes navigation between menus. Menus offer improved control over widget focusing.</p>
<ul>
    <li>Instantly get access to professional UI features.</li>
    <li>Designers can work directly on advanced UI with no programming knowledge required.</li>
    <li>Get access to new utilities, such as automated localization of widgets created by code.</li>
    <li>Get fully customizable new widget classes.</li>
</ul>
`,
				bIsIncludedWithEngine: false,
				dependencies: [
					this.pluginIdUtility,
					this.pluginIdCentralUI
				]
			};
		case(this.pluginIdUtility):
			return {
				title: "Utility",
				docsNavId: "docsUtility",
				shopNavId: "shopUtility",
				carouselVideo: appBuilder.buildMediaUrl("carousel/Carousel-Utility.mp4"),
				descriptionHTML: `
<p>The Utility plugin shares its utilities between Ferrefy plugins. It can be used as a thin layer of additions to very commonly used engine code (math / input / widgets / logging / data) and to improve blueprint access to engine methods.</p>
<p>It contains only methods that are actively used in Ferrefy plugins.</p>
<p>The Utility Plugin is intended to be as small as possible, to efficiently provide this pack of methods with a single plugin.</p>
<ul>
    <li>Packs common methods used by Ferrefy plugins into a single plugin.</li>
    <li>Adds a thin layer of additions to common engine code (math / input / widgets / logging / data) which also improves blueprint access to engine methods.</li>
</ul>
`,
				bIsIncludedWithEngine: false,
				dependencies: [
					
				]
			};
		case(this.pluginIdTemplateSequence):
		return {
			title: "Template Sequence",
			docsNavId: "",
			shopNavId: "",
			carouselVideo: "",
			descriptionHTML: ``,
			bIsIncludedWithEngine: true,
			dependencies: [
				
			]
		};
		case(this.pluginIdAnimationSharing):
		return {
			title: "Animation Sharing",
			docsNavId: "",
			shopNavId: "",
			carouselVideo: "",
			descriptionHTML: ``,
			bIsIncludedWithEngine: true,
			dependencies: [
				
			]
		};
		case(this.pluginIdImgMedia):
		return {
			title: "Img Media",
			docsNavId: "",
			shopNavId: "",
			carouselVideo: "",
			descriptionHTML: ``,
			bIsIncludedWithEngine: true,
			dependencies: [
				
			]
		};
		case(this.pluginIdNiagara):
		return {
			title: "Niagara",
			docsNavId: "",
			shopNavId: "",
			carouselVideo: "",
			descriptionHTML: ``,
			bIsIncludedWithEngine: true,
			dependencies: [
				
			]
		};
		case(this.pluginIdVariantManagerContent):
		return {
			title: "Variant Manager Content",
			docsNavId: "",
			shopNavId: "",
			carouselVideo: "",
			descriptionHTML: ``,
			bIsIncludedWithEngine: true,
			dependencies: [
				
			]
		};
		case(this.pluginIdPaper2D):
		return {
			title: "Paper2D",
			docsNavId: "",
			shopNavId: "",
			carouselVideo: "",
			descriptionHTML: ``,
			bIsIncludedWithEngine: true,
			dependencies: [
				
			]
		};
		case(this.pluginIdAudioSynesthesia):
		return {
			title: "Audio Synesthesia",
			docsNavId: "",
			shopNavId: "",
			carouselVideo: "",
			descriptionHTML: ``,
			bIsIncludedWithEngine: true,
			dependencies: [
				
			]
		};
		case(this.pluginIdMotoSynth):
		return {
			title: "Moto Synth",
			docsNavId: "",
			shopNavId: "",
			carouselVideo: "",
			descriptionHTML: ``,
			bIsIncludedWithEngine: true,
			dependencies: [
				
			]
		};
		default:
			console.error("No plugin info found for this ID: " + inPluginId);
			return null;
		}
	}

	getContentClassFromSearch(inSearch) {
		// Don't use before classes are loaded!

		// console.log("getContentClassFromSearch: " + inSearch);

		switch(inSearch) {
			case(null):
			case("home"):
				return IndexContent;
			case("documentation/overview"):
				return DocumentationOptionsOverview;
			case("documentation/asset-naming-plugin"):
				return DocumentationOptionAssetNaming	;		
			case("documentation/central-ui-plugin"):
				return DocumentationOptionCentralUI;
			case("documentation/custom-settings-plugin"):
				return DocumentationOptionCustomSettings;
			case("documentation/general-information"):
				return DocumentationOptionGeneral;
			case("documentation/event-manager-plugin"):
				return DocumentationOptionEventManager;
			case("documentation/introduction-and-usage"):
				return DocumentationOptionIntroductionAndUsage;
			case("documentation/status-effects-plugin"):
				return DocumentationOptionStatusEffects;
			case("documentation/time-plugin"):
				return DocumentationOptionTime;
			case("documentation/ui-additions-plugin"):
				return DocumentationOptionUIAdditions;
			case("documentation/utility-plugin"):
				return DocumentationOptionUtility;
		}

		console.error("Returning 'home', because no content class was found from search.");
		return IndexContent;
	}

	injectContent() {
		const searchPage = document.location.search.split("?p=");
		let contentClassToInject = this.getContentClassFromSearch(searchPage.length <= 1 ? null : searchPage[1]);
		
		// console.log(contentClassToInject.name);

		if (contentClassToInject == null) {
			console.warn("Failed to inject content for URL search argument.");
			return;
		}

		// console.warn("Injecting content.");
		contentClassToInject.create();
		// Update document info
		document.title = contentClassToInject.getDocumentTitle();
		
		// Inject favicon
		{
			let newElem = document.createElement("div");
			newElem.innerHTML = `<link rel="icon" type="image/x-icon" href="${this.buildMediaUrl("favicon.ico")}" />`;
			newElem = newElem.firstElementChild;
			document.head.append(newElem);
		}
		
		// The documentation topics are not all added to the nav menus, and I want to just light up the Documentation path for all of them.
		// Must make some smart system for this when the site grows.
        navigationBuilder.setActiveNavItem(contentClassToInject.getNavItemTitle(), true);
	}
}

let appBuilder = new AppBuilder();