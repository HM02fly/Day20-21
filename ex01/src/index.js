let keyboardKeys = document.getElementsByClassName('keyboard-key');
let capsLock = document.getElementById('capslock');
let shift = document.getElementById('shift');
let backspace = document.getElementById('backspace');
let clicks = 0;
let enter = document.getElementById('enter');
let ok = document.getElementById('ok');

backspace.addEventListener('click', () => {
  textArea.value = textArea.value.slice(0, -1);
});

capsLock.addEventListener('click', () => {
  capsLock.classList.toggle('active');
  for (let i = 0; i < keyboardKeys.length; i++) {
    keyboardKeys[i].classList.toggle('uppercase');
  }
});
let textArea = document.getElementById('textArea');

shift.addEventListener('click', () => {
  shift.classList.toggle('active');
  for (let i = 0; i < keyboardKeys.length; i++) {
    keyboardKeys[i].classList.toggle('uppercase');
  }
});

for (let i = 0; i < keyboardKeys.length; i++) {
  keyboardKeys[i].addEventListener('click', () => {
    if (capsLock.classList.contains('active')) {
      textArea.value += keyboardKeys[i].value.toUpperCase();
    } else if (shift.classList.contains('active')) {
      textArea.value += keyboardKeys[i].value.toUpperCase();
      clicks++;
      if (clicks > 1) {
        shift.classList.toggle('active');
        for (let i = 0; i < keyboardKeys.length; i++) {
          keyboardKeys[i].classList.toggle('uppercase');
        }
        clicks = 0;
      }
    } else {
      textArea.value += keyboardKeys[i].value;
    }
  });
}

enter.addEventListener('click', () => {
  textArea.value += '\n';
});

ok.addEventListener('click', () => {
  if (textArea.value !== '') {
    alert(textArea.value);
  }
  textArea.value = '';
});
