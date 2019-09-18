module.exports = (el, text) => {
  const newElement = document.createElement(el);
  if (text) {
    newElement.innerHTML = text;
  }

  return newElement;
}