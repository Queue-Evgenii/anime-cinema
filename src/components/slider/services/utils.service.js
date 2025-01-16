'use strict'

angular.module('sliderModule')
  .service('sliderUtils', function() {
    this.updateSliderPosition = function(slider, currentIndex, slideWidth) {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    };
  });