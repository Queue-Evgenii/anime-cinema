'use strict'

angular.module('sliderModule')
  .controller(
    'sliderController', [
      '$scope', '$timeout', 'navigation', 'swipe',
      ($scope, $timeout, navigation, swipe) => {
        
        const defaultOptions = {
          slidePerView: 1,
          swipe: false,
          navigation: true,
          swipeOffset: 50,
        };

        $timeout(() => {
          $scope.options = { ...defaultOptions, ...$scope.options };

          const slider = $scope.root.querySelector('.slider-wrapper');
          const slides = [...slider.childNodes]
            .filter(item => item.nodeType === 1)
            .map(item => {
              item.classList.add('slider-slide');
              return item;
            });
          
          const prevBtn = $scope.root.querySelector('.slider-prev-btn');
          const nextBtn = $scope.root.querySelector('.slider-next-btn');

          let currentIndex = 0;
          const slideWidth = 100 / $scope.options.slidePerView;

          slides.forEach(slide => {
            slide.style.flex = `0 0 ${slideWidth}%`;
          });

          if ($scope.options.navigation) {
            navigation.setup(prevBtn, nextBtn, 
              slider,
              slides,
              slideWidth,
              $scope.options,
              () => currentIndex,
              (index) => { currentIndex = index; },
            );
          } else {
            prevBtn.style = nextBtn.style = "display: none;"
          }
          
          if ($scope.options.swipe) {
            slider.classList.add("_slider-grab")
            swipe.setup(slider,
              slides,
              slideWidth,
              $scope.options,
              () => currentIndex,
              (index) => { currentIndex = index; },
            );
          }
        });
      }
    ]
  );