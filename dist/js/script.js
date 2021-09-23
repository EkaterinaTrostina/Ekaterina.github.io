// "use strict"
import hamburger from './modules/hamburger';
import modal from './modules/modal';
import scroll from './modules/scroll';
import slider from './modules/slider';
import validation from './modules/validation';
import createAdvantagesCard from './modules/advantages';

window.addEventListener('DOMContentLoaded', function(){
    hamburger();    
    modal();
    scroll();
    slider();
    validation();  
    createAdvantagesCard();
});