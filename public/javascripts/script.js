$(document).ready(function() {
    $(".nav_button").on("click", function() {
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 
        500);
    });
  });