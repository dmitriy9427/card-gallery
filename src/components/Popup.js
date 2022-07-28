export class Popup
{
    constructor (popupSelector)
    {
        this._popupSelector = document.querySelector(popupSelector);
    }

    open()
    {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._handleByOverlayClose);
    }


    close()
    {
        this._popupSelector.classList.remove('popup_opened');
    }

    _handleEscClose = (evt) =>
    {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleByOverlayClose = (evt) =>
    {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    setEventListeners()
    {
        this._popupSelector.querySelector('.popup__close').addEventListener('click', () =>

            this.close());
    }
}
