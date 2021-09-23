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

export default hamburger;