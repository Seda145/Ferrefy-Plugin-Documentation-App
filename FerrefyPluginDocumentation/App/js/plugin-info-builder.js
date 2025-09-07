class PluginInfoBuilder {
    constructor() {
        // console.warn("component builder script loaded");
    }

    create(inPluginInfoId) {
        if (inPluginInfoId == null) {
            console.error("Don't use the plugin info builder on something that is not a plugin");
            return null;
        }

        this.element = null;
        
        let pluginInfo = appBuilder.getPluginInfo(inPluginInfoId);
        this.element = BuilderUtils.createElement(this.getHTMLTemplate(pluginInfo));

        this.eDependenciesContainer = this.element.querySelector(".dependencies-container");
        const dependenciesBuilder = new DependenciesBuilder();
        this.eDependenciesContainer.insertAdjacentElement('beforeend', dependenciesBuilder.create(inPluginInfoId));

        return this.element.outerHTML;
    }

    getHTMLTemplate(inPluginInfo) {
        return (`

<div class="plugin-info">
    <p>You can get this plugin here:</p>
    <ul>
        <li class="plugin-requirement-info-parts">
            <div class="plugin-requirement-info-part">
                <p>${inPluginInfo.title}</p>
            </div>
            <div class="plugin-requirement-info-part">
                ${(
					appBuilder.getNavInfo(inPluginInfo.shopNavId).url == "#missingurl" 
					? `<p>Coming soon!</p>` 
					: `<a href="${appBuilder.getNavInfo(inPluginInfo.shopNavId).url}">${appBuilder.getNavInfo(inPluginInfo.shopNavId).navTitle}</a>`
				)}
            </div>
        </li>
    </ul>
    <div class="dependencies-container">

    </div>
</div>

        `);
    }
}