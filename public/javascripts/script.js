$(document).on('click', 'a', function(event) {
    event.preventDefault(); // default action will not be triggered

    // new functionality
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});