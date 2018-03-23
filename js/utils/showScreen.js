const root = document.querySelector(`.main`);

export default (elem) => {
  if (elem) {
    root.innerHTML = ``;
    root.appendChild(elem);
  }
};
