// my namespaces
const dxss = {};

// images
dxss.headerImages = [
    {
        name: 'roof',
        path: 'image2.jpg'
    },
    {
        name: 'skyline',
        path: 'image00001.png'
    },
    {
        name: 'hardhat',
        path: 'image3.jpg'
    },
    {
        name: 'back',
        path: 'image1.jpg'
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
        name: "Patrick",
        company: "eSTRUXTURE DATA CENTRES",
        testimonial: "Their service has always been prompt and courteous and I have no hesitation in recommending them to any client. They are a professional contractor who can do both service and installation."
    },
    {
        name: "Marty",
        company: "RADIANT COMMUNICATIONS",
        testimonial: "Throughout our working relationship you have proven to be more than competitive in your pricing, reliable and extremely honest. I know that I can rely on you and your staff to represent our firm and trust that our clients are being serviced well. "
    },
    {
        name: "DELANO",
        company: "VERTIV CANADA",
        testimonial: "DX Systems Solutions Inc. and Vertiv (Liebert) have enjoyed a close working relationship for several years. We recognize DX Systems Solutions as having all the expertise and knowledge required to be trusted upon in mission critical environments."
    },
    {
        name: "MATISON",
        company: "BGIS CORPORATE SERVICES",
        testimonial: "During our association they have proven to be reliable, honest and very competitive in price. I am also impressed with the professional capability and workmanship I have observed in their performance."
    },
    {
        name: "HUGO",
        company: "SPRINT MECHANICAL",
        testimonial: "During our ongoing partnership; DX Systems Solutions Inc. has proven to be very organized with managing projects from conception to completion. I am also impressed with DX Systems Solutions Inc. quality of workmanship and attention to detail."
    }
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
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    let newImages = shuffle(dxss.headerImages);
    newImages.forEach(function(image){
        // make new li
        $('.image-slides .swiper-wrapper').append($('<li/>').addClass('swiper-slide').css('background-image', `url(./assets/${image.path})`));
    })

    var swiper = new Swiper('.image-slides', {
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 5000,
        },
    });

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

// make function that sends the message to formspree
dxss.sendMessage = function(){
    $.ajax({
            url: `https://formspree.io/f/mrgoapal`,
            method: 'POST',
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                address: $('#address').val(), 
                service: $('#service').val(),
                message: $('#message').val()
            },
            dataType: 'json'
        }).then(function(){

        // show an alert
        swal({
            title: 'Thank you!',
            text: 'Your response was submitted.',
            button: 'Ok',
        })

        // clear the form
        document.getElementById("contact-form").reset();
    });
}


// my init function
dxss.init = function(){

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0){
        $('body').addClass('safari');   
    } 

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
    if($('body').hasClass('home')){
        // dxss.changeImage();
        if($(window).width() < 1000){
            $('section.services').removeAttr('data-aos data-aos-duration data-aos-delay');
        }
    }

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

        map.addControl(new mapboxgl.NavigationControl());

        map.scrollZoom.disable();

        // on submit, send message
        $('#contact-form').on('submit', function(e){
            e.preventDefault();

            // call function to send message
            dxss.sendMessage();

        })



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
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
        })

        const swiperTwo = new Swiper('#swiper-two', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-two',
                prevEl: '#swiper-button-prev-two',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
        })

        const swiperThree = new Swiper('#swiper-three', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-three',
                prevEl: '#swiper-button-prev-three',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
        })

        const swiperFour = new Swiper('#swiper-four', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-four',
                prevEl: '#swiper-button-prev-four',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
        })

        const swiperFive = new Swiper('#swiper-five', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-five',
                prevEl: '#swiper-button-prev-five',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
        })

        const swiperSix = new Swiper('#swiper-six', {
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#swiper-button-next-six',
                prevEl: '#swiper-button-prev-six',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
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