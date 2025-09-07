class PluginCarouselBuilder {
	constructor() {
    // console.warn("component builder script loaded");
	}

	create(inObject) {
		let eComponent = inObject.scope.querySelector("[data-component='plugin-carousel']");
		this.element = BuilderUtils.replaceElement(eComponent, this.getHTMLTemplate());
		this.eItemContainer = this.element.querySelector(".carousel-item-container");

		for (let dataX of inObject.carouselDatas) {
			let eCarouselItem = BuilderUtils.createElement(this.getCarouselItemHTMLTemplate(dataX));
            this.eItemContainer.insertAdjacentElement('beforeend', eCarouselItem);
		}
	}

	getHTMLTemplate() {
		const html = (inString) => {
			return inString;
		};
		//return (html`
		return `
<div class="plugin-carousel">
	<div class="max-width-wrap scroll-reachable">
		<div class="plugin-carousel-inner">
			<div class="carousel-item-container">

			</div>
		</div>
	</div>
</div>
		`;
	}

	getCarouselItemHTMLTemplate(inCarouselData) {
		const html = (inString) => {
			return inString;
		};
		//return (html`
		return `
<div class="carousel-item">
	<div class="carousel-item-title">
		<h4>Plugin: ${inCarouselData.title}</h4>
	</div>
	
	<div class="carousel-item-parts">
		<div class="carousel-item-part-left">
			<div class="carousel-item-description">
				${inCarouselData.descriptionHTML}
			</div>


			<div class="carousel-item-image-wrap">
				<div class="header-see-in-action"><h5>Watch a demo:</h5></div>
				<video class="carousel-item-image" autoplay loop muted>
					<source src="${inCarouselData.carouselVideo}" type="video/mp4">
				</video>
			</div>

			<div class="carousel-item-links">
				${(
					inCarouselData.shopUrl == "#missingurl" 
					? `<p class="carousel-item-link carousel-item-link-shop carousel-item-link-coming-soon">Coming soon!</p>` 
					: `<a class="carousel-item-link carousel-item-link-shop" href="${inCarouselData.shopUrl}">${inCarouselData.shopNavTitle}</a>`
				)}
				
				<a class="carousel-item-link carousel-item-link-docs" href="${inCarouselData.docsUrl}">Read more</a>

				<div class="carousel-arrows">
					<div class="carousel-arrow carousel-arrow-left" tabindex="0">
						<div class="carousel-arrow-inner">
							<div class="arrow-icon"></div>
							<p>Previous</p>
						</div>
					</div>

					<div class="carousel-arrow carousel-arrow-right" tabindex="0">
						<div class="carousel-arrow-inner">
							<p>Next</p>
							<div class="arrow-icon"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="carousel-item-part-right">
			<div class="carousel-item-image-wrap">
				<div class="header-see-in-action"><h5>Watch a demo:</h5></div>
				<video class="carousel-item-image" autoplay loop muted>
					<source src="${inCarouselData.carouselVideo}" type="video/mp4">
				</video>
			</div>
		</div>
	</div>
</div>
		`;
	}

	
}