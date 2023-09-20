export class Card {
  constructor(
    data,
    cardsTemplate,
    { handleCardClick },
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._cardsTemplate = cardsTemplate;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardsTemplate = document
      .querySelector(this._cardsTemplate)
      .content.querySelector(".elements__item")
      .cloneNode(true);
    return cardsTemplate;
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(
      (user) => user._id === this._userId
    );
    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likeNumber.textContent = this._likes.length;

    if (this.isLiked()) {
      this.__addLikeCard();
    } else {
      this._removeLikeCard();
    }
  }

  __addLikeCard() {
    this._cardsLikeBtn.classList.add("elements__like-btn_active");
  }

  _removeLikeCard() {
    this._cardsLikeBtn.classList.remove("elements__like-btn_active");
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._card.querySelector(".elements__title").textContent = this._name;
    this._cardsImg.src = this._link;
    this._cardsImg.alt = this._name;

    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._card.querySelector(".elements__delete-btn").style.display = "none";
    }

    return this._card;
  }

  deleteCard() {
    this._card.remove();
  }

  _setEventListeners() {
    this._cardsImg = this._card.querySelector(".elements__img");
    this._likeNumber = this._card.querySelector(".elements__numberoflikes");
    this._cardsDeleteBtn = this._card.querySelector(".elements__delete-btn");
    this._cardsLikeBtn = this._card.querySelector(".elements__like-btn");

    this._cardsDeleteBtn.addEventListener("click", () => {
      this._handleDeleteClick(this._id);
    });

    this._cardsLikeBtn.addEventListener("click", () => {
      this._handleLikeClick(this._id);
    });

    this._cardsImg.addEventListener("click", this._handleCardClick);
  }
}
