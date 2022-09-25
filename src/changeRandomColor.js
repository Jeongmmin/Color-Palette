import colors from './colorData.js';

const colorItem = document.querySelectorAll('.colors__colorItem');
const generateBtn = document.querySelector('.generateBtn');

export default function handleChangeColor() {
  const randomColors = makeRandom(colors);
  displayColor(randomColors);
}

function makeRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function displayColor(randomItems) {
  const colorCode = document.querySelectorAll('.colorItem__colorCode');
  for (let i = 0; i < colorItem.length; i++) {
    colorItem[i].style.backgroundColor = randomItems[i];
    colorCode[i].innerHTML = randomItems[i];
  }
}


generateBtn.addEventListener('click', handleChangeColor);