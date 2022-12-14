let copied = false;

export default function copyToClipBoard(event) {
  const content = event.target.innerHTML;
  if (event.target.classList.contains('colorItem__colorCode')) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        handleCopied(event)
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }
}

function handleCopied(e) {
  const message = 'COPIED!'
  if(copied) {
    copyAlert(e, message);
  }else {
    afterCopied(e, copyAlert(e, message));
  }
}


function copyAlert(e, message) {
  const code = e.target.innerHTML;
  e.target.innerHTML = message;
  e.target.classList.add('copied');
  return code;
}

function afterCopied(e, newMessage) {
  setTimeout(() => {
    e.target.classList.remove('copied');
    e.target.innerHTML = newMessage;
  }, 800);
}
