jQuery(function($) {
    if ($(window).width() <= 767) {
        // Footer dropdown menu
        $('.menu-title').on('click', function () {
            $(this).toggleClass('item-open');
            $(this).siblings('.footer-menu-list').slideToggle(400);
            $('.menu-title').not(this).siblings('.footer-menu-list').slideUp(400);
        });

        // Header dropdown menu
        $('body').on('click', '.navicon', function (e) {
            e.preventDefault();
            $(this).toggleClass('open');
            $('.subcat').slideUp();
            $('.nav-mobile').removeClass('open');
            $('.main-menu').fadeToggle(400);
            $('body').toggleClass('nav-opened');
        });

        $('.main-menu .parent').append('<span class="nav-mobile"></span>');

        $('.nav-mobile').on('click', function () {
            $(this).toggleClass('open');
            $(this).siblings('.subcat').slideToggle(400);
            $('.nav-mobile').not(this).siblings('.subcat').slideUp(400);
            $('.nav-mobile').not(this).removeClass('open');
        });


        // Hiding top header messsage
        $('.top-line-header .icon-close').on('click', function () {
            $('.top-line-header').slideUp(400);
        });


        // Fixed menu
        var menuOffset = $('.sections').offset().top;

        $(window).scroll(function () {
            if ($(window).scrollTop() > menuOffset) {
                $('.hero, .sections').addClass('fixed');
            } else {
                $('.hero, .sections').removeClass('fixed');
            }
        });
    } else {
        var menuOffset = $('.sections').offset().top - 28;

        $(window).scroll(function () {
            if ($(window).scrollTop() > menuOffset) {
                $('.hero, .page-header').addClass('fixed');
            } else {
                $('.hero, .page-header').removeClass('fixed');
            }
        });
    }

    $('.level0.parent > a').on('touchstart click', function(e){
        e.preventDefault();
    });
    $('.color-element').click(
        function(){
            $('.color-element').removeClass('borders_act');
            $(this).addClass('borders_act') }

    );
});
$('.block-select select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});
$(document).ready(function() {
    $('select').wSelect();
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
    $('.btn-product').click(function(){
        $(".zoom_mw").elevateZoom({scrollZoom : true});
        $( '#example5' ).sliderPro({
            autoplay: false,
            width: 612,
            height: 650,
            orientation: 'vertical',
            loop: false,
            arrows: false,
            buttons: false,
            thumbnailsPosition: 'left',
            thumbnailPointer: true,
            thumbnailWidth: 80,
            breakpoints: {
                800: {
                    thumbnailsPosition: 'bottom',
                    thumbnailWidth: 270,
                    thumbnailHeight: 100
                },
                500: {
                    thumbnailsPosition: 'bottom',
                    thumbnailWidth: 120,
                    thumbnailHeight: 50
                }
            }
        });
    });
});