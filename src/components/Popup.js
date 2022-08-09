export class Popup
{
    constructor (popup)
    {
        this._popup = document.querySelector(popup);

    }

    open()
    {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._handleByOverlayClose);
    }


    close()
    {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', this._handleByOverlayClose);
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
        this._popup.querySelector('.popup__close').addEventListener('click', () =>
            this.close());
    }
}
