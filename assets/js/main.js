jQuery(function($) {
    if ( $(window).width() <= 768 ) {
    	// Footer dropdown menu
        $('.menu-title').on('click', function () {
            $(this).toggleClass('item-open');
            $(this).siblings('.footer-menu-list').slideToggle(400);
            $('.menu-title').not(this).siblings('.footer-menu-list').slideUp(400);
        });


		// Header dropdown menu
       $('#nav-icon').on('click', function() {
            $(this).toggleClass('open');
            $('.subcat').slideUp();
           $('.nav-mobile').removeClass('open');
            $('.main-menu').fadeToggle(400);

            $('body').toggleClass('nav-opened');
        });

        $('.main-menu .parent').append('<span class="nav-mobile"></span>');

        $('.nav-mobile').on('click', function() {
            $(this).toggleClass('open');
            $(this).siblings('.subcat').slideToggle(400);
            $('.nav-mobile').not(this).siblings('.subcat').slideUp(400);
            $('.nav-mobile').not(this).removeClass('open');
        });


        // Hiding top header messsage
        $('.top-line-header .icon-close').on('click', function() {
            $('.top-line-header').slideUp(400);
        });


        // Fixed menu
        var menuOffset = $('.sections').offset().top;

        $(window).scroll(function() {
        	if ( $(window).scrollTop() > menuOffset ) {
        		$('.hero, .sections').addClass('fixed');
        	} else {
        		$('.hero, .sections').removeClass('fixed');
        	}
        })
    } else {
        var menuOffset = $('.sections').offset().top - 28;

        $(window).scroll(function() {
            if ( $(window).scrollTop() > menuOffset ) {
                $('.hero, .page-header').addClass('fixed');
            } else {
                $('.hero, .page-header').removeClass('fixed');
            }
        })
    }
});