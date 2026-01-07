'use-strict';

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  const openTab = tab.querySelector('.open-tab');
  const answerTab = tab.querySelector('.answer');

  openTab.addEventListener('click', () => {
    answerTab.classList.toggle('active');
  });
});
