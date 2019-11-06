'use strict';

var hideClass = 'visually-hidden';

var buttonSections = document.querySelector('#sections');
var buttonAddress = document.querySelector('#address');

var buttonBackgroundOpen = 'url("/img/button_section_open.png")';
var buttonBackgroundClose = 'url("/img/button_section_close.png")';

var siteSections = document.querySelector('.site-sections').querySelector('ul');
var address = document.querySelector('.address').querySelector('div');

siteSections.classList.add(hideClass);
buttonSections.style.backgroundImage = buttonBackgroundClose;

function toggleSection(section, button) {
  if (section) {
    if (section.classList.contains(hideClass)) {
      section.classList.remove(hideClass);
      button.style.backgroundImage = buttonBackgroundOpen;
    } else {
      section.classList.add(hideClass);
      button.style.backgroundImage = buttonBackgroundClose;
    }
  }
}

buttonSections.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleSection(siteSections, evt.target);
});

buttonAddress.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleSection(address, evt.target);
});
