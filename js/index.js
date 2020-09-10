// mobile menu
$('.header__toggler').click(function () {
    $('.menu').toggleClass('menu--open');
    $(this).toggleClass('header__toggler--open')
})


// menu dropdown
$('.menu__dropdown-heading').click(function () {
    $(this).parent().children('.menu__dropdown-body').toggleClass('menu__dropdown-body--open');
})


// catalog dropdown
$('.catalog__dropdown-heading').click(function () {
    $(this).parent().children('.catalog__dropdown-body').toggleClass('catalog__dropdown-body--open');
    $(this).toggleClass('catalog__dropdown-heading--open');
    // $(this).parent().toggleClass('catalog__dropdown--open');
})

// catalog filter
$('.catalog__mainDrop-heading').click(function () {
    $(this).parent().children('.catalog__mainDrop-body').toggleClass('catalog__mainDrop-body--open');
    $(this).toggleClass('catalog__mainDrop-heading--open');
})


// shopping cart
$('.cart').click(function () {
    $('.bag').addClass('bag--open');
    $('.darkBlock').addClass('darkBlock--open');
    $('.bag__close').click(function () {
        $('.bag').removeClass('bag--open');
        $('.darkBlock').removeClass('darkBlock--open');
    })
});

// slider1
$('.slider1').slick({
    variableWidth: true,
    arrows: true,
    infinite: false,
    nextArrow: '<a href="javascript://" class="slider__arrow slider__arrow--next"><span class="icon-chevron"></span></a>',
    prevArrow: '<a href="javascript://" class="slider__arrow slider__arrow--prev"><span class="icon-chevron"></span></a>',
    appendArrows: $('.slider1__arrows'),
    responsive: [{
        breakpoint: 530,
        settings: {
            arrows: false,

        }
    }]
});


// scroll
$('.scrollbar-inner').scrollbar();

// slider2
$('.slider2').slick({
    variableWidth: true,
    arrows: true,
    infinite: false,
    nextArrow: '<a href="javascript://" class="slider__arrow slider__arrow--next"><span class="icon-chevron"></span></a>',
    prevArrow: '<a href="javascript://" class="slider__arrow slider__arrow--prev"><span class="icon-chevron"></span></a>',
    appendArrows: $('.slider2__arrows'),
    responsive: [{
        breakpoint: 530,
        settings: {
            arrows: false,

        }
    }]
});

// newsSlider
$('.newsSlider__body').slick({
    slidesToShow: 3,
    nextArrow: '<a href="javascript://" class="slider__arrow slider__arrow--next"><span class="icon-chevron"></span></a>',
    prevArrow: '<a href="javascript://" class="slider__arrow slider__arrow--next"><span class="icon-chevron"></span></a>',
    appendArrows: $('.newsSlider__arrows'),
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
            }
        },
    ]

})

// header
$(window).on("scroll", function () {
    $('.header--nobg').toggleClass("header--dark", $(this).scrollTop() > 100);
    // $('.header').toggleClass("header--nobg", $(this).scrollTop() > 100);
});


// product page slider
$('.imgSlider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.imgSlider__nav',
    nextArrow: '<div class="imgSlider__for-arrow imgSlider__for-arrow--next"><span class="icon-chevron"></span></div>',
    prevArrow: '<div class="imgSlider__for-arrow imgSlider__for-arrow--prev"><span class="icon-chevron"></span></div>'
});

$('.imgSlider__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.imgSlider__for',
    // dots: true,
    focusOnSelect: true,
    arrows: false,
    // infinite: true,
    // variableWidth: true,
    infinite: false,
    // centerMode: true,
});

// tabs
$('.tabs').tabs()


// product-slider
$('.product-slider__slider').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: 0,
    infinite: false,
    nextArrow: '<a href="javascript://" class="slider__arrow slider__arrow--next"><span class="icon-chevron"></span></a>',
    prevArrow: '<a href="javascript://" class="slider__arrow slider__arrow--next"><span class="icon-chevron"></span></a>',
    appendArrows: $('.product-slider__arrows'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
            }
        }
    ]
})


// answer
$('.answers__plus').click(function () {
    $('.answers__item').toggleClass('answers__item--active')
})

$('.history__dropHead').click(function () {
    $(this).parent().children('.history__dropBody').toggleClass('history__dropBody--open')
    $(this).toggleClass('history__dropHead--open')
})


var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});



var slider = document.querySelector('.catalog__dropdown-range');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});



function searchPop(){
    $('.searchPop').fadeIn(function(){
        $('.searchPop__close').click(function(){
            $('.searchPop').fadeOut()
        })
    })
}



// popups
function popupOpen() {
    $('.darkBlock').addClass('darkBlock--open');

    $('body').addClass('body--fixed')
    $('.popups').show(function () {
        $('.registration').addClass('popup--show');
        $('.popup__close').click(function () {
            $('.darkBlock').removeClass('darkBlock--open');
            $('body').removeClass('body--fixed')
            $('.popup').removeClass('popup--show');
            $('.popups').hide();
        });
    });

}

function popupLogin() {
    $('.registration').removeClass('popup--show');
    $('.login').addClass('popup--show');
}

function popupPassword() {
    $('.login').removeClass('popup--show');
    $('.password').addClass('popup--show');
}

function popupRegister() {
    $('.login').removeClass('popup--show');
    $('.registration').addClass('popup--show');
}




