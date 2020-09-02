// mobile menu
$('.header__toggler').click(function(){
    $('.menu').toggleClass('menu--open');
    $(this).toggleClass('header__toggler--open')
})


// menu dropdown
$('.menu__dropdown-heading').click(function(){
    $(this).parent().children('.menu__dropdown-body').toggleClass('menu__dropdown-body--open');
})


// catalog dropdown
$('.catalog__dropdown-heading').click(function(){
    $(this).parent().children('.catalog__dropdown-body').toggleClass('catalog__dropdown-body--open');
    $(this).toggleClass('catalog__dropdown-heading--open');
    // $(this).parent().toggleClass('catalog__dropdown--open');
})

// catalog filter
$('.catalog__mainDrop-heading').click(function(){
    $(this).parent().children('.catalog__mainDrop-body').toggleClass('catalog__mainDrop-body--open');
    $(this).toggleClass('catalog__mainDrop-heading--open');
})


// shopping cart
$('.cart').click(function(){
    $('.bag').addClass('bag--open');
    $('.darkBlock').addClass('darkBlock--open');
    $('.bag__close').click(function(){
        $('.bag').removeClass('bag--open');
        $('.darkBlock').removeClass('darkBlock--open');
    })
});

// slider
$('.slider').slick({
    variableWidth: true,
    arrows: true,
    infinite: false,
    nextArrow: '<a href="javascript://" class="slider__arrow slider__arrow--next"><span class="icon-chevron"></span></a>',
    prevArrow: '<a href="javascript://" class="slider__arrow slider__arrow--prev"><span class="icon-chevron"></span></a>',
    appendArrows: $('.slider__arrows'),
    responsive: [
        {
            breakpoint: 530,
            settings: {
                arrows: false,
                
            }
        }
    ]
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
$(window).on("scroll", function() {
    $('.header--nobg').toggleClass("header--dark", $(this).scrollTop() > 100);
    // $('.header').toggleClass("header--nobg", $(this).scrollTop() > 100);
  });






// answer
$('.answers__plus').click(function(){
    $('.answers__item').toggleClass('answers__item--active')
})



var slider = document.querySelector('.catalog__dropdown-range');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
