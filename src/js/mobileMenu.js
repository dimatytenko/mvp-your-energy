(() => {
	const mobileMenu = document.querySelector('.js-mobile-menu');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');
	const mobileSocialLinks = document.querySelectorAll('.mobile-social-box');
	const body = document.querySelector('body');

	const toggleMenu = () => {
		const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');
		body.classList.toggle('disable-scroll');
	};

    const closeMenuToClick = (elem) =>
        elem.forEach(link => {
		link.addEventListener('click', toggleMenu);
    });

	openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    closeMenuToClick(mobileSocialLinks);
})();
