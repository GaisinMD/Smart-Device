'use strict';
var mobileMaxWidth = 767;
var tabletMaxWidth = 1023;
var textAbout = document.querySelector('.about').querySelectorAll('p')[1];
var button = document.querySelector('.promo').querySelector('button');
var mobileButtonText = 'Бесплатная консультация';
var buttonText = 'Получить бесплатную консультацию';
var mobileAboutText = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог..';
var aboutText = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
var copyrightYear = document.querySelector('.copyright_year').cloneNode(true);
var logoFooter = document.querySelector('.logo-footer');

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
  var copyrightYearNew = document.querySelector('.social').querySelector('.copyright_year')
  if (node) {
    if (document.body.clientWidth <= width) {
      nodeBefore.after(node);
    } else {
      if (copyrightYearNew) {
        console.log("222");
        copyrightYearNew.remove();
      }
    }
  }
}

changeElementText(button, mobileMaxWidth, buttonText, mobileButtonText);
changeElementText(textAbout, tabletMaxWidth, aboutText, mobileAboutText);
replaceElement(logoFooter, copyrightYear, tabletMaxWidth);

window.addEventListener('resize', function () {
  changeElementText(button, mobileMaxWidth, buttonText, mobileButtonText);
  changeElementText(textAbout, tabletMaxWidth, aboutText, mobileAboutText);
  replaceElement(logoFooter, copyrightYear, tabletMaxWidth);
});
