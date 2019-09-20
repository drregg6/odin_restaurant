const createAnElement = require('./createAnElement');

module.exports = () => {
  let aboutP = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis congue mauris malesuada aliquam. Aliquam dapibus, dolor non euismod porttitor, lectus nisi interdum lacus, non tincidunt ligula dolor non mauris. Morbi sit amet felis dolor. Aenean nisl nulla, pulvinar at sem et, molestie laoreet dui. Morbi eu mattis libero. Duis fringilla iaculis finibus. Suspendisse vel neque elit. Nulla volutpat euismod velit. Etiam facilisis non sapien vel pretium. Sed sit amet dui quam. Integer fringilla pulvinar gravida. Aliquam mattis mattis elit non ultricies. In sed risus suscipit, dictum dolor et, feugiat metus. Maecenas laoreet cursus interdum. Duis vel lectus tempor, aliquet erat eget, ullamcorper ex. ';
  const EL = createAnElement('div');
  const ABOUT_P = createAnElement('p', aboutP);

  const H2 = createAnElement('h2', 'About');

  EL.classList.add('sub-element');
  EL.setAttribute('id', 'about');

  EL.appendChild(H2);
  EL.appendChild(ABOUT_P);

  return EL;
}