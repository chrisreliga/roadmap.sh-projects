'use-strict';

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  const openTab = tab.querySelector('.open-tab');
  const answerTab = tab.querySelector('.answer');

  openTab.addEventListener('click', () => {
    const openAnswer = document.querySelector('.answer.active');

    if (openAnswer && openAnswer !== answerTab) {
      openAnswer.classList.remove('active');
    }

    answerTab.classList.toggle('active');
  });
});
