import getElementFromTemplate from '../utils/elemFromTemlete';
import showScreen from '../utils/showScreen';
import lose from './lose';
import { KEYCODE } from '../data';

const block = `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
  <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`;

const { ENTER, SPACE } = KEYCODE;

const element = getElementFromTemplate(block);

const onReplayclick = () => {
  showScreen(lose);
};

const onKeyPressDoIt = {
  [ENTER]: onReplayclick,
  [SPACE]: onReplayclick,
};

const onKeyPress = (evt) => {
  const key = evt.keyCode;
  if (key in onKeyPressDoIt) {
    const { [key]: func } = onKeyPressDoIt;
    func();
  }
};

const mainReplay = element.querySelector(`.main-replay`);
mainReplay.addEventListener(`click`, onReplayclick);
mainReplay.addEventListener(`keypress`, onKeyPress);

export default element;
