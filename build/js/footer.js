'use strict';

var hideClass = 'visually-hidden';
var mobileMaxWidth = '(max-width: 767px)';

var toggleSecitons = document.querySelectorAll('.toggle-section');

var classPictureClose = '.toggle-section__toggle-close';
var classPictureOpen = '.toggle-section__toggle-open';
var classSectionText = '.toggle-section__text';


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

function initToogles() {
  for (var i = 0; i < toggleSecitons.length; i++) {
    var elem = toggleSecitons[i];
    var openIcon = elem.querySelector(classPictureOpen);
    var closeIcon = elem.querySelector(classPictureClose);
    var site = elem.querySelector(classSectionText);


    var button = elem.querySelector('.toggle-section__toggle');
    if (window.matchMedia(mobileMaxWidth).matches) {
      hideSection(site, openIcon, closeIcon);
      button.addEventListener('click', setEvent);
    } else {
      showSection(site, openIcon, closeIcon);
      button.removeEventListener('click', setEvent);
    }
  }
}

initToogles();

window.addEventListener('resize', initToogles);
