class DependenciesBuilder {
    constructor() {
        // console.warn("component builder script loaded");
    }

    create(inPluginInfoId) {
        if (inPluginInfoId == null) {
            console.error("Don't use the dependencies builder on something that is not a plugin");
            return null;
        }

        this.element = BuilderUtils.createElement(this.getHTMLTemplateThisElement());

        let recDependenciesContainer = [];
        let recEngineDependenciesContainer = [];
        // console.log("Starting recursive search for dependencies for: " + inPluginInfoId);
        this.collectRecursiveDependencies(inPluginInfoId, recDependenciesContainer, recEngineDependenciesContainer, inPluginInfoId);

        if (recDependenciesContainer.length > 0 || recEngineDependenciesContainer.length > 0) {
            let eDepencyGroup = null;
            if (recDependenciesContainer.length + recEngineDependenciesContainer.length == 1) {
                eDepencyGroup = BuilderUtils.createElement(this.getHTMLTemplateSingle());
            }
            else {
                eDepencyGroup = BuilderUtils.createElement(this.getHTMLTemplate());
            }
            this.element.insertAdjacentElement('beforeend', eDepencyGroup);

            let eDepContainer = eDepencyGroup.querySelector(".dependency-list");

            // Add dependency infos into the container
            for (let dependX of recDependenciesContainer) {
                let pluginInfoX = appBuilder.getPluginInfo(dependX);
                if (!pluginInfoX) {
                    console.error("Could not find depend: " + dependX);
                    continue;
                }
                eDepContainer.insertAdjacentHTML('beforeend', this.getInfoHTMLTemplate(pluginInfoX));
            }
            
            // Add engine dependency infos into the container
            for (let dependX of recEngineDependenciesContainer) {
                let pluginInfoX = appBuilder.getPluginInfo(dependX);
                if (!pluginInfoX) {
                    console.error("Could not find engine depend: " + dependX);
                    continue;
                }
                eDepContainer.insertAdjacentHTML('beforeend', this.getEngineInfoHTMLTemplate(pluginInfoX));
            }
        }
        else {
            this.element = BuilderUtils.createElement(this.getNoDependsHTMLTemplate());
        }
            
        return this.element;
    }

    collectRecursiveDependencies(inSelfPluginInfoId, inDependencyContainer, inEngineDependenciesContainer, inLookFor) {
        // The dependencies of the direct dependencies are collected.
        const pluginInfo = appBuilder.getPluginInfo(inLookFor);
        // console.log("looking for dependency info: " + inLookFor + " and found:");
        // console.log(pluginInfo.dependencies);

        for (let dependencyIdX of pluginInfo.dependencies) {
            if (dependencyIdX == inSelfPluginInfoId) {
                // We don't add the base dependent, only its nested dependencies.
                console.error("Found self as nested dependency: " + dependencyIdX);
                continue;
            }

            const nestedPluginInfo = appBuilder.getPluginInfo(dependencyIdX);

            if (nestedPluginInfo.bIsIncludedWithEngine) {
                if (!inEngineDependenciesContainer.includes(dependencyIdX)) {
                    inEngineDependenciesContainer.push(dependencyIdX)
                    // console.log("found nested engine dependency: " + dependencyIdX);
                    this.collectRecursiveDependencies(inSelfPluginInfoId, inDependencyContainer, inEngineDependenciesContainer, dependencyIdX);
                }
                else {
                    // console.log("Dependency already contained: " + dependencyIdX);
                }
            }
            else {
                if (!inDependencyContainer.includes(dependencyIdX)) {
                    inDependencyContainer.push(dependencyIdX)
                    // console.log("found nested dependency: " + dependencyIdX);
                    this.collectRecursiveDependencies(inSelfPluginInfoId, inDependencyContainer, inEngineDependenciesContainer, dependencyIdX);
                }
                else {
                    // console.log("Dependency already contained: " + dependencyIdX);
                }
            }
        }
    }

    getInfoHTMLTemplate(inInfo) {
        return (`
<li class="plugin-requirement-info-parts">
    <div class="plugin-requirement-info-part">
        <p>${inInfo.title}</p>
    </div>
    <div class="plugin-requirement-info-part">
        <a href="${appBuilder.getNavInfo(inInfo.docsNavId).url}">Docs</a>
        
        <p class="plugin-requirement-links-separator">|</p>

        ${(
            appBuilder.getNavInfo(inInfo.shopNavId).url == "#missingurl" 
            ? `<p>Coming soon!</p>` 
            : `<a href="${appBuilder.getNavInfo(inInfo.shopNavId).url}">${appBuilder.getNavInfo(inInfo.shopNavId).navTitle}</a>`
        )}
    </div>
</li>
        `);
    }

    getEngineInfoHTMLTemplate(inInfo) {
        return (`
<li class="plugin-requirement-info-parts">
    <div class="plugin-requirement-info-part">
        <p>${inInfo.title}</p>
    </div>
    <div class="plugin-requirement-info-part">
        <p class="plugin-requirement-info-part-of-ue">(Part of Unreal Engine)</p>
    </div>
</li>
        `);
    }

    getHTMLTemplateThisElement() {
        return (`
<div class="dependencies">

</div>
        `);
    }
        
    getNoDependsHTMLTemplate() {
        return (`
<div class="dependencies-group">
    <p>This plugin does not depend on other plugins.</p>
</div>
        `);
    }

    getHTMLTemplate() {
        return (`
<div class="dependencies-group">
    <p>You must have the following plugins. This plugin depends on them:</p>
    <ul class="dependency-list">

    </ul>
</div>
        `);
    }

    getHTMLTemplateSingle() {
        return (`
<div class="dependencies-group">
    <p>You must have the following plugin. This plugin depends on it:</p>
    <ul class="dependency-list">

    </ul>
</div>
        `);
    }
}