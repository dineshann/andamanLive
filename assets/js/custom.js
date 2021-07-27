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
    
});
