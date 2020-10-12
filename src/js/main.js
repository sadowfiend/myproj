$(document).ready(function () {
    $("#slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false
    });
    var owl = $('#slider');
    owl.owlCarousel();
// Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    //scroll up
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(".btn-up").fadeIn();
        } else {
            $(".btn-up").fadeOut()
        }
    })
});