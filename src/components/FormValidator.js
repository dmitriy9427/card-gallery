export class FormValidator
{
    constructor (settings, form)
    {
        this._form = form;
        this._settings = settings;
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    }

    resetValidation = () =>
    {
        this._disableSubmitButton();

        this._inputList.forEach((input) =>
        {

            this._hideInputError(input)

        });
    }

    _showInputError = (input, errorMessage) =>
    {
        const { inputErrorClass, errorVisibleClass } = this._settings;

        const errorContainer = this._form.querySelector(`#error-${input.id}`)
        input.classList.add(inputErrorClass);
        errorContainer.classList.add(errorVisibleClass);
        errorContainer.textContent = errorMessage;
    }

    _hideInputError = (input) =>
    {
        const { inputErrorClass, errorVisibleClass } = this._settings;
        const errorContainer = this._form.querySelector(`#error-${input.id}`)
        input.classList.remove(inputErrorClass);
        errorContainer.classList.remove(errorVisibleClass);
        errorContainer.textContent = '';
    }

    _checkInputValidity = (input) =>
    {
        if (!input.validity.valid) {
            this._showInputError(input, input.validationMessage)
        }
        else {
            this._hideInputError(input)
        }
    }

    _hasInvalidInput = () =>
    {
        return this._inputList.some((input) =>
        {
            return !input.validity.valid;
        });
    }

    _disableSubmitButton = () =>
    {
        const { inactiveButtonClass } = this._settings;
        this._buttonElement.classList.add(inactiveButtonClass);
        this._buttonElement.disabled = true;

    }

    _enableSubmitButton = () =>
    {
        const { inactiveButtonClass } = this._settings;
        this._buttonElement.classList.remove(inactiveButtonClass);
        this._buttonElement.disabled = false;
    }

    _toggleButtonState = () =>
    {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    }

    _setEventListeners()
    {
        this._inputList.forEach((input) =>
        {
            input.addEventListener('input', () =>
            {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
        });
    }

    enableValidation()
    {
        this._form.addEventListener('submit', (evt) =>
        {
            evt.preventDefault()
        });
        this._setEventListeners()
    }
}

