'use-strict';

const textAreaContainer = document.querySelector('.textarea-container');
const restrictedTextarea = document.getElementById('textarea');
const charCounter = document.querySelector('.char-counter');

const maxLimit = 250;

restrictedTextarea.addEventListener('input', function () {
  restrictedTextarea.value = restrictedTextarea.value.substring(0, maxLimit);
  const currentCharCount = restrictedTextarea.value.length;
  charCounter.textContent = `${currentCharCount} / ${maxLimit}`;

  if (currentCharCount >= maxLimit) {
    textAreaContainer.classList.add('char-limit-reached-border');
    restrictedTextarea.classList.add('char-limit-reached-text');
    charCounter.classList.add('char-limit-reached-text');
  } else {
    textAreaContainer.classList.remove('char-limit-reached-border');
    restrictedTextarea.classList.remove('char-limit-reached-text');
    charCounter.classList.remove('char-limit-reached-text');
  }
});
