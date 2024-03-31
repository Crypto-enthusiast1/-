document.addEventListener('DOMContentLoaded', function () {
   $(document).ready(function () {
      $('.carousel__inner').slick({
         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png" alt="arrow"></button>',
         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_rigth.png" alt="arrow"></button>',
         responsive: [
            {
               breakpoint: 992,
               settings: {
                  arrows: false,
                  dots: true,
               },

            },
         ]
      });
   });

   const btnMoreInfo = document.querySelectorAll('.item__link');
   const btnGetBack = document.querySelectorAll('.link-back');
   const catalogContent = document.querySelectorAll('.catalog-item__content');
   const catalogInfo = document.querySelectorAll('.catalog-item__info');

   function showInfoHideInfo() {

      for (let i = 0; i < btnMoreInfo.length; i++) {

         btnMoreInfo[i].addEventListener('click', (e) => {// Показ дополнительной инфы в карточке
            e.preventDefault();
            for (let k = 0; k < btnMoreInfo.length; k++) {
               catalogInfo[k].classList.remove('catalog-item__info-active');
               catalogContent[k].classList.add('catalog-item__content-active');
            }

            if (catalogContent[i].contains(e.target)) {
               catalogContent[i].classList.remove('catalog-item__content-active');
               catalogInfo[i].classList.add('catalog-item__info-active');
            }
         });

         btnGetBack[i].addEventListener('click', (e) => {// Скрытие доп. информции
            e.preventDefault();
            for (let k = 0; k < btnMoreInfo.length; k++) {
               catalogInfo[k].classList.remove('catalog-item__info-active');
               catalogContent[k].classList.add('catalog-item__content-active');
            }
            if (catalogInfo[i].contains(e.target)) {
               catalogContent[i].classList.add('catalog-item__content-active');
               catalogInfo[i].classList.remove('catalog-item__info-active');
            }
         });
      }
   }

   showInfoHideInfo()

   const allBtnOfCategory = document.querySelectorAll('.catalog__btn, .dropdown-item');
   const allCatalogItems = document.querySelectorAll('.catalog__item');

   function sortCategory() {
      for (let g = 0; g < allBtnOfCategory.length; g++) {

         allBtnOfCategory[g].addEventListener('click', (e) => {
            console.log(e.target)
            for (let g = 0; g < allBtnOfCategory.length; g++) {//Меняем класс активности у кнопок категорий
               allBtnOfCategory[g].classList.remove('active-btn');

               if (allBtnOfCategory[g].contains(e.target)) {
                  allBtnOfCategory[g].classList.add('active-btn');
               }
            }

            if (e.target.parentNode.classList.contains('run__btn') || e.target.classList.contains('run__btn')) {// Сортировка карточек по категории run
               for (let i = 0; i < allCatalogItems.length; i++) {
                  allCatalogItems[i].style.display = 'none';
                  if (allCatalogItems[i].getAttribute('data-category') === 'run') {
                     allCatalogItems[i].style.display = 'block';
                  }
               }

            } else if (e.target.parentNode.classList.contains('fitnes__btn') || e.target.classList.contains('fitnes__btn')) {// Сортировка карточек по категории fitnes
               for (let i = 0; i < allCatalogItems.length; i++) {
                  allCatalogItems[i].style.display = 'none';
                  if (allCatalogItems[i].getAttribute('data-category') === 'fitnes') {
                     allCatalogItems[i].style.display = 'block';
                  }
               }

            } else if (e.target.parentNode.classList.contains('triatlon__btn') || e.target.classList.contains('triatlon__btn')) {// Сортировка карточек по категории triatlon
               for (let i = 0; i < allCatalogItems.length; i++) {
                  allCatalogItems[i].style.display = 'none';
                  if (allCatalogItems[i].getAttribute('data-category') === 'triatlon') {
                     allCatalogItems[i].style.display = 'block';
                  }
               }
            } else if (e.target.parentNode.classList.contains('all__btn')) {// Показ карточек всех категорий
               for (let i = 0; i < allCatalogItems.length; i++) {
                  allCatalogItems[i].style.display = 'block';
               }
            }
         });
      };
   }

   sortCategory();










});
