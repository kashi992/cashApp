

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
        'US': 'https://glstrck.com/aff_c?offer_id=1163&aff_id=11492&source=cash+app+organic', // URL for users in the USA
        'GB': 'https://glstrck.com/aff_c?offer_id=1145&aff_id=11492', // URL for users in the UK
        'CA': 'https://glstrck.com/aff_c?offer_id=1017&aff_id=11492', // URL for users in Canada
        'AU': 'https://glstrck.com/aff_c?offer_id=1145&aff_id=11492' // URL for users in Australia
    };

    // Default URL for users in countries not listed above
    const fallbackUrl = 'https://codeunlocked.vip/cl/i/wol712';

    // Function to get the user's country and determine the redirect URL
    function getRedirectUrl(callback) {
        $.ajax({
            url: 'https://ipinfo.io/json?token=5758f9a74a20ff', // Replace with your actual token
            dataType: 'json',
            success: function (data) {
                const country = data.country;
                const redirectUrl = geoRedirectUrls[country] || fallbackUrl;
                console.log("Determined redirect URL:", redirectUrl); // Log the URL
                callback(redirectUrl); // Pass the redirect URL to the callback function
            },
            error: function () {
                console.error("Geolocation error");
                console.log("Redirecting to fallback URL:", fallbackUrl);
                callback(fallbackUrl); // Use fallback URL in case of an error
            }
        });
    }

    // Attach the geo-redirect function to buttons with the class "geoRedirectButton"
    $(document).on('click', '.geoRedirectButton', function () {
        getRedirectUrl(function (redirectUrl) {
            if (redirectUrl !== '#') {
                // Use window.location.href to ensure compatibility with Safari
                setTimeout(function () {
                    window.location.href = redirectUrl;
                }, 100); // Small delay to ensure the click event is completed
            } else {
                console.log("No valid redirect URL found");
            }
        });
    });

    // geo script end

});

