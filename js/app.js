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

// Identify if the element is in the viewport or not
function isInViewport (element) {

    const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    const percLimit = 0.5;

    let boundaries = element.getBoundingClientRect();

    // If the element starting point is above the viewport, or else
    if (boundaries.top < 0) {
        return (boundaries.bottom / viewportHeight > percLimit);
    } else {
        return ((viewportHeight - boundaries.top)/viewportHeight > percLimit);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavMenu = function () {
    const fragment = document.createDocumentFragment();

    // runs a loop through each section and add the corresponding link to the header
    for (let i = 1; i <= sections.length; i++) {
        console.log(sections[i-1]);
        const navItem = document.createElement("li");
        const navLink = document.createElement("a");

        navItem.className = "menu__item";
        navLink.className = "menu__link";
        navLink.setAttribute("href", `#section${i}`)
        navLink.innerText = `Section ${i}`;
        navItem.appendChild(navLink);

        fragment.appendChild(navItem);
    }

    navMenu.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
window.addEventListener ("scroll", function () {
    // Loops through each section and checks if it is in the viewport
    for (const section of sections) {
        if (isInViewport(section)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
})

// Scroll to anchor ID using scrollTO event
    
// Fetches each menu item and apply an eventlistener to it
const navItems = document.getElementsByClassName("menu__link");

function smoothBehavior (items, anchor) {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener ("click", function(e) {
            e.preventDefault();
            window.scrollTo ({
                top: anchor[i].offsetTop,
                behavior: "smooth"
            });
        });
    }
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavMenu();

// Scroll to section on link click
smoothBehavior(navItems, sections);


