import handleChangeColor from './changeRandomColor.js';
import copyToClipBoard from './copyColorCode.js';

const colorItem = document.querySelectorAll('.colors__colorItem');

handleChangeColor();

colorItem.forEach((item) => {
  item.addEventListener('click', copyToClipBoard);
});
