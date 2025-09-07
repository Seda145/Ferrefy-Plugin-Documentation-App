class FooterBuilder {
    constructor() {
        // console.warn("component builder script loaded");
    }

    static create(inScopeElement) {
        BuilderUtils.replaceElement(inScopeElement.querySelector('[data-component="footer"]'), this.getHTMLTemplate());
    }

    static getHTMLTemplate() {
        const html = (inString) => { return inString };
        //return (html`
        return (`
 
		<footer>
			<div id="footer-top">
				<div id="footer-top-wrap" class="max-width-wrap">
					<div class="row">
						<div class="col-3 col-4-l col-6-m col-12-s">
							<div class="footer-top-content-wrap">
								<nav>
									<h6>Links</h6>

									<div id="footer-nav-menu-inner" class="footer-top-content-inner">

									</div>
								</nav>
							</div>
						</div>
						<div class="col-3 col-4-l col-6-m col-12-s">
<!--
							<div class="footer-top-content-wrap">
								<h6>Contact</h6>

								<div class="footer-top-content-inner">
									<div class="contact-item">
										<p class="contact-left">Mail:</p>
										<a class="contact-right" href="mailto:${appBuilder.companyEmail}">${appBuilder.companyEmail}</a>
									</div>
								</div>
							</div>
-->
						</div>
					</div>
				</div>
			</div>

			<div id="footer-bottom">
				<div id="footer-bottom-wrap" class="max-width-wrap">
					<p id="footer-copyright">© 2025 Roy Wierer (Ferrefy)</p>
				</div>
			</div>
		</footer>

        `);
    }
}

FooterBuilder.create(document);