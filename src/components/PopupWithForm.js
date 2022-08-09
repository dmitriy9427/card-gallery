import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup
{
    constructor (popup, { handleFormSubmit })
    {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._formInputs = this._form.querySelectorAll('.popup__input');
        this._saveBtn = this._form.querySelector('.popup__save-btn');
    }

    _getInputValues = () =>
    {
        this._formValues = {};
        this._formInputs.forEach((input) => (this._formValues[input.name] = input.value))
        return this._formValues;
    }

    changeSubmitHandler(newhandleFormSubmit)
    {
        this._handleFormSubmit = newhandleFormSubmit;
    }

    close()
    {
        super.close();
        this._form.reset();
    }

    renderLoading(loading)
    {
        if (loading) {
            this._saveBtn.textContent = 'Сохранение...';
        } else {
            this._saveBtn.textContent = 'Сохранить';
        }
    }

    setEventListeners()
    {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) =>
        {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }
}