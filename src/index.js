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

const CONTENT = document.querySelector('#content');
console.log(CONTENT);

const createElement = () => {
  const DIV = document.createElement('div');
  DIV.innerHTML = 'Hello world';

  return DIV;
}

const HEADER = createElement();
console.log(HEADER);
CONTENT.appendChild(HEADER);

console.log('hello world!');