export class Card
{
    constructor (cardData, cardTemplateSelector, handleCardClick)
    {
        this._cardData = cardData;
        this._name = cardData.name;
        this._link = cardData.link;
        this._handleCardClick = handleCardClick;
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
        this._cardsImg.addEventListener('click', () =>
        {
            this._handleCardClick(this._cardData.name, this._cardData.link)
            
        });
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

        //заполняем 
        this._fillCard();

        //слушатели
        this._setEventListeners();
        
        return this._cardElement;
    }
}