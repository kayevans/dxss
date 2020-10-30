// my namespaces
const dxss = {};


// my init function
dxss.init = function(){

    // function to show and hide the nav
    $('.button--ham').on('click', function(){
        $('.nav__menu').addClass('open');
    })

    $('.button--cross').on('click', function(){
        $('.nav__menu').removeClass('open');
    })

    // add class to add background colour to nav
    $(window).scroll(function(){
        if( $(this).scrollTop() >= 86){
            $('.nav').addClass('white');
            $('.nav .wrapper > .logo img').attr('src', './assets/logo-dark.png');
            $('.nav--mobile .button--ham img').attr('src', './assets/ham--blue.svg');
            $('.nav__menu .nav__links').addClass('scrollin');
            $('.button--call').addClass('scrollin');
        } else {
            $('.nav').removeClass('white');
            $('.nav .wrapper > .logo img').attr('src', './assets/logo-light.png');
            $('.nav--mobile .button--ham img').attr('src', './assets/ham.svg');
            $('.nav__menu .nav__links').removeClass('scrollin');
            $('.button--call').removeClass('scrollin');
        }
    })
}


// document ready
$(function(){

    // call init function
    dxss.init();

});