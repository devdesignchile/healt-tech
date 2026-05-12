(function ($) {
  'use strict';

  AOS.init({
    once: true
  });

  $(window).on('scroll', function () {
    let scrollToTop = $('.scroll-top-to'),
      scroll = $(window).scrollTop();
    if (scroll >= 200) {
      scrollToTop.fadeIn(200);
    } else {
      scrollToTop.fadeOut(100);
    }
  });

  $('.scroll-top-to').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

})(jQuery);

// Función para cambiar el contenido
function cambiarContenido(texto) {
  const contenido = document.getElementById('contenido');
  const verMasBtn = document.getElementById('verMasBtn');

  if (contenido && verMasBtn) {
    contenido.textContent = texto;
    verMasBtn.classList.remove('d-none');
  }
}

// Esperar a que el DOM esté completamente cargado antes de ejecutar
document.addEventListener('DOMContentLoaded', function () {
  cambiarContenido("");
});
