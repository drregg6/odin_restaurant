const createAnElement = require('../utils/createAnElement');

// Select
let CONTENT = document.querySelector('#content');
let subElements = [];

// Create
const HEADER = createAnElement('header');
const H1 = createAnElement('h1', 'The Odin Restaurant');
const SUBHEADER = createAnElement('div');
SUBHEADER.classList.add('subheader');
const SUBHEADER_P = createAnElement('p', 'This is a subheader');
const CONTAINER = createAnElement('div');
CONTAINER.classList.add('container');
for (let i = 0; i < 3; i++) {
  let element = createAnElement('div');
  element.classList.add('sub-element');
  if (i === 0) {
    element.classList.add('about');
  } else if (i === 1) {
    element.classList.add('hours');
  } else {
    element.classList.add('contact');
  }
  subElements.push(element);
}


// Append Elements
HEADER.appendChild(H1);
SUBHEADER.appendChild(SUBHEADER_P);
for (let i = 0; i < subElements.length; i++) {
  CONTAINER.appendChild(subElements[i]);
}

CONTENT.prepend(HEADER);
CONTENT.appendChild(SUBHEADER);
CONTENT.appendChild(CONTAINER);


// Add Content
const ABOUT = document.querySelector('.about');
const ABOUT_H2 = createAnElement('h2', 'About');
const ABOUT_P = createAnElement('p', 'This is the about section');
ABOUT.appendChild(ABOUT_H2);
ABOUT.appendChild(ABOUT_P);
const HOURS = document.querySelector('.hours');
const HOURS_H2 = createAnElement('h2', 'Hours');
const HOURS_P = createAnElement('p', 'This is the hours section');
HOURS.appendChild(HOURS_H2);
HOURS.appendChild(HOURS_P);
const CONTACT = document.querySelector('.contact');
const CONTACT_H2 = createAnElement('h2', 'Contact');
const CONTACT_P = createAnElement('p', 'This is the contact section');
CONTACT.appendChild(CONTACT_H2);
CONTACT.appendChild(CONTACT_P);