// Hamburger menu toggle for mobile navigation

document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.getElementById("hamburger-menu");
	const navList = document.getElementById("nav-list");
	if (hamburger && navList) {
		hamburger.addEventListener("click", function () {
			const isOpen = navList.classList.toggle("open");
			hamburger.setAttribute("aria-expanded", isOpen);
		});
	}
});

