export class Popup
{
    constructor (popupSelector)
    {
        this._popupSelector = document.querySelector(popupSelector);
    }

    open()
    {
        this._popupSelector.classList.add('popup-opened');
    }

    close()
    {
        this._popupSelector.classList.remove('popup-opened');
    }

    _handleEscClose(evt)
    {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleByOverlayClose(evt)
    {
        if (e.target === e.currentTarget) {
            this.close();
        }
    }

    setEventListeners()
    {
        this._popupSelector.querySelector('.popup__close').addEventlistener('click', () =>
        {
            this.close()
        });
    }
}