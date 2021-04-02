"use strict"

window.addEventListener('DOMContentLoaded', function(){


    //slider
    let offset = 0;
    let slideIndex = 0;

    const slides = document.querySelectorAll('.reviews__item'),
          slidesWrapper = document.querySelector('.reviews__carousel'),
          slidesField = document.querySelector('.reviews__inner'),
          prev = document.querySelector('.reviews__prev'),
          next = document.querySelector('.reviews__next'),
          width = window.getComputedStyle(slidesWrapper).width;

    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', ()=>{
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)){
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', ()=>{
        if(offset == 0){
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    // showSlides(slideIndex);
    
    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    // }

    // slides.forEach((item) => item.style.display = 'none');

    // slides[slideIndex - 1].style.display = 'block';

    // function plusSlides (n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', function(){
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', function(){
    //     plusSlides(1);
    // });

    //scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };


    //hamburger
    const hamburgerBtn = document.querySelector('.hamburger'),
          hamburgerMenu = document.querySelector('.hamburger__wrap');
    function toggleHamburger(trigger, menu){
        trigger.addEventListener('click', function(){
            menu.classList.toggle = 'active';
        });
    }
    toggleHamburger(hamburgerBtn, hamburgerMenu);



});