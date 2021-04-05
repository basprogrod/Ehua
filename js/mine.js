document.addEventListener('DOMContentLoaded', () => {

  const bb = document.getElementById('burger-button')
  const getBtn = document.getElementById('get')
  const modal = document.getElementById('modal')
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
    spaceBetween: 20,
    // cssMode: true,
    grabCursor: true,
    loop: true,
    roundLengths: true,

    navigation: {
      nextEl: '.swiper-button--prev',
      prevEl: '.swiper-button--next',
    },

  })

  const sl = new Swiper('.swiper-container-2', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: '.reviews-slider__button--prev',
    },

    breakpoints: {
      // when window width is >= 320px
      1440: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },

  });


  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
    $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    }
    // Обработка форм
    $(".form").each(function() {
      $(this).validate({
        errorClass: "invalide", 
        messages: {
          name: {
            required: "Please specify your name",
            minlength: "The name must be more than 2 characters long"
          },
          email: {
            required: "email error",
            email: "email format of name@domain.com",
          },
          phone: {
            required: "Phone number required",
          },
        }, 
      });
    });
    $(function(){
      $(".tel").mask("+8(999) 999-9999");
    });

})
