import { Popup } from './Popup.js';

export class PopupWithImage extends Popup
{
    constructor (popupSelector)
    {
        super(popupSelector);
        this._image = popupSelector.querySelector('.popup__open-image');
        this._name = popupSelector.querySelector('.popup__image-caption');
    }

    open(link, name)
    {
        super.open();
        this._image.src = link;
        this._name.alt = name;
        this._name.textContent = name;
    }
}