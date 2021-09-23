/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/advantages.js":
/*!**************************************!*\
  !*** ./src/js/modules/advantages.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createAdvantagesCard() {

    async function getAdvantages(url) {
        const advant = await fetch(url);

        if(!advant.ok){
            throw new Error(`error ${advant.starus}`)
        };
        return await advant.json();
    }
    
    class Advantages {

        constructor(img, alt, title, descr){
            this.img = img;
            this.alt = alt;
            this.title = title; 
            this.descr = descr;
        }

        render() {
            const advant = document.createElement('div');
            advant.classList.add('advantages__icon', 'advantages__icon_animated');
            advant.innerHTML = `
                <img class="advantages__img" src=${this.img} alt=${this.alt}> 
                <div class="advantages__subtitle">${this.title}</div>
                <div class="advantages__descr">${this.descr} </div>
            `;
            document.querySelector('.advantages__wrapper').append(advant);
        };
    }

    getAdvantages('http://localhost:3000/advantages')
        .then(data => {
            data.forEach(({img, alt, title, descr}) => {
                new Advantages(img, alt, title, descr).render();
            });
        })

}
/* harmony default export */ __webpack_exports__["default"] = (createAdvantagesCard);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hamburger() {

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
}

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modal() {
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
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scroll() {
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
}

/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
    let offset = 0;
    // let slideIndex = 0;

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
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/validation.js":
/*!**************************************!*\
  !*** ./src/js/modules/validation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function validation() {
    //validate
    const formCards = document.querySelector('#cards-form'),
    formQuestions = document.querySelector('#questions-form'),
    formModal = document.querySelector('#form-modal');

    function validateForm(form){
        $(form).validate({
            rules:{
                name: "required",
                phone:"required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Please specify your name",
                phone: "Please specify your phone",
                email: {
                required: "Please specify your email",
                email: "format: name@domain.com"
                }
            }
        }); 

    }

    validateForm(formCards);
    validateForm(formQuestions);
    validateForm(formModal);

    $('input[name=phone]').mask("+7 (999) 999-99-99");
}

/* harmony default export */ __webpack_exports__["default"] = (validation);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ "./src/js/modules/validation.js");
/* harmony import */ var _modules_advantages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/advantages */ "./src/js/modules/advantages.js");
// "use strict"







window.addEventListener('DOMContentLoaded', function(){
    Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();    
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_validation__WEBPACK_IMPORTED_MODULE_4__["default"])();  
    Object(_modules_advantages__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map