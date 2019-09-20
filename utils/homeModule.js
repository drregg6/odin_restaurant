const createAnElement = require('./createAnElement');

module.exports = () => {
  const EL = createAnElement('div');
  const IMG = createAnElement('img');

  EL.classList.add('sub-element');
  EL.setAttribute('id', 'home');

  IMG.setAttribute('src', '../images/random.jpg');
  EL.appendChild(IMG);

  return EL;
}