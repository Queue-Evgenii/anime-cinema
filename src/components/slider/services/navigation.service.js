'use strict'

angular.module('slider')
  .service('navigation', ['sliderUtils', function(sliderUtils) {
    this.setup = function(prevBtn, nextBtn, slider, slides, slideWidth, options, currentIndex, setCurrentIndex) {
      if (options.slidePerView <= 0 || options.slidePerView >= slides.length) {
        prevBtn.style = nextBtn.style = "display: none;"
        return;
      }

      prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex() === 0) ? slides.length - options.slidePerView : currentIndex() - 1;
        setCurrentIndex(newIndex);
        sliderUtils.updateSliderPosition(slider, newIndex, slideWidth);
      });

      nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex() >= slides.length - options.slidePerView) ? 0 : currentIndex() + 1;
        setCurrentIndex(newIndex);
        sliderUtils.updateSliderPosition(slider, newIndex, slideWidth);
      });
    };
  }]);
