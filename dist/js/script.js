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

    // hamburger
    const hamburgerBtn = document.querySelector('.hamburger'),
          hamburgerMenu = document.querySelector('.hamburger__wrap'),
          hamburgerClose = document.querySelector('.hamburger__close'),
          menuItem = document.querySelectorAll('.hamburger__link');
    function toggleHamburger(trigger, menu, menuItem, close){
        trigger.addEventListener('click', function(){
            menu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', function(){
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('active');
                document.body.style.overflow = '';
            })
        })

    }
    toggleHamburger(hamburgerBtn, hamburgerMenu, menuItem, hamburgerClose);


    //modal
    const modal = document.querySelector('.modal'),
          openModal = document.querySelectorAll('.btn__modal'),
          closeModal = document.querySelector('.modal__close'),
          overlay = document.querySelector('.overlay');

    function toggleModal(triggers, modal, close, overlay){
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                overlay.style.opacity = '1';
                overlay.style.visibility =  'visible';
            })
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            overlay.style.opacity = '0';
            overlay.style.visibility =  'hidden';
        });
        
        document.addEventListener('click', (e) => {
            if(e.target === overlay){
                modal.style.display = "none";
                document.body.style.overflow = '';
                overlay.style.opacity = '0';
                overlay.style.visibility =  'hidden';
            }
        })
        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape') {
                modal.style.display = "none";
                document.body.style.overflow = '';
                overlay.style.opacity = '0';
                overlay.style.visibility =  'hidden';
            }
        });
    }

    toggleModal(openModal, modal, closeModal, overlay);

});