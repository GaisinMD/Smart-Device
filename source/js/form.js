'use strict';

var ESC_KEYCODE = 27;
var form = document.querySelector('.wrapper-form');
var nameFocus = form.querySelector('input[name=name]');
var formHeader = form.querySelector('h2');
var formText = form.querySelector('p');
var formHeaderContent = 'Остались вопросы? Задайте их нам!';
var formTextContent = 'Мы проконсультируем Вас бесплатно';
var formHeaderContentMobile = 'Закажите звонок';
var formTextContentMobile = 'Оставьте контакты, мы проконсультируем вас бесплатно в удобное время';
var closeFormButton = form.querySelector('.close-form');
var popupClass = 'popup';
var visuallyHiddenClass = 'visually-hidden';
var mainButtonForForm = document.querySelector('.links-wrapper').querySelector('button');

function setFormContent(header, text) {
  if (formHeader) {
    formHeader.textContent = header;
  }
  if (formText) {
    formText.textContent = text;
  }
}

function deactivateForm() {
  form.classList.remove(popupClass);
  nameFocus.blur();
  closeFormButton.removeEventListener('click', deactivateForm);
  document.removeEventListener('keydown', onEscPress);
  closeFormButton.classList.add(visuallyHiddenClass);
  setFormContent(formHeaderContent, formTextContent);
}

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    deactivateForm();
  }
};

function hideForm() {
  closeFormButton.addEventListener('click', deactivateForm);
  document.addEventListener('keydown', onEscPress);
}

function activateForm() {
  if (form) {
    nameFocus.focus();
    if (!form.classList.contains(popupClass)) {
      form.classList.add(popupClass);
      setFormContent(formHeaderContentMobile, formTextContentMobile);
    }
    if (closeFormButton || closeFormButton.classList.contains(visuallyHiddenClass)) {
      closeFormButton.classList.remove(visuallyHiddenClass);
    }
    hideForm();
  }
}

mainButtonForForm.addEventListener('click', activateForm);
setFormContent(formHeaderContent, formTextContent);
