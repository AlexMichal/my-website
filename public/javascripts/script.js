$(document).ready(function() {
    $(".nav_buttons").on("click", function() {
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    });
  });