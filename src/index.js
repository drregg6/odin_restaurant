const createAnElement = require('../utils/createAnElement');
const aboutModule = require('../utils/aboutModule');
const homeModule = require('../utils/homeModule');
const contactModule = require('../utils/contactModule');

// Select
let CONTENT = document.querySelector('#content');
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


// Append Elements
HEADER.appendChild(H1);
for (let i = 0; i < menuItems.length; i++) {
  UL.appendChild(menuItems[i]);
}
NAV.appendChild(UL);

CONTENT.appendChild(HEADER);
CONTENT.appendChild(NAV);
CONTENT.appendChild(CONTAINER);


// Event Listeners
const LINKS = document.querySelectorAll('a');
for (let i = 0; i < LINKS.length; i++) {
  LINKS[i].addEventListener('click', function() {
    let str = `${LINKS[i].innerText.toLowerCase()}`;
    while (CONTAINER.firstChild) {
      CONTAINER.removeChild(CONTAINER.firstChild);
    }
    if (str === 'home') {
      CONTAINER.appendChild(homeModule());
    } else if (str === 'contact') {
      CONTAINER.appendChild(contactModule());
    } else {
      CONTAINER.appendChild(aboutModule());
    }
  });
}