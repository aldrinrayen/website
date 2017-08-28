$(window).scroll(function() {
    if($(this).scrollTop()>5) {
        $( ".navbar-me" ).addClass("fixed-me");
    } else {
        $( ".navbar-me" ).removeClass("fixed-me");
    }
});


jQuery(function($){
    
    var demo = {
        init : function(){
            this.carouselControls();
            
            $(window).resize(function(){ demo.carouselControls(); });
        },
        carouselControls : function(){
            var $container = $('#main');
            var $slider = $('#carousel-example-generic');
            var padding = 15;

            var rt = ($(window).width() - ($container.offset().left + $container.outerWidth()));
            $slider.find('.right.carousel-control').css('right', rt + padding).show();            
            $slider.find('.left.carousel-control').css('left', rt + padding).show();
        }
    };
    
    demo.init();
   
});

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});




