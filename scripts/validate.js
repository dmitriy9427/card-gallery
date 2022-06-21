function submitForm(e) {
    e.preventDefault();
}

function enableSubmitButton(button, inactiveButtonClass) {
    button.removeAttribute('disabled')
    button.classList.remove(inactiveButtonClass);
}

function disableSubmitButton(button, inactiveButtonClass) {
    button.setAttribute('disabled', '');
    button.classList.add(inactiveButtonClass);
}

function toggleButton(form, { submitButtonSelector, inactiveButtonClass }) {
    const button = form.querySelector(submitButtonSelector);
    const isFormValid = form.checkValidity();

    if (isFormValid) {
        enableSubmitButton(button, inactiveButtonClass)

    } else {
        disableSubmitButton(button, inactiveButtonClass)
    }
}

function showError(input, errorContainer, { inputErrorClass, errorvisibleClass }) {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorvisibleClass);
    errorContainer.textContent = input.validationMessage;
}

function hideError(input, errorContainer, { inputErrorClass, errorvisibleClass }) {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorvisibleClass);
    errorContainer.textContent = '';
}

function validateInput(form, input, classes) {

    const errorContainer = form.querySelector(`#error-${input.id}`)
    if (input.validity.valid) {
        hideError(input, errorContainer, classes);
    } else {
        showError(input, errorContainer, classes);
    }
    toggleButton(form, classes)
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
    const forms = Array.from(document.querySelectorAll('.popup__form'));

    forms.forEach((form) => {
        form.addEventListener('submit', submitForm)

        const inputs = Array.from(form.querySelectorAll('.popup__input'));
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateInput(form, input, rest);
            })
        });
        toggleButton(form, rest)
    })
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorvisibleClass: 'error__message_visible',
    errorClass: '.error-message',
});