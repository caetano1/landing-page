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
    /* // defines the top and bottom borders
    const topBorder = element.offsetTop;
    const bottomBorder = topBorder + element.offsetHeight;

    // defines the Y coordinate of the viewport and its height
    const topViewport = window.pageYOffset
    const bottomViewport = topViewport + window.innerHeight */

    const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    const percLimit = 0.5;

    let boundaries = element.getBoundingClientRect();

    /* 
    To do: Check later how to solve for elements that
    occupy less than 50% of the viewport
    */

    // If the element starting point is above the viewport
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
/* function buildNavMenu() { */
const buildNavMenu = function () {
    const fragment = document.createDocumentFragment();
    
    /* for (let section of sections) {
        console.log(section);
        const navItem = document.createElement("li");
        navItem.className = "menu__link";
        navItem.innerText = section.getAttribute("data-nav");
        navItem.addEventListener("click", function(e) {
            console.log(e);
            section.scrollIntoView({behavior: "smooth"});
        })

        fragment.appendChild(navItem);
    } */

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
            /* console.log(section);
            console.log("active"); */
            section.classList.add("active");
        } else {
            /* console.log(section);
            console.log("inactive") */
            section.classList.remove("active");
        }
    }
})

// Scroll to anchor ID using scrollTO event
    
// Fetches each menu item and apply an eventlistener to it
const navItems = document.getElementsByClassName("menu__link");
/* console.log(navItems, 1); */
function smoothBehavior (items, anchor) {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener ("click", function(e) {
            /* console.log(items[i]);
            console.log(e);
            console.log(anchor[i]); */
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
/* window.addEventListener("DOMContentLoaded", buildNavMenu); */
buildNavMenu();

// Scroll to section on link click
smoothBehavior(navItems, sections);

// Set sections as active


