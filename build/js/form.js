'use strict';

var ESC_KEYCODE = 27;
var form = document.querySelector('.wrapper-form');
var nameFocus = form.querySelector('input[name=name]');
var formHeader = form.querySelector('h2');
var formText = form.querySelector('p');
var formSubmit = form.querySelector('.submit-form');
var formHeaderContent = 'Остались вопросы? Задайте их нам!';
var formTextContent = 'Мы проконсультируем Вас бесплатно';
var formSubmitContent = 'Задать вопрос';
var formHeaderContentMobile = 'Закажите звонок';
var formTextContentMobile = 'Оставьте контакты, мы проконсультируем вас бесплатно в удобное время';
var formSubmitContentMobile = 'Отправить';
var closeFormButton = form.querySelector('.close-form');
var popupClass = 'popup';
var visuallyHiddenClass = 'visually-hidden';
var mainButtonForForm = document.querySelector('.button--header-call');

function setFormContent(header, text, button) {
  if (formHeader) {
    formHeader.textContent = header;
  }
  if (formText) {
    formText.textContent = text;
  }
  if (formSubmit) {
    formSubmit.textContent = button;
  }
}

function deactivateForm() {
  form.classList.remove(popupClass);
  nameFocus.blur();
  closeFormButton.removeEventListener('click', deactivateForm);
  document.removeEventListener('keydown', onEscPress);
  closeFormButton.classList.add(visuallyHiddenClass);
  setFormContent(formHeaderContent, formTextContent, formSubmitContent);
}

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    deactivateForm();
  }
}

function hideForm() {
  closeFormButton.addEventListener('click', deactivateForm);
  document.addEventListener('keydown', onEscPress);
}

function activateForm() {
  if (form) {
    nameFocus.focus();
    if (!form.classList.contains(popupClass)) {
      form.classList.add(popupClass);
      setFormContent(formHeaderContentMobile, formTextContentMobile, formSubmitContentMobile);
    }
    if (closeFormButton || closeFormButton.classList.contains(visuallyHiddenClass)) {
      closeFormButton.classList.remove(visuallyHiddenClass);
    }
    window.scrollTo(pageXOffset, 0);
    hideForm();
  }
}

mainButtonForForm.addEventListener('click', activateForm);
setFormContent(formHeaderContent, formTextContent, formSubmitContent);
