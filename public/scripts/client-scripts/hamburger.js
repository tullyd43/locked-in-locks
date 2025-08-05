document.addEventListener("DOMContentLoaded", () => {
	const hamburgerButton = document.getElementById("hamburger-menu");
	const navMenu = document.getElementById("main-nav");

	if (hamburgerButton && navMenu) {
		hamburgerButton.addEventListener("click", () => {
			// Toggle the 'is-open' class on both the button and the menu
			hamburgerButton.classList.toggle("is-open");
			navMenu.classList.toggle("is-open");

			// Update ARIA attribute for accessibility
			const isExpanded = hamburgerButton.classList.contains("is-open");
			hamburgerButton.setAttribute("aria-expanded", isExpanded);
			document.body.classList.toggle("no-scroll", isExpanded);
		});
	}
});