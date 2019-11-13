'use strict';

var ESC_KEYCODE = 27;
var hideClass = 'visually-hidden';

// переменные формы
var body = document.querySelector('body');
var popupForm = document.querySelector('.popup');
var nameFocus = popupForm.querySelector('input[name=name]');
var closeFormButton = popupForm.querySelector('.feedback-form__close');
var mainButtonForForm = document.querySelector('.header__button');
var scrollDenaiedStyle = 'position: fixed; overflow: hidden;';
var scrollNormalStyle = 'position: static; overflow: auto;';

// переменные аккардеона
var mobileMaxWidth = '(max-width: 767px)';
var toggleSecitons = document.querySelectorAll('.toggle-section');
var classPictureClose = '.toggle-section__toggle-close';
var classPictureOpen = '.toggle-section__toggle-open';
var classSectionText = '.toggle-section__text';
var classButton = '.toggle-section__toggle';

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
function hideSection(section, openPic, closePic) {
  if (section) {
    section.classList.add(hideClass);
    if (closePic) {
      closePic.classList.remove(hideClass);
    }
    if (openPic) {
      openPic.classList.add(hideClass);
    }
  }
}

function showSection(section, openPic, closePic) {
  if (section) {
    section.classList.remove(hideClass);
    if (closePic) {
      closePic.classList.add(hideClass);
    }
    if (openPic) {
      openPic.classList.add(hideClass);
    }
  }
}

function toggleFooterSectionContent(site) {
  var openPic = site.querySelector(classPictureOpen);
  var closePic = site.querySelector(classPictureClose);
  var section = site.nextElementSibling;
  initToogles(section);
  if (section) {
    if (section.classList.contains(hideClass)) {
      section.classList.remove(hideClass);
      if (closePic) {
        closePic.classList.add(hideClass);
      }
      if (openPic) {
        openPic.classList.remove(hideClass);
      }
    } else {
      section.classList.add(hideClass);
      if (closePic) {
        closePic.classList.remove(hideClass);
      }
      if (openPic) {
        openPic.classList.add(hideClass);
      }
    }
  }
}

function setEvent(evt) {
  return toggleFooterSectionContent(evt.currentTarget);
}

function initToogles(exception) {
  for (var i = 0; i < toggleSecitons.length; i++) {
    var elem = toggleSecitons[i];
    var site = elem.querySelector(classSectionText);
    if (exception !== site) {
      var openIcon = elem.querySelector(classPictureOpen);
      var closeIcon = elem.querySelector(classPictureClose);
      var button = elem.querySelector(classButton);

      if (window.matchMedia(mobileMaxWidth).matches) {
        hideSection(site, openIcon, closeIcon);
        button.addEventListener('click', setEvent);
      } else {
        showSection(site, openIcon, closeIcon);
        button.removeEventListener('click', setEvent);
      }
    }
  }
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


initToogles();

window.addEventListener('resize', initToogles);

mainButtonForForm.addEventListener('click', activateForm);
