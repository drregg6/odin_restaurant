/*

Assignment calls for each item from the menu
To be placed in its own module
Then when the link is clicked
The module should fire the content of the element


*/


const createAnElement = require('../utils/createAnElement');
const aboutModule = require('../utils/aboutModule');
const homeModule = require('../utils/homeModule');
const contactModule = require('../utils/contactModule');

// Select
let CONTENT = document.querySelector('#content');
let subElements = [];
let menuItems = [];

// Create
const HEADER = createAnElement('header');
const H1 = createAnElement('h1', 'The Odin Restaurant');

const NAV = createAnElement('nav');
NAV.classList.add('nav');
const UL = createAnElement('ul');
for (let i = 0; i < 3; i++) {
  let li = createAnElement('li');
  li.classList.add('nav-item');
  if (i === 0) {
    li.innerHTML = '<a href="#">Home</a>'
  } else if (i === 1) {
    li.innerHTML = '<a href="#">About</a>'
  } else {
    li.innerHTML = '<a href="#">Contact</a>'
  }
  menuItems.push(li);
}

const CONTAINER = createAnElement('div');
CONTAINER.classList.add('container');
for (let i = 0; i < 3; i++) {
  let element = createAnElement('div');
  element.classList.add('sub-element');
  if (i === 0) {
    element.classList.add('about', 'hide');
    element.setAttribute('id', 'about');
  } else if (i === 1) {
    element.classList.add('home', 'hide');
    element.setAttribute('id', 'home');
  } else {
    element.classList.add('contact', 'hide');
    element.setAttribute('id', 'contact');
  }
  subElements.push(element);
}


// Append Elements
HEADER.appendChild(H1);
for (let i = 0; i < subElements.length; i++) {
  CONTAINER.appendChild(subElements[i]);
}
for (let i = 0; i < menuItems.length; i++) {
  UL.appendChild(menuItems[i]);
}
NAV.appendChild(UL);

CONTENT.appendChild(HEADER);
CONTENT.appendChild(NAV);
CONTENT.appendChild(CONTAINER);


// Add Content
// const ABOUT = document.querySelector('.about');
// const ABOUT_H2 = createAnElement('h2', 'About');
// const ABOUT_P = createAnElement('p', aboutP);
// ABOUT.appendChild(ABOUT_H2);
// ABOUT.appendChild(ABOUT_P);

// const IMAGE = document.querySelector('.home');
// const IMG = createAnElement('img');
// IMG.setAttribute('src', '../images/random.jpg');
// IMAGE.appendChild(IMG);

// const CONTACT = document.querySelector('.contact');
// const CONTACT_H2 = createAnElement('h2', 'Contact');
// const CONTACT_P = createAnElement('p', 'This is the contact section');
// CONTACT.appendChild(CONTACT_H2);
// CONTACT.appendChild(CONTACT_P);


// Event Listeners
const LINKS = document.querySelectorAll('a');
LINKS[0].addEventListener('click', function() {
  while (CONTAINER.firstChild) {
    CONTAINER.removeChild(CONTAINER.firstChild);
  }
  CONTAINER.appendChild(homeModule());
});
LINKS[1].addEventListener('click', function() {
  while (CONTAINER.firstChild) {
    CONTAINER.removeChild(CONTAINER.firstChild);
  }
  CONTAINER.appendChild(aboutModule());
});
LINKS[2].addEventListener('click', function() {
  while (CONTAINER.firstChild) {
    CONTAINER.removeChild(CONTAINER.firstChild);
  }
  CONTAINER.appendChild(contactModule());
});
// LINKS[1].addEventListener('click', aboutModule);
// LINKS[2].addEventListener('click', contactModule);
// for (let i = 0; i < LINKS.length; i++) {
//   LINKS[i].addEventListener('click', function() {
//     let id = `#${LINKS[i].innerText.toLowerCase()}`;
//     let el = document.querySelector(id);
    
//     subElements.forEach(element => {
//       element.classList.remove('show');
//     });
//     el.classList.add('show');
//   });
// }