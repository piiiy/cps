document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.header__button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu__overlay');
    const closeButton = document.querySelector('.mobile-menu__close-button');
    
    //открытие меню
    function openMenu() {
        mobileMenu.classList.add('mobile-menu--open');
        mobileMenu.classList.remove('mobile-menu--closed');
        mobileMenuOverlay.classList.add('mobile-menu__overlay--open');
        document.body.style.overflow = 'hidden';
    }
    
    //закрытие меню
    function closeMenu() {
        mobileMenu.classList.remove('mobile-menu--open');
        mobileMenu.classList.add('mobile-menu--closed');
        mobileMenuOverlay.classList.remove('mobile-menu__overlay--open');
        document.body.style.overflow = '';
    }
    
    burgerButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    mobileMenuOverlay.addEventListener('click', closeMenu);
    
    // меню закрыто при загрузке
    mobileMenu.classList.add('mobile-menu--closed');

    // Логика для подсветки полоски при наведении
    const menuItems = document.querySelectorAll('.mobile-menu__item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.classList.add('mobile-menu__item--hovered');
        });
        item.addEventListener('mouseleave', function() {
            item.classList.remove('mobile-menu__item--hovered');
        });
    });
});