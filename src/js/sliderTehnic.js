import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const servicesSlider = new Swiper('.technics__slider', {
  modules: [Pagination],
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Адаптация под разные экраны
function checkScreenSize() {
  const servicesSlider = document.querySelector('.technics__slider');
  const serviceGrid = document.querySelector('.technic-grid');
  
  if (window.innerWidth >= 768) {
    if (servicesSlider) servicesSlider.style.display = 'none';
    if (serviceGrid) serviceGrid.style.display = 'grid';
  } else {
    if (servicesSlider) servicesSlider.style.display = '';
    if (serviceGrid) serviceGrid.style.display = 'none';
  }
}

// Проверка при загрузке и изменении размера окна
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);