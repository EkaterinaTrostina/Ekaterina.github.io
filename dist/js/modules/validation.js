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

export default validation;