'use strict'

angular.module('sliderModule')
  .service('navigation', ['sliderUtils', function(sliderUtils) {
    this.setup = function(prevBtn, nextBtn, slider, slides, slideWidth, options, currentIndex, setCurrentIndex) {
      if (options.slidePerView <= 0 || options.slidePerView >= slides.length) {
        prevBtn.style = nextBtn.style = "display: none;"
        return;
      }

      prevBtn.addEventListener('click', () => {
        const newIndex = sliderUtils.prevSlideIndex(currentIndex, slides, options, setCurrentIndex);
        sliderUtils.updateSliderPosition(slider, newIndex, slideWidth);
      });

      nextBtn.addEventListener('click', () => {
        const newIndex = sliderUtils.nextSlideIndex(currentIndex, slides, options, setCurrentIndex);
        sliderUtils.updateSliderPosition(slider, newIndex, slideWidth);
      });
    };
  }]);
