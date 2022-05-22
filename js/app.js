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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const backToTop = document.getElementById('backToTop');
const headrMenu = document.getElementById('header');
let navItems;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(element) {
    return element.getBoundingClientRect().y <= (window.innerHeight / 2)
        && element.getBoundingClientRect().y + element.getBoundingClientRect().height > window.innerHeight / 2;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addSectionToNav() {
    for (let section of sections) {
        let sectionLink = document.createElement('li');
        sectionLink.innerHTML = `<a href='#${section.getAttribute('id')}' data-nav='${section.getAttribute('id')}' class='menu__link'>${section.getAttribute('data-nav')}</a>`;
        navList.appendChild(sectionLink);
    }
    navItems = document.getElementsByClassName('menu__link');
}

// Add class 'active' to section when near top of viewport
window.onscroll = function () {
    let timer = null;
    sections.forEach(function (activeSection, index) {
        isInViewport(activeSection) ? 
        (activeSection.classList.add('your-active-class'), navItems[index].style ='background-color: #54b87c; color: #353a40;') :
        (activeSection.classList.remove('your-active-class'), navItems[index].style = null);
    })
    headrMenu.style.position = 'absolute';
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        headrMenu.style.position = 'fixed';
    }, 350);
}

// Scroll to anchor ID using scrollTO event
navList.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A') {
        event.preventDefault();
        document.getElementById(event.target.getAttribute('data-nav')).scrollIntoView({ behavior: "smooth" });
    }
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addSectionToNav();
// Scroll to section on link click
backToTop.addEventListener('click', function (event) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
// Set sections as active


