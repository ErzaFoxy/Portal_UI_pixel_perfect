$(document).ready(function() {
    $("[data-tooltip]").mousemove(function(eventObject) {

        $data_tooltip = $(this).attr("data-tooltip");

        $("#tooltip").text($data_tooltip)
            .show();

    }).mouseout(function() {

        $("#tooltip").hide()
            .text("")
    });

    $("[data-tooltip]").mousemove(function(eventObject) {

        $data_tooltip = $(this).attr("data-tooltip");

        $("#tooltip_2").text($data_tooltip)
            .show();

    }).mouseout(function() {

        $("#tooltip_2").hide()
            .text("")
    });

    $('ul.main-img__list').on('click', 'li:not(.main-img__active)', function() {
        $(this)
            .addClass('main-img__active').siblings().removeClass('main-img__active')
            .closest('div.container').find('img.main-img__icon').removeClass('main-img__icon_active').eq($(this).index()).addClass('main-img__icon_active');
    });

    $('ul.projects__tabs').on('click', 'li:not(.projects__tab_active)', function() {
        $(this)
            .addClass('projects__tab_active').siblings().removeClass('projects__tab_active')
            .closest('div.container').find('div.projects__wrap').removeClass('projects__wrap_active').eq($(this).index()).addClass('projects__wrap_active');
    });


    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/next.png" class="main-img__back_next" alt="next"></button>',
        nextArrow: '<button class="slick-next slick-none"></button>'
    });
});