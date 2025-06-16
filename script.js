let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
const bulls = document.querySelectorAll('.bulls li');
let isScrolling = false;

const updateBulls = (index) => {
  bulls.forEach((bull, i) => {
    bull.classList.toggle('active', i === index);
  });
};

const scrollToPage = (pageNum) => {
  isScrolling = true;
  pages[pageNum].scrollIntoView({ behavior: 'smooth' });
  updateBulls(pageNum);
  setTimeout(() => {
    isScrolling = false;
  }, 1000);
};

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0 && currentPage < totalPages - 1) {
    currentPage++;
  } else if (e.deltaY < 0 && currentPage > 0) {
    currentPage--;
  }

  scrollToPage(currentPage);
});

// 🔵 Bull 클릭 이벤트
bulls.forEach((bull, index) => {
  bull.addEventListener('click', () => {
    if (index !== currentPage) {
      currentPage = index;
      scrollToPage(currentPage);
    }
  });
});



// main slide

  function mainSwiperInit () {
    this.slides.forEach(slide => slide.classList.remove('on'))
    this.slides[this.activeIndex].classList.add('on')
  }

  const swiper = new Swiper('#land-slide .mySwiper', {
    loop: true,
    speed: 3000,
    grabCursor: true,

    pagination: {
      el: '#land-slide .vpaging .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#land-slide .vnext',
      prevEl: '#land-slide .vprev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionEnd: mainSwiperInit,
      init: mainSwiperInit,
    }
  });



// 기숙사 스와이퍼
var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper3,
  },

});
