'use strict';

var scrollTime = 800;
var telephone = document.querySelector('input[name=phone]');

function scrollingSmooth(elem) {
  var id = $(elem).attr('href');
  var top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, scrollTime);
}

$(document).ready(function () {
  $('.button--promo').on('click', function (evt) {
    evt.preventDefault();
    scrollingSmooth(evt.target);
  });

  $('.promo-text-block__scroll').on('click', function (evt) {
    evt.preventDefault();
    scrollingSmooth(evt.target);
  });

  $(telephone).mask('+7(000) 000-0000');

});
