const createAnElement = require('./createAnElement');

module.exports = () => {
  const EL = createAnElement('div');
  EL.classList.add('sub-element');
  EL.setAttribute('id', 'contact');

  const H2 = createAnElement('h2', 'Contact');

  const FORM = createAnElement('form');
  const TEXT_INPUT = createAnElement('textarea');
  TEXT_INPUT.setAttribute('placeholder', 'Message...');
  const SUBMIT = createAnElement('input');
  SUBMIT.setAttribute('type', 'submit');
  SUBMIT.setAttribute('value', 'Submit');

  FORM.appendChild(TEXT_INPUT);
  FORM.appendChild(SUBMIT);
  EL.appendChild(H2);
  EL.appendChild(FORM);

  return EL;
}