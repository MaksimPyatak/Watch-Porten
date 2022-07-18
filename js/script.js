$(document).ready(function() {
   $('.second_line__burger').click(function(event){
      $('.second_line__burger, .second-line__menu').toggleClass('active');
      $('body').toggleClass('lock');
      $('.header__zero').toggleClass('sheet');
   });
   $('.last_section__about_store__open').click(function(event){
      $('.last_section__about_store__open, ._section').toggleClass('active1');
   });
   $('.last_section__categories__open').click(function(event){
      $('.last_section__categories__open, ._section').toggleClass('active2');
   });
   $('.last_section__newsletter__open').click(function(event){
      $('.last_section__newsletter__open, ._section').toggleClass('active3');
   });
});
