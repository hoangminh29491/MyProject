$(document).ready(function(){
	$('.owlcarousel').owlCarousel({
        items:2,
        loop:true,
        margin:0,
        nav: true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,loop:true
            },
            600:{
                items:2,loop:true
            },
            1000:{
                items:2,loop:true
            }
        }
    });

	$(window).on('load', function() {
		$('#slider').nivoSlider(); 
	}); 

	body = document.getElementsByTagName("body")[0];  
    $('body').niceScroll({cursoropacitymax:0.8,cursorwidth:8});
});