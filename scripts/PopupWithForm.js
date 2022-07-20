import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup
{
    constructor ({ handleFormSubmit }, popupSelector)
    {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = popupSelector.querySelector('.popup__form');
        this._formInputs = popupSelector.querySelector('.popup__input');
        this._saveBtn = popupSelector.querySelector('.button');
        this._firstInput = this._formInputs[0];
        this._secondInput = this._formInputs[1];
    }

    _getInputValues()
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
        this._form.addEventListeners('click', (evt) =>
        {
            this._handleFormSubmit(this._getInputValues());
            evt.prevent.default();
            this.close();
        })
    }
}