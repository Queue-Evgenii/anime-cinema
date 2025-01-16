'use strict'

angular.module('sliderModule')
  .service('swipe', ['sliderUtils', function(sliderUtils) {
    this.setup = function(slider, slides, slideWidth, options, currentIndex, setCurrentIndex) {
      let startX = 0;
      let currentX = 0;
      let isDragging = false;

      const startInteraction = (clientX) => {
        startX = clientX;
        isDragging = true;
        slider.style.transition = 'none';
      };

      const moveInteraction = (clientX) => {
        if (!isDragging) return;
        currentX = clientX - startX;
        const translateX = -currentIndex() * slideWidth + (currentX / slider.offsetWidth) * 100;
        slider.style.transform = `translateX(${translateX}%)`;
      };

      const endInteraction = () => {
        if (!isDragging) return;
        isDragging = false;
        slider.style.transition = 'transform 0.5s ease-in-out';

        let newIndex = 0;
        if (currentX > options.swipeOffset) {
          newIndex = sliderUtils.prevSlideIndex(currentIndex, slides, options.slidePerView, setCurrentIndex);
        } else if (currentX < -options.swipeOffset) {
          newIndex = sliderUtils.nextSlideIndex(currentIndex, slides, options.slidePerView, setCurrentIndex);
        }

        sliderUtils.updateSliderPosition(slider, newIndex, slideWidth);
      };

      slider.addEventListener('touchstart', (e) => startInteraction(e.touches[0].clientX));
      slider.addEventListener('touchmove', (e) => moveInteraction(e.touches[0].clientX));
      slider.addEventListener('touchend', endInteraction);

      slider.addEventListener('mousedown', (e) => startInteraction(e.clientX));
      document.addEventListener('mousemove', (e) => moveInteraction(e.clientX));
      document.addEventListener('mouseup', endInteraction);
    };
  }]);