// Dropdown toggle for Services using visibility and opacity for SEO/accessibility

document.addEventListener("DOMContentLoaded", function () {
	const servicesLink = document.querySelector('a[href="services.html"]');
	const dropdown = servicesLink && servicesLink.nextElementSibling;
	if (servicesLink && dropdown) {
		// Hide dropdown by default using CSS classes
		dropdown.classList.add("dropdown-hidden");
		servicesLink.addEventListener("click", function (e) {
			e.preventDefault();
			const isOpen = dropdown.classList.contains("dropdown-visible");
			dropdown.classList.toggle("dropdown-visible", !isOpen);
			dropdown.classList.toggle("dropdown-hidden", isOpen);
			servicesLink.setAttribute("aria-expanded", !isOpen);
		});
		// Optional: close dropdown when clicking outside
		document.addEventListener("click", function (e) {
			if (
				!servicesLink.contains(e.target) &&
				!dropdown.contains(e.target)
			) {
				dropdown.classList.remove("dropdown-visible");
				dropdown.classList.add("dropdown-hidden");
				servicesLink.setAttribute("aria-expanded", "false");
			}
		});
	}
});
