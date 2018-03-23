import getElementFromTemplate from '../utils/elemFromTemlete';
import showScreen from '../utils/showScreen';
import gameArtist from './artist-game';

const block = `<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;2 минуты дать
    максимальное количество правильных ответов.<br>
    Удачи!
  </p>
</section>`;

const element = getElementFromTemplate(block);
const location = element.querySelector(`.main-play`);


const onClickPlay = () => {
  showScreen(gameArtist);
};

location.addEventListener(`click`, onClickPlay);

export default element;
