'use strict';

var ESC_KEYCODE = 27;
var form = document.querySelector('.form-wrapper');
var nameFocus = form.querySelector('input[name=name]');
var telephone = form.querySelector('input[name=phone]');
var formHeader = form.querySelector('h2');
var formText = form.querySelector('p');
var formSubmit = form.querySelector('.submit-form');
var formHeaderContent = 'Остались вопросы? Задайте их нам!';
var formTextContent = 'Мы проконсультируем Вас бесплатно';
var formSubmitContent = 'Задать вопрос';
var formHeaderContentMobile = 'Закажите звонок';
var formTextContentMobile = 'Оставьте контакты, мы проконсультируем вас бесплатно в удобное время';
var formSubmitContentMobile = 'Отправить';
var closeFormButton = form.querySelector('.button--feedback-form-close');
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

window.addEventListener('DOMContentLoaded', function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function mask(event) {
    var matrix = this.defaultValue;
    var i = 0;
    var def = matrix.replace(/\D/g, '');
    this.value.replace(/\D/g, '');
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
      return val.charAt(i++) || '_';
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }

  telephone.addEventListener("input", mask, false)
});
