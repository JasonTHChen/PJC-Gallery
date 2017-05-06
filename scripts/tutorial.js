/* jQuery functions */
$(document).ready(function() {
    $("#banner-text p").delay(500).animate({"opacity": "1"}, 700);
    $("#banner-text h1").delay(250).animate({"opacity": "1"}, 700);
});

/* original javascript */
function textChange() {
  document.getElementById("paragraph").innerHTML = "Hello World";
}
