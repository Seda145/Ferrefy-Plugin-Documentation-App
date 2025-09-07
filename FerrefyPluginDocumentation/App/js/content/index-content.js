class IndexContent {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static getDocumentTitle() {
        return "Ferrefy Software Development";
    }

    static getNavTitle() {
        return "Home";
    }

    static getNavItemTitle() {
        return IndexContent.getNavTitle();
    }
    
    static getNavId() {
        return "home";
    }

    static create() {
        this.element = BuilderUtils.replaceElement(document.querySelector("main"), this.getHTMLTemplate());
        document.body.classList.add("page-home");

        // Build carousel item information for the plugins we want to show.
        let carouselDatas = [];
        const injectCarouselData = function(inPluginID) {
            const pluginInfo = appBuilder.getPluginInfo(inPluginID);
            let carouselDataY = {};
            carouselDataY.title = pluginInfo.title;
            carouselDataY.carouselVideo = pluginInfo.carouselVideo;
            carouselDataY.descriptionHTML = pluginInfo.descriptionHTML;
            carouselDataY.shopUrl = appBuilder.getNavInfo(pluginInfo.shopNavId).url;
            carouselDataY.shopNavTitle = appBuilder.getNavInfo(pluginInfo.shopNavId).navTitle;
            carouselDataY.docsUrl = appBuilder.getNavInfo(pluginInfo.docsNavId).url;
            carouselDatas.push(carouselDataY);
        }
        injectCarouselData(appBuilder.pluginIdCustomSettings);
        injectCarouselData(appBuilder.pluginIdUIAdditions);
        injectCarouselData(appBuilder.pluginIdAssetNaming);
        injectCarouselData(appBuilder.pluginIdCentralUI);
        injectCarouselData(appBuilder.pluginIdStatusEffects);
        injectCarouselData(appBuilder.pluginIdEventManager);
        injectCarouselData(appBuilder.pluginIdTime);
        injectCarouselData(appBuilder.pluginIdUtility);

        // Build the carousel and its items.
        const pluginCarouselBuilder = new PluginCarouselBuilder();
        pluginCarouselBuilder.create({
            scope: this.element,
            carouselDatas: carouselDatas
        });
    }

    static getHTMLTemplate() {
        const html = (inString) => { return inString };
        // return (html`
        return (`
 			
        <main class="main-bottom-fill">

<!-- Banner -->

            <div class="content-intro">
                <h2 class="max-width-wrap">Turn ideas into apps with Ferrefy plugins</h2>
            </div>

            <div class="banner-intro">
                <div class="max-width-wrap">
                    <div class="banner-wrap">
                        <div class="banner-img-wrap">
                            <video class="banner-img-wide" autoplay loop muted >
                                <source src="${appBuilder.buildMediaUrl("banner/Vid_BannerIntro.mp4")}" type="video/mp4">
                            </video>
                        </div>

                        <div class="banner-overlay-left"></div>
                        <div class="banner-overlay-right"></div>
                        <div class="banner-overlay-top"></div>
                        <div class="banner-overlay-bottom"></div>
                    </div>          
                </div>

                <a data-component="content-separator" id="to-build-something-new"></a>

            </div>

<!-- Build something new -->

            <div class="content-intro">
                <h2 class="max-width-wrap">To build something new</h2>
            </div>

            <div class="content-detail scroll-reachable max-width-wrap">
                <div class="row">
                    <div class="col-6 col-12-l">
                        <p class="content-detail-leftborder">
Get instant access to powerful tools and features, source files included. Every plugin is a solution for a specific task.
                        </p>

                        <p class="content-detail-leftborder">
A modular design makes plugins <strong>easy to modify, maintain, and combine.</strong>.
                        </p>

                        <p class="content-detail-leftborder">
All plugins can cooperate as a larger system. Pick just the plugins you require for your project. This keeps your project clean and shortens development time.
                        </p>  

                        <p class="content-detail-leftborder">
With the plugins, there is no need to create the same thing twice. Reuse them and build something new.
                        </p>  
                    </div>

                    <div class="col-6 col-12-l">
                        <div class="project-plugin-visual-wrap scroll-reachable">
                            <div class="project-plugin-visual">
                                <div class="part-1">
                                    <h5>1. Choose Plugins:</h5>
                                    <div class="part-node part-node-1">
                                        <span>UI Components</span>
                                    </div>
                                    <div class="part-node part-node-2">
                                        <span>Project Features</span>
                                    </div>
                                    <div class="part-node part-node-3">
                                        <span>Developer Utilities</span>
                                    </div>
                                    <div class="part-node part-node-4">
                                        <span>Editor Tools</span>
                                    </div>
                                    <div class="part-node part-node-4">
                                        <span>Automation</span>
                                    </div>
                                    <div class="part-node part-node-5">
                                        <span>More!</span>
                                    </div>
                                </div>

                                <div class="part-2"></div>

                                <div class="part-1 part-3">
                                    <h5>2. Develop your project</h5>
                                    <div class="part-node part-node-6">
                                        <span>Customize</span>
                                    </div>
                                    <div class="part-node part-node-7">
                                        <span>Add content</span>
                                    </div>
                                    <div class="part-node part-node-8">
                                        <span>Done!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<!-- Find solutions -->

<a data-component="content-separator" id="find-solutions"></a>

<div class="content-intro">
    <h2 class="max-width-wrap">Find solutions</h2>
</div>

<!-- Carousel -->
            <div class="carousel-wrap">
                <div data-component="plugin-carousel"></div>

                <a data-component="content-separator" id="about-ferrefy"></a>
            </div>

<!-- About Ferrefy -->

            <div class="content-intro">
                <h2 class="max-width-wrap">Who is Ferrefy?</h2>
            </div>

            <div class="content-detail scroll-reachable max-width-wrap">
                <div class="row">
                    <div class="col-6 col-12-l">
                        <p class="content-detail-leftborder">
Hi! I am Roy Wierer, the creator of Ferrefy.<br>
I am well known as 'Seda145', the creator of project <a href="https://www.moddb.com/mods/zoneexpanded-road-to-the-north">Road To The North</a>, a supporter of gamers, game developers and fans.
                        </p>
                        <p class="content-detail-leftborder">
As Ferrefy I have published plugins for Unreal Engine, which are used to make development of games and media much more efficient.
                        </p>
                        <p class="content-detail-leftborder">
These expertly made plugins bring you closer to finishing your dream projects. This brings all of us closer to our goals.
                        </p>
                    </div>
                </div>
            </div>

<!-- End -->

		    <a data-component="content-separator" id="anchor-endmain" class="content-separator-wrap-endmain" data-custom-anchor="start"></a>
        </main>

        `);
    }
}
