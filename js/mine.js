document.addEventListener('DOMContentLoaded', () => {

  const bb = document.getElementById('burger-button')
  const getBtn = document.getElementById('get')
  // const modal = document.getElementById('modal')
  const nav = document.getElementById('nav')

  bb.addEventListener('click', function (e) {
    nav.classList.toggle('active')       
  })

  getBtn.addEventListener('click', function (e) {
    modal.classList.add('active')       
  })

  nav.onclick = (e) => {
    e.stopPropagation()
  }

  // modal.onclick = (e) => {
  //   e.stopPropagation()
  // }

  document.onscroll = () => {
    nav.classList.remove('active')
  }

  document.body.onclick = function(e) {
    if (e.target !== bb) {
      nav.classList.remove('active')
      modal.classList.remove('active')
    }
    
  }

  new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button--prev',
      prevEl: '.swiper-button--next',
    },

  })

  const sl = new Swiper('.swiper-container-2', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews-slider__button--prev',
    },
  });
})
