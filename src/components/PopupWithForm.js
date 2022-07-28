import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup
{
    constructor ({ handleFormSubmit }, popupSelector)
    {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._formInputs = this._popupSelector.querySelectorAll('.popup__input');
        this._saveBtn = this._popupSelector.querySelectorAll('.button');
        this._firstInput = this._formInputs[0];
        this._secondInput = this._formInputs[1];
    }

    _getInputValues = () =>
    {
        return {
            name: this._firstInput.value,
            link: this._secondInput.value,
        };
    }

    close()
    {
        super.close();
        this._form.reset();
    }

    setEventListeners()
    {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) =>
        {
            this._handleFormSubmit(this._getInputValues());
            evt.preventDefault();
            this.close();
        })
    }
}