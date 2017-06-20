$(document).ready(function() {
  if ($(window).scrollTop() > 100) {
    $(".fixed-nav").fadeIn("slow");
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".fixed-nav").fadeIn("slow");
      $(".navbar-collapse").collapse("hide");
    } else {
      $('.fixed-nav').fadeOut(500);
    }
  });

  $(function() {
    $(document).on('click', '.scroll', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1200, 'easeInOutExpo');
      event.preventDefault();
    });
  });
});
