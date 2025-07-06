import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const priceSlider = new Swiper('.price__slider', {
  modules: [Pagination],
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetBefore: 8,
  slidesOffsetAfter: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function checkPriceScreenSize() {
  const priceSliderBlock = document.querySelector('.price__slider');
  const priceTable = document.querySelector('.price-table');
  if (window.innerWidth >= 768) {
    if (priceSliderBlock) priceSliderBlock.style.display = 'none';
    if (priceTable) priceTable.style.display = 'block';
  } else {
    if (priceSliderBlock) priceSliderBlock.style.display = '';
    if (priceTable) priceTable.style.display = 'none';
  }
}

window.addEventListener('resize', checkPriceScreenSize);
document.addEventListener('DOMContentLoaded', checkPriceScreenSize);


