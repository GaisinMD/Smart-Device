'use strict';

var textAbout = document.querySelector('.about').querySelectorAll('p')[1];
var button = document.querySelector('.promo').querySelector('button');
var mobileButtonText = 'Бесплатная консультация';
var buttonText = 'Получить бесплатную консультацию';
var mobileAboutText = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог..';
var aboutText = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
var copyrightYear = document.querySelector('.copyright__item--year').cloneNode(true);
var logoFooter = document.querySelector('.social__logo-footer');

function changeElementText(element, width, text, replaceText) {
  if (element) {
    if (document.body.clientWidth > width) {
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

function changeElements() {
  changeElementText(button, window.constants.MOBILE_MAX_WIDTH, buttonText, mobileButtonText);
  changeElementText(textAbout, window.constants.TABLET_MAX_WIDTH, aboutText, mobileAboutText);
  replaceElement(logoFooter, copyrightYear, window.constants.TABLET_MAX_WIDTH);
}

changeElements();

window.addEventListener('resize', changeElements);
