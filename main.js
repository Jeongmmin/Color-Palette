const colors = [
  ['#F6BD60', '#F7EDE2', '#F5CAC3', '#84A59D', '#F28482'],
  ['#061A23', '#06373A', '#1F5F5B', '#159947', '#49B265'],
  ['#95BCCC', '#FCDCDC', '#2B4C59', '#988080', '#BECEDA'],
  ['#FB6D10', '#EB3E1B', '#2E2E41', '#4D3347', '#86112E'],
  ['#4675C0', '#8FC8EB', '#19335A', '#697A98', '#B8BFD6'],
  ['#9FE7F5', '#429EBD', '#053F5C', '#F7AD19', '#F27F0C'],
];

const colorItem = document.querySelectorAll('.colors__colorItem');
const colorCode = document.querySelectorAll('.colorItem__colorCode');

const generateBtn = document.querySelector('.generateBtn');

handleRandomColor()

generateBtn.addEventListener('click', handleRandomColor);

function handleRandomColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  console.log(color);
  for (let i = 0; i < colorItem.length; i++) {
    colorItem[i].style.backgroundColor = color[i];
    colorCode[i].innerHTML = color[i];
  }
}
