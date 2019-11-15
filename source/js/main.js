'use strict';

var ESC_KEYCODE = 27;
var hideClass = 'visually-hidden';

// переменные аккардеона
var mobileMaxWidth = '(max-width: 767px)';
var secitons = document.querySelectorAll('.toggle-section');
var classSection = '.toggle-section';
var sectionsClose = 'toggle-section--close';
var sectionsOpen = 'toggle-section--open';
var classButton = '.toggle-section__toggle';
var classSectionText = '.toggle-section__text';

// переменные формы
var body = document.querySelector('body');
var popupForm = document.querySelector('.popup');
var nameFocus = popupForm.querySelector('input[name=name]');
var closeFormButton = popupForm.querySelector('.popup-feedback__close');
var mainButtonForForm = document.querySelector('.header__button');
var scrollDenaiedStyle = 'overflow: hidden;';
var scrollNormalStyle = 'overflow: auto;';

// переменные скролла
var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
var animationTime = 300;
var framesCount = 20;

// функции формы
function deactivateForm() {
  popupForm.classList.add(hideClass);
  nameFocus.blur();
  body.style = scrollNormalStyle;
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
    if (popupForm.classList.contains(hideClass)) {
      popupForm.classList.remove(hideClass);
    }
    window.scrollTo(pageXOffset, 0);
    body.style = scrollDenaiedStyle;
    hideForm();
  }
}

// функции аккардеона
function closeAllAccordeons() {
  if (secitons) {
    secitons.forEach(function (element) {
      element.classList.add(sectionsClose);
      element.classList.remove(sectionsOpen);
    });
  }
}

function toggleAccordeon(element) {
  element.classList.toggle(sectionsClose);
  element.classList.toggle(sectionsOpen);
}

function onAccorderonHeadClick(evt) {
  var accordeonElement = evt.currentTarget.closest(classSection);
  if (accordeonElement.classList.contains(sectionsClose)) {
    closeAllAccordeons();
  }
  toggleAccordeon(accordeonElement);
}

function initToggles() {
  secitons.forEach(function (element) {
    var head = element.querySelector(classButton);
    if (window.matchMedia(mobileMaxWidth).matches) {
      head.addEventListener('click', onAccorderonHeadClick);
      element.classList.add(sectionsClose);
    } else {
      head.removeEventListener('click', onAccorderonHeadClick);
      element.classList.remove(sectionsClose);
      element.classList.remove(sectionsOpen);
    }
  });
}

// реализация скролла
anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    var scroller = setInterval(function () {
      var scrollBy = coordY / framesCount;

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});


initToggles();

window.addEventListener('resize', initToggles);

mainButtonForForm.addEventListener('click', activateForm);
