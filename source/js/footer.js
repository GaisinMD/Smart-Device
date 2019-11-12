'use strict';

var siteSections = document.querySelector('.site-sections__list-wrapper');
var buttonSections = document.querySelector('#sections');

var address = document.querySelector('.address__text');
var buttonAddress = document.querySelector('#address');

var buttonBackgroundOpen = 'url("../img/button_section_open.png")';
var buttonBackgroundClose = 'url("../img/button_section_close.png")';

function hideFooterSection(site, button) {
  if (site) {
    if (window.matchMedia(window.constants.MOBILE_MAX_WIDTH).matches) {
      site.classList.add(window.constants.HIDE_CLASS);
      if (button) {
        button.style.backgroundImage = buttonBackgroundClose;
      }
    } else {
      site.classList.remove(window.constants.HIDE_CLASS);
    }
  }
}

function toggleFooterSection(section, buttonClose) {
  if (section) {
    if (section.classList.contains(window.constants.HIDE_CLASS)) {
      section.classList.remove(window.constants.HIDE_CLASS);
      if (buttonClose) {
        buttonClose.style.backgroundImage = buttonBackgroundOpen;
      }
    } else {
      section.classList.add(window.constants.HIDE_CLASS);
      if (buttonClose) {
        buttonClose.style.backgroundImage = buttonBackgroundClose;
      }
    }
  }
}

function toggleFooter() {
  hideFooterSection(siteSections, buttonSections);
  hideFooterSection(address, buttonAddress);
}

toggleFooter();

window.addEventListener('resize', toggleFooter);

buttonSections.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleFooterSection(siteSections, evt.target);
});

buttonAddress.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleFooterSection(address, evt.target);
});
