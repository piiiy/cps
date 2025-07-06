import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import expandIcon from '../assets/main-icons/expand.svg';
import expandUpIcon from '../assets/main-icons/expandVverh.svg';

//свайпера
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


// Показать все брэнды
const toggleBtn = document.querySelector('.toggle-btn');
const toggleText = toggleBtn.querySelector('.toggle-btn__text');
const grid = document.querySelector('.brands-grid');
const hiddenBrands = document.querySelectorAll('.brand__hidden');

toggleBtn.addEventListener('click', () => {
  grid.classList.toggle('expanded');

  
  hiddenBrands.forEach((brand) => {
    brand.classList.toggle('brand__hidden');
  });

  
  const isExpanded = grid.classList.contains('expanded');
  toggleText.textContent = isExpanded ? 'Скрыть' : 'Показать все';
  toggleBtn.querySelector('img').src = isExpanded ? expandUpIcon : expandIcon;
});

//"Читать далее" услуги
const servicesMoreBtn = document.querySelector('.services__more');
const servicesTextMore = document.querySelector('.services__text-more');
if (servicesMoreBtn && servicesTextMore) {
  const servicesMoreImg = servicesMoreBtn.querySelector('img');
  const servicesMoreText = servicesMoreBtn.querySelector('span');
  let expanded = false;
  servicesMoreBtn.addEventListener('click', () => {
    expanded = !expanded;
    servicesTextMore.classList.toggle('expanded', expanded);
    servicesMoreText.textContent = expanded ? 'Скрыть' : 'Читать далее';
    servicesMoreImg.src = expanded ? expandUpIcon : expandIcon;
    servicesMoreImg.alt = expanded ? 'Стрелка_вверх' : 'Стрелка_вниз';
  }); 
}


// Услуги и сервисы
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.services__scroll-container .services__tab');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      tabButtons.forEach(b => b.classList.remove('services__tab--active'));
      this.classList.add('services__tab--active');
    });
  });
});

