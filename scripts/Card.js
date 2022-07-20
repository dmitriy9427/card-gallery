export class Card
{
    constructor (cardData, cardTemplateSelector)
    {
        this._cardData = cardData;
        this._template = document.querySelector(cardTemplateSelector).content.querySelector('.elements__item');
    }

    _handleLikeClick = () =>
    {
        this._cardsLikeBtn.classList.toggle('elements__like-btn_active')
    }

    _handleDeleteCard = () =>
    {
        this._cardElement.remove();
    }

    _setEventListeners()
    {
        this._cardsDeleteBtn.addEventListener('click', this._handleDeleteCard);
        this._cardsLikeBtn.addEventListener('click', this._handleLikeClick);
        this._cardsImg.addEventListener('click', this._previewImage);
    }

    _fillCard()
    {
        this._cardsTitle.textContent = this._cardData.name;
        this._cardsImg.src = this._cardData.link;
        this._cardsImg.alt = this._cardData.name;
    }

    getCardElement()
    {
        this._cardElement = this._template.cloneNode(true);
        this._cardsImg = this._cardElement.querySelector('.elements__img');
        this._cardsTitle = this._cardElement.querySelector('.elements__title');
        this._cardsDeleteBtn = this._cardElement.querySelector('.elements__delete-btn');
        this._cardsLikeBtn = this._cardElement.querySelector('.elements__like-btn');


        this._fillCard();
        this._setEventListeners();
        return this._cardElement;
    }
}