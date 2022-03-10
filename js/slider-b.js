
jQuery(function(){
  jQuery('.slider').slick({
      centerMode: true,
      centerPadding: '5%',
      dots: true,
      dotsClass: 'slide-dots',
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      infinite: true,
      variableWidth: true,
      arrows: true,
  });


$(document).on('ready', function() {
    $(".full-screen").slick({
    });
  });
});