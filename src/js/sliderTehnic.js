import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import expandIcon from '../assets/main-icons/expand.svg';
import expandUpIcon from '../assets/main-icons/expandVverh.svg';

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


window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

// кнопка 
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn-technic');
  if (toggleBtn) {
    const toggleImg = toggleBtn.querySelector('img');
    const toggleText = toggleBtn.querySelector('span');
    let expanded = false;
    toggleBtn.addEventListener('click', function() {
      expanded = !expanded;
      toggleText.textContent = expanded ? 'Скрыть' : 'Показать все';
      toggleImg.src = expanded ? expandUpIcon : expandIcon;
      toggleImg.alt = expanded ? 'Стрелка_вверх' : 'Стрелка_вниз';
    });
  }
});