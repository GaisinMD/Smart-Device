'use strict';
var button = document.querySelector('.promo').querySelector('button');
var mobileButtonText = 'Бесплатная консультация';
var buttonText = 'Получить бесплатную консультацию';
var mobileMaxWidth = 767;


function changeButtonText() {
  if (button) {
    if (document.body.clientWidth > mobileMaxWidth) {
      button.textContent = buttonText;
    } else {
      button.textContent = mobileButtonText;
    }
  }
}

changeButtonText();
window.addEventListener('resize', changeButtonText);
