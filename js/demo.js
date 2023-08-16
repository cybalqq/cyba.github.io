/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
const ALTURA_PANTALLAS_CELULARES = 800;
// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#8d080d',
    lineColor: '#8d080d'
  });
  var intro = document.getElementById('intro');
  var particles = document.getElementById('particles');
  if (particles.offsetHeight > ALTURA_PANTALLAS_CELULARES) {
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  }
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
