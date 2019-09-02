(function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  const burgerContent = document.getElementById('burgerContent');
  const sliderControl = document.getElementById('sliderControls');

  menuToggle.addEventListener('click', function () {
    if (burgerMenu.classList.contains('burger-menu-opened')) {
      burgerMenu.classList.remove('burger-menu-opened');
      burgerContent.classList.remove('burger-content-visible');
      sliderControl.classList.remove('hide-slider-controls');

      burgerMenu.classList.add('burger-menu-closed');
      burgerContent.classList.add('burger-content-invisible');
    } else {
      burgerMenu.classList.remove('burger-menu-closed');
      burgerContent.classList.remove('burger-content-invisible');

      sliderControl.classList.add('hide-slider-controls');
      burgerMenu.classList.add('burger-menu-opened');
      burgerContent.classList.add('burger-content-visible');
    }
  });

})();
