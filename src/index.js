/*

--------------------------------------
|                                    |
|                                    |
|                                    |
--------------------------------------

--------------------------------------

----------   ------------   ----------
|        |   |          |   |        |
|        |   |          |   |        |
|        |   |          |   |        |
----------   ------------   ----------

*/
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
  let element = createAnElement('div', 'Hello world');
  element.classList.add('sub-element');
  subElements.push(element);
}
console.log(subElements);


// Append Elements
HEADER.appendChild(H1);
SUBHEADER.appendChild(SUBHEADER_P);
for (let i = 0; i < subElements.length; i++) {
  CONTAINER.appendChild(subElements[i]);
}

CONTENT.prepend(HEADER);
CONTENT.appendChild(SUBHEADER);
CONTENT.appendChild(CONTAINER);