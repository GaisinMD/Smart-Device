'use strict';

var hideClass = 'visually-hidden';

var mobileMaxWidth = 768;
var tabletMaxWidth = 1024;

var button = document.querySelector('.button--promo');
var mobileButtonText = 'Бесплатная консультация';
var buttonText = 'Получить бесплатную консультацию';

var textAbout = document.querySelector('.about__text').querySelectorAll('p')[1];
var mobileAboutText = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог..';
var aboutText = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';

var logoFooter = document.querySelector('.social__logo-footer');
var copyrightYear = document.querySelector('.copyright__item--year').cloneNode(true);

var buttonSections = document.querySelector('#sections');
var buttonAddress = document.querySelector('#address');
var buttonBackgroundOpen = 'url("/img/button_section_open.png")';
var buttonBackgroundClose = 'url("/img/button_section_close.png")';

var siteSections = document.querySelector('.list-sections');
var address = document.querySelector('.address__text');


function toggleSection(section, buttonClose) {
  if (section) {
    if (section.classList.contains(hideClass)) {
      section.classList.remove(hideClass);
      buttonClose.style.backgroundImage = buttonBackgroundOpen;
    } else {
      section.classList.add(hideClass);
      buttonClose.style.backgroundImage = buttonBackgroundClose;
    }
  }
}

function hideElement() {
  if (document.body.clientWidth < mobileMaxWidth) {
    siteSections.classList.add(hideClass);
  } else {
    siteSections.classList.remove(hideClass);
    address.classList.remove(hideClass);
    buttonSections.style.backgroundImage = buttonBackgroundClose;
    buttonAddress.style.backgroundImage = buttonBackgroundOpen;
  }
}

function changeElementText(element, width, text, replaceText) {
  if (element) {
    if (document.body.clientWidth >= width) {
      element.textContent = text;
    } else {
      element.textContent = replaceText;
    }
  }
}

function replaceElement(nodeBefore, node, width) {
  var copyrightYearNew = document.querySelector('.social').querySelector('.copyright__item--year');
  if (node) {
    if (document.body.clientWidth < width) {
      nodeBefore.after(node);
    } else {
      if (copyrightYearNew) {
        copyrightYearNew.remove();
      }
    }
  }
}

buttonSections.style.backgroundImage = buttonBackgroundClose;
hideElement();
changeElementText(button, mobileMaxWidth, buttonText, mobileButtonText);
changeElementText(textAbout, tabletMaxWidth, aboutText, mobileAboutText);
replaceElement(logoFooter, copyrightYear, tabletMaxWidth);

buttonSections.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleSection(siteSections, evt.target);
});

buttonAddress.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleSection(address, evt.target);
});

window.addEventListener('resize', function () {
  changeElementText(button, mobileMaxWidth, buttonText, mobileButtonText);
  changeElementText(textAbout, tabletMaxWidth, aboutText, mobileAboutText);
  replaceElement(logoFooter, copyrightYear, tabletMaxWidth);
  hideElement();
});
