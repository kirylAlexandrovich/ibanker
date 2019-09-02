(function() {
  
  let slides = document.getElementsByClassName('slides');
  let sliding = false;

  const slideIndicator = document.getElementById('slideIndicator');

  const prevSlideButton = document.getElementById('prevSlideButton');
  const nextSlideButton = document.getElementById('nextSlideButton');

  let autoSlidind;

  function switchSlide(offset) {
    clearTimeout(autoSlidind);
    if (sliding) return;
    sliding = true;
    let currentSlideIndex = [...slides].findIndex(element => element.classList.contains('current-slide'));
    const prevSlideClassList = slides[currentSlideIndex].classList;

    prevSlideClassList.remove('current-slide');
    prevSlideClassList.add('previous-slide');

    if (currentSlideIndex + 1 === slides.length && offset !== -1) {
      currentSlideIndex = -1;
    }
    if (currentSlideIndex === 0 && offset === -1) {
      currentSlideIndex = slides.length;
    }

    slideIndicator.style.right === '50%' ? slideIndicator.style.right = '0%' : slideIndicator.style.right = '50%';

    slides[currentSlideIndex + offset].classList.remove('previous-slide');
    slides[currentSlideIndex + offset].classList.add('current-slide');
    setTimeout(() => {
      sliding = false;
    }, 900);
    autoSlidind = setTimeout(() => switchSlide(1), 5000);
  }

  autoSlidind = setTimeout(() => switchSlide(1), 5000);

  prevSlideButton.addEventListener('click', () => switchSlide(-1))
  nextSlideButton.addEventListener('click', () => switchSlide(1));
})();