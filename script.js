function setupGallerySlider() {
    if ($(window).width() < 992) {
        if (!$('.mushroom-gallery').hasClass('slick-initialized')) {
            $('.mushroom-gallery').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                arrows: true,
                infinite: true,
                centerMode: true,
                centerPadding: '0px',
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                            centerMode: false,
                            centerPadding: '0px'
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '0px'
                        }
                    }
                ]
            });
        }
    } else {
        if ($('.mushroom-gallery').hasClass('slick-initialized')) {
            $('.mushroom-gallery').slick('unslick');
        }
    }
}

$(document).ready(function () {
    setupGallerySlider();
    $(window).on('resize', function () {
        setupGallerySlider();
    });
    
    $('.customer-reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        infinite: true
    });
});