$(document).ready(function () {



    var ourMstatment = $('.our_mission_statment');

    var ourMstatmentImg = $('.our_mission_statment img');

    var weMakeImg = $('.home_main_content .we_make img');

    var outilImg = $('img.outil_banner');

    var collapsing = $('.navbar-light .navbar-toggler-icon');
    /*****************************************************************/
    /*run preloder page*/
    function counter() {

        var count = setInterval(function () {

            var c = parseInt($('.counter').text());

            $('.counter').text((++c).toString());

            //make the overflow hidden for home bady page
            $('body.home').css('overflow-y', 'hidden');

            //if the text of counter become 100,do the following
            if (c == 100) {

                clearInterval(count);

                //hide the counter when become 100
                $('.counter').addClass('hide');

                //remove the loading word , when preloder page go to top
                $('.preloader').addClass('remove_before');

                //make the preloader go to top
                $('.preloader').addClass('active');


                //wait 7 second to finish the preload and make the home body overflow visisble
                $('body.home').delay(7500).css({
                    'overflow-y': 'visible'
                });

            }

        }, 60)

    }

    counter();

    /*========================================================================================*/

    //change the icon of navbar toggler to close icon
    $('.navbar-toggler').click(function () {

        $('.navbar-toggler-icon i').toggleClass('la-bars la-times');

    });

    // console.log(ourMstatment.offset().top); //537   

    //in order to make the orange drop img scroll up or down to the round border when scroll  
    $(window).on('scroll', function () {

        if ($(window).scrollTop() >= ourMstatment.offset().top - 150) {

            weMakeImg.hide();

            ourMstatmentImg.addClass('showImg');

        } else {

            weMakeImg.show();

            ourMstatmentImg.removeClass('showImg');

        }

    });
    /*========================================================================================*/

    //add outilImg class that fade in right , in 7600 milseconds
    setTimeout(function () {

        outilImg.addClass('shoIm');

    }, 7600);

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > outilImg.height() - 100) {

            outilImg.addClass('hideIm');

        } else {
            outilImg.addClass('shoIm');

            outilImg.removeClass('hideIm');

        }

    });
    /*========================================================================================*/

    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {

        $(this).prev(".card-header").find(".las").addClass("la-minus").removeClass("la-plus");

    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {

        $(this).prev(".card-header").find(".las").removeClass("la-plus").addClass("la-minus");

    }).on('hide.bs.collapse', function () {

        $(this).prev(".card-header").find(".las").removeClass("la-minus").addClass("la-plus");

    });
    /*========================================================================================*/

    // hide the overflow on small device , wehen open the menu
    collapsing.on('click', function () {
        $('body,body.home').toggleClass('overfl'); //body.home
    });

    /*========================================================================================*/

    // map api function
    //        // Initialize and add the map
    //        function initMap() {
    //            // The location of Uluru
    //            const uluru = {
    //                lat: 45.490315,
    //                lng: -75.652079
    //            };
    //            // The map, centered at Uluru
    //            const map = new google.maps.Map(document.getElementById("my_map"), {
    //                zoom: 18,
    //                center: uluru,
    //                // disableDefaultUI: true,
    //                zoomControl: true,
    //                zoomControlOptions: {
    //                    position: google.maps.ControlPosition.RIGHT_CENTER
    //                },  
    //            });
    //            // The marker, positioned at Uluru
    //            const marker = new google.maps.Marker({
    //                position: uluru,
    //                map: map,
    //            });
    //        }
    //    <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3A3aDIat-_XQxXdOPqFg1MtmmfPCmdgE&callback=initMap">
    //    </script>  

}); //end document
