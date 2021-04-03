var appendNumber = 4;
var prependNumber = 1;

new Swiper('.swiper-container', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button--prev',
    prevEl: '.swiper-button--next',
  },
  slideChange: (e) => {
    console.log('KEk');
  },
})

const sl = new Swiper('.swiper-container-2', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews-slider__button--prev',
  },
  slideChange: (e) => {
    console.log('KEk');
  }
});

const button = document.querySelector('')

// button.addEventListener('click', () => {
//   sl.slideNext()
// })

// slick slider