jQuery(function ($) {

    $('.tips-slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".items-wrapper .all-catalog_product-scroll").mCustomScrollbar({
        theme:"dark-thick"
    });

    if ($(window).width() <= 767) {
        //$('.my-account_menu li.left_menu-item a.item').click(function () {
        //    $('.my-account_menu li.left_menu-item a.item').addClass('item-hide');
        //    $(this).addClass('active');
        //});
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
            if ($(window).scrollTop() > menuOffset) {
                $('.block_mini-cart').addClass('fixed-cart');
            } else {
                $('.block_mini-cart').removeClass('fixed-cart');
            }
            if ($(window).scrollTop() > menuOffset) {
                $('.block_mini-log').addClass('fixed-login');
            } else {
                $('.block_mini-log').removeClass('fixed-login');
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
            if ($(window).scrollTop() > menuOffset) {
                $('.block_mini-cart').addClass('fixed-cart');
            } else {
                $('.block_mini-cart').removeClass('fixed-cart');
            }
            if ($(window).scrollTop() > menuOffset) {
                $('.block_mini-log').addClass('fixed-login');
            } else {
                $('.block_mini-log').removeClass('fixed-login');
            }
        });
    }
    $(".img-trish_1").clone().insertAfter(".meet-element_1 .meet_left .headline");
    $(".meet-element_2 .meet-right .headline, .meet-element_2 .meet-right .meet-text").clone().insertAfter(".meet-element_2 .meet_left .img-trish_2");
    $(".meet-element_2 .meet_left .disabled_text, .meet-element_2 .meet_left .disabled_text").clone().insertAfter(".meet-element_2 .meet-right .book-trish");
    $('.level0.parent > a').on('touchstart click', function (e) {
        e.preventDefault();
    });
    $('.color-element').click(
        function () {
            $('.color-element').removeClass('borders_act');
            $(this).addClass('borders_act')
        }
    );
});
$('.block-select select').each(function () {
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

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});
$(document).ready(function () {
    $('select').wSelect();
    $('.popup-with-form, .select-log').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            },
            close: function () {

                $('.zoomContainer').remove();

            }
        }
    });
    //$(".zoom_mw2").elevateZoom({scrollZoom : true});
    $('.example6').sliderPro({
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
            1253: {
                width: 500,
                height: 650
            },
            1106: {
                width: 400,
                height: 550
            },
            1000: {
                width: 300,
                height: 450
            },
            920: {
                width: 200,
                height: 350
            },
            480: {
                width: 200,
                height: 350,
                orientation: 'bottom',
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 8,
                thumbnailHeight: 8
            }
        }
    });
    $('.btn-product').click(function () {
        //$(".zoom_mw").elevateZoom({scrollZoom : true});
        $('.example5').sliderPro({
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
                1253: {
                    width: 500,
                    height: 650
                },
                1106: {
                    width: 400,
                    height: 550
                },
                1000: {
                    width: 300,
                    height: 450
                },
                920: {
                    width: 200,
                    height: 350
                },
                480: {
                    width: 200,
                    height: 350,
                    orientation: 'bottom',
                    thumbnailsPosition: 'bottom',
                    thumbnailWidth: 8,
                    thumbnailHeight: 8
                }
            }
        });
    });
    $('.mobile-preview').click(function () {
        $(this).toggleClass('mobile-preview_bg');
        $(this).next().next().toggleClass('mobile-preview_act');
        $(this).siblings('.product-text').toggleClass('product-text_act');
    });
    $('.brn-mobile_ing').click(function () {
        $('.wrap-ingredients ').stop().slideToggle();
        $('.brn-mobile_ing div img').toggleClass('m-r');
    });
    $('.search').click(function () {
        $('.search-visible').stop().slideToggle()
    });
    $('.cart').click(function () {
        $('.block_mini-cart').toggle();
    });
    $('.login').click(function () {
        $('.block_mini-log').toggle();
    });
    $('.checkout-select_btn').click(function () {
        $(this).next().stop().slideToggle();
    });
    $(".input-effect_focus input").val("");

    $(".input-effect input").focusout(function () {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    });
    var $columns_number = $('#cd-table .cd-table-container').find('.cd-table-column').length;

    $('.cd-table-container').on('scroll', function () {
        $this = $(this);
        //hide the arrow on scrolling
        if ($this.scrollLeft() > 0) {
            $('.cd-scroll-right').hide();
        }
        //remove color gradient when table has scrolled to the end
        var total_table_width = parseInt($('.cd-table-wrapper').css('width').replace('px', '')),
            table_viewport = parseInt($('#cd-table').css('width').replace('px', ''));

        if ($this.scrollLeft() >= total_table_width - table_viewport - $columns_number) {
            $('#cd-table').addClass('table-end');
        } else {
            $('#cd-table').removeClass('table-end');
        }
    });

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('.left_menu-item').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    });
    function hideMobile() {
        if ($(window).width() <= 767) {
            $('.left_menu-item .item').removeClass('active');
            $('.tabgroup > div').hide();
            $('.left_menu-item .item').click(function () {
                $(this).closest('.left_menu-item').siblings().hide();
            });
            $('.left_menu-item .arrow-back').click(function (e) {
                e.stopPropagation();
                $('.tabgroup > div').hide();
                $(this).parent().removeClass('active').closest('.left_menu-item').siblings().show();

            });
        }
    }

    $(window).resize(function () {
        hideMobile();
    }).resize();
    //hideMobile();
});