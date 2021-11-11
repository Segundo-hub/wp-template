import "./libs/dom-polyfill";
import { Parallaxify } from "./libs/parallax";
import { closeContact, closeMenu, openContact, openMenu } from "./libs/dom";
import { useMediaQuery } from "./libs/utils";

/**
 * @function parallax
 */

new Parallaxify().init({
    speed: 6.0
})

/**
 * @function useMediaQuery
 */

useMediaQuery({
    media: "min-width: 62em",
    min: () => {
        console.log('movil')
    },
    max: () => {
        console.log('desktop')
    }
})

console.log("Holita")
/**
 * @function domOnClick
 */

document.addEventListener('click', event => {
    let action = event.target.closest('[data-action]') ?
        event.target.closest('[data-action]').dataset.action :
        false
    const methods = {
        "open-menu": openMenu,
        "close-menu": closeMenu,
        "open-contact": openContact,
        "close-contact": closeContact
    }

    if (action) {
        methods[action](event)
    }

})

const saludo = "   hola".trimStart()