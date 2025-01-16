'use strict'

angular.module('sliderModule')
  .factory('sliderUtils', function() {
    return {
      nextSlideIndex: (currentIndex, slides, slidePerView, setCurrentIndex) => {
        const newIndex = (currentIndex() >= slides.length - slidePerView) ? 0 : currentIndex() + 1;
        setCurrentIndex(newIndex);
        return newIndex;
      },
  
      prevSlideIndex: (currentIndex, slides, slidePerView, setCurrentIndex) => {
        const newIndex = (currentIndex() === 0) ? slides.length - slidePerView : currentIndex() - 1;
        setCurrentIndex(newIndex);
        return newIndex;
      },
  
      updateSliderPosition: function(slider, currentIndex, slideWidth) {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      },
    }
  });