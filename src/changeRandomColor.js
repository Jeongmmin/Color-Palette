import colors from './colorData.js';
import makeGradient from './makeGradient.js';

const generateBtn = document.querySelector('.generateBtn');

export default function handleChangeColor() {
  const randomColors = makeRandom(colors);
  displayColor(randomColors);
  makeGradient(randomColors);
}

function makeRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function displayColor(randomItems) {
  const colorItem = document.querySelectorAll('.colors__colorItem');
  const colorCode = document.querySelectorAll('.colorItem__colorCode');
  for (let i = 0; i < randomItems.length; i++) {
    colorItem[i].style.backgroundColor = randomItems[i];
    colorCode[i].innerHTML = randomItems[i];
  }
}

generateBtn.addEventListener('click', handleChangeColor);
