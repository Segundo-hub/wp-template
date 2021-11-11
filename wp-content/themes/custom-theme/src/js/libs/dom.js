const menu = document.querySelector('#menu-modal');
const form = document.querySelector('#contact-modal');
const root = document.querySelector('html');

export const openMenu = (event) => {
    menu.toggleClass('active')
    setTimeout(() => {
        root.toggleClass('hidden-scroll')
    }, 300)
    event.target.closest('[data-action]').toggleClass('active')
}

export const closeMenu = () => {
    menu.removeClass('active')
    root.removeClass('hidden-scroll')
}

export const openContact = () => {
    form.addClass('active')
    root.addClass('hidden-scroll')
}

export const closeContact = (event) => {
    form.removeClass('active');
    menu.addClass('hard-close')
    menu.removeClass('active')
    document.querySelector('[data-action="open-menu"]').removeClass('active')
    setTimeout(() => {
        menu.removeClass('hard-close')
        if (!menu.hasClass('active')) {
            root.removeClass('hidden-scroll')
        }
    }, 150);
}