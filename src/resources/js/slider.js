// ============ Sliders ==============
$(document).ready(function () {
   $('.sliders__order').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      centerMode: false,
      variableWidth: false,
      infinite: false,
      draggable: false,
      swipe: false,
      responsive: [
         {
            breakpoint: 822,
            settings: {
               swipe: true,
            }
         }
      ]
   });
});