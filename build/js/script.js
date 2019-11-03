'use strict';
var mobileMaxWidth = 767;
var tabletMaxWidth = 1023;
var textAbout = document.querySelector('.about').querySelectorAll('p')[1];
var button = document.querySelector('.promo').querySelector('button');
var mobileButtonText = 'Бесплатная консультация';
var buttonText = 'Получить бесплатную консультацию';
var mobileAboutText = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог..';
var aboutText = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';

function changeElementText(element, width, text, replaceText) {
  if (element) {
    if (document.body.clientWidth > width) {
      element.textContent = text;
    } else {
      element.textContent = replaceText;
    }
  }
}

changeElementText(button, mobileMaxWidth, buttonText, mobileButtonText);
changeElementText(textAbout, tabletMaxWidth, aboutText, mobileAboutText);

window.addEventListener('resize', function () {
  changeElementText(button, mobileMaxWidth, buttonText, mobileButtonText);
  changeElementText(textAbout, tabletMaxWidth, aboutText, mobileAboutText);
});
