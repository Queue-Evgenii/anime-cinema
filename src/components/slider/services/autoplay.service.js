'use strict'

angular.module('sliderModule')
  .service('autoplay', [
    '$interval', 'sliderUtils', 'directionStates',
    function($interval, sliderUtils, directionStates) {
      this.setup = function(slider, slides, slideWidth, options, currentIndex, setCurrentIndex) {
        if (options.autoplayInterval <= 0) return;
        if (angular.isDefined(this.interval)) return;

        this.interval = $interval(() => {
          let newIndex = 0;

          if (options.autoplayDirection === directionStates.NORMAL) {
            newIndex = sliderUtils.nextSlideIndex(currentIndex, slides, options.slidePerView, setCurrentIndex);
          } else if (options.autoplayDirection === directionStates.INVERTED) {
            newIndex = sliderUtils.prevSlideIndex(currentIndex, slides, options.slidePerView, setCurrentIndex);
          } else return;

          sliderUtils.updateSliderPosition(slider, newIndex, slideWidth);
        }, options.autoplayInterval);
      };
      this.stop = function() {
        if (!angular.isDefined(this.interval)) return;
        $interval.cancel(this.interval);
        this.interval = undefined;
      };
  }]
);
