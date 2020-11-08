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

// images for mob
dxss.mobImages = [
    {
        name: 'chair',
        path: 'room-mob.png'
    },
    {
        name: 'skyline',
        path: 'skyline-mob.png'
    },
    {
        name: 'pipes',
        path: 'basement-mob.png'
    },
    {
        name: 'hotel',
        path: 'hotel-mob.png'
    },
]

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

// funciton to show the galleries
dxss.showGallery = function(){
    // take buttons and on click open gallery
    $('.projects__project > button').on('click', function(){
        $(this).closest('.projects__project').children('.projects__gallery').addClass('open-gallery');
    })

    // control button to close
    $('.close-gallery').on('click', function(){
        $(this).closest('.projects__project').children('.projects__gallery').removeClass('open-gallery');
    })
}

// function to change the background images
dxss.changeImage = function(){
    // create a variable to store current image
    let currentNum = 1;
    // use the image to replace background image
    $('.header--home').css('background-image', `linear-gradient(to bottom, rgba(0, 41, 71, 1) 5%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(53, 115, 162, 0.5), rgba(53, 115, 162, 0.5)), url('./assets/${$(window).width() <= 768 ? dxss.mobImages[currentNum].path : dxss.headerImages[currentNum].path}')`);
    setInterval(function(){
        // if($('.header--home').hasClass('animated')){
        //     $('.header--home').removeClass('animated');
        // } else{
        //     $('.header--home').addClass('animated');
        // }
        // $('.header--home').removeClass('animated');
        $('.header--home').css('background-image', `linear-gradient(to bottom, rgba(0, 41, 71, 1) 5%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(53, 115, 162, 0.5), rgba(53, 115, 162, 0.5)), url('./assets/${$(window).width() <= 768 ? dxss.mobImages[currentNum].path : dxss.headerImages[currentNum].path}')`);
        currentNum === dxss.headerImages.length - 1 ? currentNum = 0 : currentNum++;
        // $('.header--home').addClass('animated');
        // setTimeout(function () { 
        //     $('.header--home').removeClass('animated');
        // }, 8000);
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
    // if contact page run following code 
    if($('body').hasClass('contact-page')){
        let map = new mapboxgl.Map({
            container: 'contact__map',
            style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
            center: [-79.701690, 43.761550], // starting position [lng, lat]
            zoom: 15, // starting zoom,
            accessToken: 'pk.eyJ1Ijoia2V2YW5zMTAiLCJhIjoiY2toNXBxMGlhMGpldjJybzh5OHk4eHdoYiJ9.v2pZLmDTI_2yhKl3pApvkg'
    
        });
        let marker = new mapboxgl.Marker({
            color: '#0086DD',
        }).setLngLat([-79.701690, 43.761550]).addTo(map);
    }

    // SLIDERS 
    // if projects page run code
    if($('body').hasClass('projects-page')){
        // call function to show and hide projects
        dxss.showGallery();
        
        const swiperOne = new Swiper('#swiper-one', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-one',
                prevEl: '#swiper-button-prev-one',
            },
        })

        const swiperTwo = new Swiper('#swiper-two', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-two',
                prevEl: '#swiper-button-prev-two',
            },
        })

        const swiperThree = new Swiper('#swiper-three', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-three',
                prevEl: '#swiper-button-prev-three',
            },
        })

        const swiperFour = new Swiper('#swiper-four', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-four',
                prevEl: '#swiper-button-prev-four',
            },
        })

        const swiperFive = new Swiper('#swiper-five', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-five',
                prevEl: '#swiper-button-prev-five',
            },
        })

        const swiperSix = new Swiper('#swiper-six', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-six',
                prevEl: '#swiper-button-prev-six',
            },
        })
    }

    // when loaded add class of loaded to body for animation
    $('body').addClass('loaded');


}


// document ready
$(function(){

    // call init function
    dxss.init();

    // call AOS library
    AOS.init();

});