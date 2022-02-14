const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.main-slider__arrow',
    },
    breakpoints:  { 
    320: {
        slidesPerView: 1,

    },
    768: {
        slidesPerView: 2,
        
    }
    }
  });  



  const modalWindow = query.querySelector('.modal');
 