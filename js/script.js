document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.header__button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu__overlay');
    const closeButton = document.querySelector('.mobile-menu__close-button');
    
    //открытия меню
    function openMenu() {
        mobileMenu.classList.add('mobile-menu--open');
        mobileMenu.classList.remove('mobile-menu--closed');
        mobileMenuOverlay.classList.add('mobile-menu__overlay--open');
        document.body.style.overflow = 'hidden';
    }
    
    //закрытия меню
    function closeMenu() {
        mobileMenu.classList.remove('mobile-menu--open');
        mobileMenu.classList.add('mobile-menu--closed');
        mobileMenuOverlay.classList.remove('mobile-menu__overlay--open');
        document.body.style.overflow = '';
    }
    
    // Обработчики событий
    burgerButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    mobileMenuOverlay.addEventListener('click', closeMenu);
    
    // меню закрыто при загрузке
    mobileMenu.classList.add('mobile-menu--closed');
});