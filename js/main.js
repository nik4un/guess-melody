const template = document.querySelector(`#templates`);
const mainScreens = template.content.querySelectorAll(`.main`);
const root = document.querySelector(`.app > .main`);


const firstScreenIndex = 0;
const screenIndex = [4, 0, 3, 2, 1];

let screenNum = firstScreenIndex;

const showScreen = (screen) => {
  root.innerHTML = ``;
  root.appendChild(mainScreens[screenIndex[screen]]);
};

const onAltArrowLeftDown = () => {
  screenNum = screenNum > firstScreenIndex ? screenNum - 1 : firstScreenIndex;
  showScreen(screenNum);
};

const onAltArrowRightDown = () => {
  const lastScreenIndex = screenIndex.length - 1;
  screenNum = screenNum < lastScreenIndex ? screenNum + 1 : lastScreenIndex;
  showScreen(screenNum);
};

const onKeyWithAltDown = {
  37: onAltArrowLeftDown,
  39: onAltArrowRightDown,
};

const onKeydown = (evt) => {
  const key = evt.keyCode;
  if (evt.altKey) {
    if (key in onKeyWithAltDown) {
      const { [key]: func } = onKeyWithAltDown;
      func();
    }
  }
};


document.addEventListener(`keydown`, onKeydown);
showScreen(firstScreenIndex);
