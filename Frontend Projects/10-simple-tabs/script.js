'use strict';

const tabBtns = document.querySelectorAll('.button');

const tabs = document.querySelectorAll('.tab');

tabBtns[0].classList.add('active-button');
tabs[0].classList.add('active-tab');

tabBtns.forEach((button, index) => {
  button.addEventListener('click', () => {
    console.log(button);

    tabBtns.forEach((button) => {
      button.classList.remove('active-button');
    });

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    button.classList.add('active-button');
    tabs[index].classList.add('active-tab');
  });
});
