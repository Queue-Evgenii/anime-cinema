'use strict'

angular.module('slider')
  .service('sliderUtils', function() {
    this.updateSliderPosition = function(slider, currentIndex, slideWidth) {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    };
  });