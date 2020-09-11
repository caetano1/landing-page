/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName("section");
const navMenu = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavMenu() {
    const fragment = document.createDocumentFragment();
    
    for (let section of sections) {
        console.log(section);
        const navItem = document.createElement("li");
        navItem.className = "menu__link";
        navItem.innerText = section.getAttribute("data-nav");
        fragment.appendChild(navItem);
    }

    /* for (let i = 1; i <= sections.length; i++) {
        console.log(sections[i-1]);
        const navItem = document.createElement("li");
        navItem.className = "menu__link";
        navItem.innerText = `Section ${i}`;
        fragment.appendChild(navItem);
    } */

    navMenu.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


