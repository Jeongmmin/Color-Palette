const DEG = 147;
const gradientBtn = document.querySelector('.gradientBtn');

let showGradient = false;

gradientBtn.addEventListener('click', handleShowGradient);

export default function makeGradient(randomItems) {
  const mixed = document.querySelectorAll('.mixColors__mixedItem');
  for (let i = 0; i < randomItems.length; i++) {
    if (i === randomItems.length - 1) {
      mixed[
        i
      ].style.background = `linear-gradient(147deg, ${randomItems[i]}, ${randomItems[0]})`;
    } else {
      mixed[i].style.background = `linear-gradient(${DEG}deg, ${
        randomItems[i]
      }, ${randomItems[i + 1]})`;
    }
  }
}


function handleShowGradient() {
  const mixColors = document.querySelector('.contentBox__mixColors');
    mixColors.classList.toggle('none');
    gradientBtn.classList.toggle('clicked');
  
}


