$(document).ready(function(){
    "use strict";

	//Preloader
	$(window).on('load', function (e) { 
		$(".loadersec").fadeOut();
		$(".loader").delay(500).fadeOut("slow"); 
    })
    
    // Sidebar Menu
    $('#menu-toggle').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
    });
    $(window).resize(function(e) {
        if($(window).width()<=768){
            $("#wrapper").removeClass("toggled");
        }else{
            $("#wrapper").addClass("toggled");
        }
    });

    // Captured Date
    $("#captured").owlCarousel({
        items: 8,
        loop: !1,
        margin: 0,
        nav: !0,
        navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
        dots: !1,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 8
            }
        }
    });

    // # 
    // try {
    //     let mainlink = localStorage.getItem('mainlink');
    // if (mainlink) {

    //     switch (mainlink) {
    //         case 'intro':
    //             $('html, body').animate({
    //                 scrollTop: $('#socialMedia').offset().top
    //             }, 'slow');
    //             break;
             
            
    //     }
    // }
    // } catch (e) {

    // }
    
});
