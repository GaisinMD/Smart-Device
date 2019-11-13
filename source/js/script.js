'use strict';

var copyrightYear = document.querySelector('.copyright__item--year').cloneNode(true);
var logoFooter = document.querySelector('.social__logo-footer');

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
  replaceElement(logoFooter, copyrightYear, window.constants.TABLET_MAX_WIDTH);
}

changeElements();

window.addEventListener('resize', changeElements);
