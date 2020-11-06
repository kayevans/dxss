// my namespaces
const dxss = {};

// images
dxss.headerImages = [
    {
        name: 'chair',
        path: 'drew-beamer-Se7vVKzYxTI-unsplash.png'
    },
    {
        name: 'skyline',
        path: 'image00001.png'
    },
    {
        name: 'pipes',
        path: 'image00004.png'
    },
    {
        name: 'hotel',
        path: 'image000011.png'
    },
];

// testimonials
dxss.testimonials = [
    {
        name: "Hugo",
        company: "SPRINT MECHANICAL",
        testimonial: "During our ongoing partnership; DX Systems Solutions Inc. has proven to be very organized with managing projects from conception to completion. I am also impressed with DX Systems Solutions Inc. quality of workmanship and attention to detail."
    },
    {
        name: "Riley",
        company: "Dotfusion",
        testimonial: "Hello during our ongoing partnership; DX Systems Solutions Inc. has proven to be very organized with managing projects from conception to completion. I am also impressed with DX Systems Solutions Inc. quality of workmanship and attention to detail."
    },
    {
        name: "Kay",
        company: "Lorem ipsum",
        testimonial: "Ipsum during our ongoing partnership; DX Systems Solutions Inc. has proven to be very organized with managing projects from conception to completion. I am also impressed with DX Systems Solutions Inc. quality of workmanship and attention to detail."
    },
];

// function to change the background images
dxss.changeImage = function(){
    // create a variable to store current image
    let currentNum = 1;
    // let currentImg = dxss.headerImages[currentNum];

    // use the image to replace background image
    $('.header--home').css('background-image', `linear-gradient(to bottom, rgba(0, 41, 71, 1) 5%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(53, 115, 162, 0.5), rgba(53, 115, 162, 0.5)), url('./assets/${dxss.headerImages[currentNum].path}')`);
    setInterval(function(){
        $('.header--home').css('background-image', `linear-gradient(to bottom, rgba(0, 41, 71, 1) 5%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(53, 115, 162, 0.5), rgba(53, 115, 162, 0.5)), url('./assets/${dxss.headerImages[currentNum].path}')`);
        currentNum === dxss.headerImages.length - 1 ? currentNum = 0 : currentNum++;
    }, 8000);

}

// function to change the testimonial slides
dxss.changeTest = function(){

    // create a variable to store the CURRENT SLIDE
    let currentSlide = Math.floor(Math.random() * dxss.testimonials.length);
    

    // on load show a random testimonial
    let currentTest = dxss.testimonials[currentSlide];

    // change the testimonial to the random testimonial
    $('.testimonial__slide p').text(currentTest.testimonial);
    $('.testimonial__name').text(currentTest.name);
    $('.testimonial__title').text(currentTest.company);

    // on click of the next button go to next test
    $('.testimonial__button--prev').on('click', function(){
        // if the current slide is 0 then go back to length of array
        if(currentSlide === 0){
            currentSlide = dxss.testimonials.length - 1;
        } else {
            currentSlide--;
        }

        // remake current test
        currentTest = dxss.testimonials[currentSlide];

        // change the testimonial to the random testimonial
        $('.testimonial__slide p').animate({'opacity': 0}, 400, function(){
            $('.testimonial__slide p').text(currentTest.testimonial).animate({'opacity': 1}, 400);
        });
        $('.testimonial__name').animate({'opacity': 0}, 400, function(){
            $('.testimonial__name').text(currentTest.name).animate({'opacity': 1}, 400);
        });
        $('.testimonial__title').animate({'opacity': 0}, 400, function(){
            $('.testimonial__title').text(currentTest.company).animate({'opacity': 1}, 400);
        });
    });


    // on click of back button go to last
    $('.testimonial__button--next').on('click', function(){
        // if the current slide is the length of array then go back to length of array
        if(currentSlide === dxss.testimonials.length - 1){
            currentSlide = 0;
        } else {
            currentSlide++;
        }

        // remake current test
        currentTest = dxss.testimonials[currentSlide];

        // change the testimonial to the random testimonial
        $('.testimonial__slide p').animate({'opacity': 0}, 400, function(){
            $('.testimonial__slide p').text(currentTest.testimonial).animate({'opacity': 1}, 400);
        });
        $('.testimonial__name').animate({'opacity': 0}, 400, function(){
            $('.testimonial__name').text(currentTest.name).animate({'opacity': 1}, 400);
        });
        $('.testimonial__title').animate({'opacity': 0}, 400, function(){
            $('.testimonial__title').text(currentTest.company).animate({'opacity': 1}, 400);
        });
    });
};


// my init function
dxss.init = function(){

    // function to show and hide the nav
    $('.button--ham').on('click', function(){
        $('.nav__menu').addClass('open');
        // console.log('clicked')
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
    });

    // call function for testimonials
    dxss.changeTest();

    // call function for background images
    dxss.changeImage();

    // MAP STUFFS
    let map = new mapboxgl.Map({
        container: 'contact__map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-79.701690, 43.761550], // starting position [lng, lat]
        zoom: 15, // starting zoom,
        accessToken: 'pk.eyJ1Ijoia2V2YW5zMTAiLCJhIjoiY2toNXBxMGlhMGpldjJybzh5OHk4eHdoYiJ9.v2pZLmDTI_2yhKl3pApvkg'

    });

    var marker = new mapboxgl.Marker({
        color: '#0086DD',
    }).setLngLat([-79.701690, 43.761550]).addTo(map);

}


// document ready
$(function(){

    // call init function
    dxss.init();

    // call AOS library
    AOS.init();

});