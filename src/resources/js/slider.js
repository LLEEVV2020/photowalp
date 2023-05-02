
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
      // responsive: [
      //    {
      //       breakpoint: 1024,
      //       settings: {
      //          slidesToShow: 3,
      //          slidesToScroll: 1,
      //          infinite: true,
      //          dots: false
      //       }
      //    },
      //    {
      //       breakpoint: 600,
      //       settings: {
      //          slidesToShow: 2,
      //          slidesToScroll: 2
      //       }
      //    },
      //    {
      //       breakpoint: 480,
      //       settings: {
      //          slidesToShow: 1,
      //          slidesToScroll: 1
      //       }
      //    }
      // ]
   });
});