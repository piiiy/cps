import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import expandIcon from '../assets/main-icons/expand.svg';
import expandUpIcon from '../assets/main-icons/expandVverh.svg';

// Инициализация свайпера
const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 'auto',
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// Показать все/Скрыть
const toggleBtn = document.querySelector('.toggle-btn');
const toggleText = toggleBtn.querySelector('.toggle-btn__text');
const grid = document.querySelector('.brands-grid');
const hiddenBrands = document.querySelectorAll('.brand__hidden');

toggleBtn.addEventListener('click', () => {
  grid.classList.toggle('expanded');

  // Переключение скрытых элементов
  hiddenBrands.forEach((brand) => {
    brand.classList.toggle('brand__hidden');
  });

  // текст кнопки
  const isExpanded = grid.classList.contains('expanded');
  toggleText.textContent = isExpanded ? 'Скрыть' : 'Показать все';
  toggleBtn.querySelector('img').src = isExpanded ? expandUpIcon : expandIcon;
});

