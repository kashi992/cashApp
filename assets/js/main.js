

$(document).ready(function () {
    // testimonail slick start 
    $('.tesimonialSlick').slick({
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        swipe: true,
        swipeToSlide: true,
        dots: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // testimonail slick end
});

