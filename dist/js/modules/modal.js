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

export default modal;