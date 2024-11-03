

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

    // geo script start
    // Define the redirection URLs for each country
    const geoRedirectUrls = {
        'US': 'https://rewarrdsgiant.com/aff_c?offer_id=1163&aff_id=11492', // URL for users in the USA
        'GB': 'https://rewarrdsgiant.com/aff_c?offer_id=1017&aff_id=11492', // URL for users in the UK
        'CA': 'https://rewarrdsgiant.com/aff_c?offer_id=1017&aff_id=11492', // URL for users in Canada
        'AU': 'https://rewarrdsgiant.com/aff_c?offer_id=74&aff_id=11492' // URL for users in Australia
    };

    // Default URL for users in countries not listed above
    const fallbackUrl = '#';

    // Function to get the user's country and redirect
    function getLocationAndRedirect() {
        $.ajax({
            url: 'https://ipinfo.io/json?token=5758f9a74a20ff', // Replace with your actual token
            dataType: 'json',
            success: function (data) {
                const country = data.country;
                const redirectUrl = geoRedirectUrls[country] || fallbackUrl;
                console.log("Redirecting to:", redirectUrl); // Log the URL
                if (redirectUrl !== '#') { // Ensure it only redirects to valid URLs
                    window.open(redirectUrl, '_blank');
                }
            },
            error: function () {
                console.error("Geolocation error");
                console.log("Redirecting to fallback URL:", fallbackUrl);
            }
        });
    }

    // Attach the geo-redirect function to buttons with the class "geoRedirectButton"
    $(document).on('click', '.geoRedirectButton', function () {
        getLocationAndRedirect();
    });

    // geo script end
});

