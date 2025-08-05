// A more robust dropdown toggle for Services, optimized for SEO/accessibility

document.addEventListener("DOMContentLoaded", function () {
	// Using an ID is more robust than a generic attribute selector.
	// Ensure your HTML link has id="services-link"
	const servicesLink = document.getElementById("services-link");
	if (!servicesLink) return;

	// Link the trigger to the dropdown panel using aria-controls for robustness.
	// HTML: <a id="services-link" aria-controls="services-dropdown">...</a>
	//       <ul id="services-dropdown" class="dropdown">...</ul>
	const dropdownId = servicesLink.getAttribute("aria-controls");
	const dropdown = dropdownId ? document.getElementById(dropdownId) : null;

	if (dropdown) {
		servicesLink.addEventListener("click", function (e) {
			e.preventDefault();
			const isOpen = servicesLink.getAttribute("aria-expanded") === "true";
			servicesLink.setAttribute("aria-expanded", !isOpen);
			// Toggle a single state class. CSS should handle the visibility.
			// .dropdown { opacity: 0; visibility: hidden; }
			// .dropdown.is-open { opacity: 1; visibility: visible; }
			dropdown.classList.toggle("is-open");
		});

		// Close dropdown when clicking outside
		document.addEventListener("click", function (e) {
			if (dropdown.classList.contains("is-open") && !servicesLink.contains(e.target) && !dropdown.contains(e.target)) {
				dropdown.classList.remove("is-open");
				servicesLink.setAttribute("aria-expanded", "false");
			}
		});
	}
});
