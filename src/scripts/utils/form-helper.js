const FormHelper = {
  flashMessage(formElement, message, status) {
    const flashMessageElement = document.createElement('div');

    flashMessageElement.classList.add('message__flash-message', `message__flash-message--${status}`);
    flashMessageElement.innerText = message;
    formElement.prepend(flashMessageElement);

    setTimeout(() => {
      flashMessageElement.classList.add('fade-out');
    }, 3000);

    setTimeout(() => {
      formElement.removeChild(flashMessageElement);
    }, 4000);
  },

  setErrorMessage(input, message) {
    const formGroup = input.parentElement;
    const errorMessageElement = formGroup.querySelector('.form__invalid-message');
    formGroup.classList.add('form__group--invalid');
    errorMessageElement.innerText = message;
  },

  resetInputForm(formElement) {
    formElement.reset();
  },

  removeErrorMessage(formElement) {
    const formGroupInvalids = formElement.querySelectorAll('.form__group--invalid');
    formGroupInvalids.forEach((formGroupInvalid) => {
      formGroupInvalid.classList.remove('form__group--invalid');
    });
  },
};

export default FormHelper;
