'use strict';

var ESC_KEYCODE = 27;
var form = document.querySelector('.form-wrapper');
var nameFocus = form.querySelector('input[name="name"]');
var formHeader = form.querySelector('.feedback-form__header');
var formText = form.querySelector('.feedback-form__text');
var formSubmit = form.querySelector('.button--feedback-form-submit');
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

// var phone = document.querySelector('input[name="phone"');

window.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('input[name="phone"'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

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
