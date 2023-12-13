(() => {
	const mobileMenu = document.querySelector('.js-mobile-menu');
	const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

	const toggleMenu = () => {
		const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');
	};

	openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    
    const closeMenuToClick = (elem) =>
        elem.forEach(link => {
		link.addEventListener('click', toggleMenu);
    });

    const mobileNavLinks = document.querySelectorAll('.mobile-navigation');
    closeMenuToClick(mobileNavLinks);

    const mobileSocialLinks = document.querySelectorAll('.mobile-social-box');
    closeMenuToClick(mobileSocialLinks);
    
	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
		if (!e.matches) return;
		mobileMenu.classList.remove('is-open');
		openMenuBtn.setAttribute('aria-expanded', false);
		bodyScrollLock.enableBodyScroll(document.body);
	});
})();
