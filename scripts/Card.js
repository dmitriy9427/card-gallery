import { openPopup } from "./utils.js";
import { popupOpenImage, popupImage, popupImgCaption } from "./index.js";

export class Card {
    constructor(cardData, templateElement, handleCardClick) {
        this._cardData = cardData;
        this.name = cardData.name;
        this.link = cardData.link;
        this._template = document.querySelector(templateElement).content.querySelector('.elements__item');
        this._handleCardClick = handleCardClick;
    }

    _handleLikeClick = () => {
        this._cardsLikeBtn.classList.toggle('elements__like-btn_active')
    }

    _handleDeleteCard = () => {
        this._cardElement.remove();
    }

    _setEventListners() {
        this._cardsDeleteBtn.addEventListener('click', this._handleDeleteCard);
        this._cardsLikeBtn.addEventListener('click', this._handleLikeClick);
        this._cardsImg.addEventListener('click', this._previewImage);
    }

    _previewImage = () => {
        popupImage.src = this._cardData.link;
        popupImage.alt = this._cardData.name;
        popupImgCaption.textContent = this._cardData.name;
        openPopup(popupOpenImage)
    }

    _fillCard() {
        this._cardsTitle.textContent = this._cardData.name;
        this._cardsImg.src = this._cardData.link;
        this._cardsImg.alt = this._cardData.name;
    }

    getCardElement() {
        this._cardElement = this._template.cloneNode(true);
        this._cardsImg = this._cardElement.querySelector('.elements__img');
        this._cardsTitle = this._cardElement.querySelector('.elements__title');
        this._cardsDeleteBtn = this._cardElement.querySelector('.elements__delete-btn');
        this._cardsLikeBtn = this._cardElement.querySelector('.elements__like-btn');


        this._fillCard();
        this._setEventListners();
        return this._cardElement;
    }
}