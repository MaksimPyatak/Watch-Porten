$(document).ready(function() {
   $('.second_line__burger').click(function(event){
      $('.second_line__burger, .second-line__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});