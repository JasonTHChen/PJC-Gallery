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
});
