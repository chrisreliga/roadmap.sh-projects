'use-strict';

const input = document.getElementById('dob');
const calcBtn = document.getElementById('calculate-btn');
const yearsEl = document.querySelector('.years h2');
const monthsEl = document.querySelector('.months h2');
const daysEl = document.querySelector('.days h2');

flatpickr('#dob', {
  dateFormat: 'Y-m-d',
  maxDate: 'today',
});

const { DateTime } = luxon;

calcBtn.addEventListener('click', () => {
  const dobString = input.value;
  if (!dobString) return;

  const today = DateTime.now();
  const birthDate = DateTime.fromISO(dobString);
  const age = today.diff(birthDate, ['years', 'months', 'days']);

  yearsEl.textContent = Math.floor(age.years);
  monthsEl.textContent = Math.floor(age.months);
  daysEl.textContent = Math.floor(age.days);
});
