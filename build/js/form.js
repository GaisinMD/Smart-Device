'use strict';

var ESC_KEYCODE = 27;

var body = document.querySelector('body');
var popupForm = document.querySelector('.popup');
var nameFocus = popupForm.querySelector('input[name=name]');
var closeFormButton = popupForm.querySelector('.feedback-form__close');
var mainButtonForForm = document.querySelector('.header__button');

function deactivateForm() {
  popupForm.classList.add(window.constants.HIDE_CLASS);
  nameFocus.blur();
  body.style = 'position: static; overflow: auto;';
  closeFormButton.removeEventListener('click', deactivateForm);
  document.removeEventListener('keydown', onEscPress);
}

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    deactivateForm();
  }
}

function hideForm() {
  popupForm.addEventListener('click', function (evt) {
    if (evt.target === closeFormButton || evt.target === popupForm) {
      deactivateForm();
    }
  });
  document.addEventListener('keydown', onEscPress);
}

function activateForm() {
  if (popupForm) {
    nameFocus.focus();
    if (popupForm.classList.contains(window.constants.HIDE_CLASS)) {
      popupForm.classList.remove(window.constants.HIDE_CLASS);
    }
    window.scrollTo(pageXOffset, 0);
    body.style = 'position: fixed; overflow: hidden;';
    hideForm();
  }
}

mainButtonForForm.addEventListener('click', activateForm);
