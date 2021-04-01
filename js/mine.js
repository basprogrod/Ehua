var appendNumber = 4;
    var prependNumber = 1;
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
      },
    });
    document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
      ]);
    });
    document.querySelector('.prepend-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    });
    document.querySelector('.append-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    });
    document.querySelector('.append-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
      ]);
    });

    


    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      direction: getDirection(),
      navigation: {
        prevEl: '.reviews-slider__button--prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        }
      }
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }