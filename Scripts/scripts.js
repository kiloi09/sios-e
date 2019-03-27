$(document).ready(function() {

                // Sticky Nav
  $('.js--section-about').waypoint(function(direction){
      if(direction == "down"){
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
  },{ offset:'60px;'
  });


          // Sliding to div
$('.js--scroll-features').click(function(){
      $('html, body').animate(
        {scrollTop: $('.js--section-features').offset().top},1000);
  });
$('.js--scroll-about').click(function(){
  $('html, body').animate(
    {scrollTop: $('.js--section-about').offset().top},1000);
});

$('.js--scroll-app').click(function(){
  $('html,body').animate(
    {scrollTop: $('.js--section-app').offset().top},1000);
});
$('.js--scroll-contact').click(function(){

    $('body,html').animate(
      {scrollTop: $('.js--section-contact').offset().top},1000);
});

// Animation on App

$('.js--section-app').waypoint(function(direction){
  $('.js--section-app').addClass('app-image-animaton');
},{offset: '70px;'
});













});
