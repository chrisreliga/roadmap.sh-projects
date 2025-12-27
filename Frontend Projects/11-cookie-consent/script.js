'use-strict';

const cookieConsentBanner = document.querySelector('.cookie-consent');
const closeBtn = document.querySelector('.close-btn');
const acceptCookiesBtn = document.querySelector('.accept-cookies-btn');

window.addEventListener('load', function () {
  this.setTimeout(function () {
    cookieConsentBanner.classList.add('cookie-consent-show');
  }, 2000);
  console.log('Page is loaded');
});

closeBtn.addEventListener('click', function () {
  cookieConsentBanner.classList.remove('cookie-consent-show');
});

acceptCookiesBtn.addEventListener('click', function () {
  cookieConsentBanner.classList.remove('cookie-consent-show');
});
