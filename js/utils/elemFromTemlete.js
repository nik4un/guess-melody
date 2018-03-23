const getElementFromTemplate = (html) => {
  const template = document.createElement(`div`);
  template.innerHTML = html;
  return template.firstChild;
};

export default getElementFromTemplate;
