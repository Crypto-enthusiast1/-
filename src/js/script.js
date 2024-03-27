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