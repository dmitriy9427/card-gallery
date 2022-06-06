//попапы
// const popup = document.querySelector('.popup');
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const popupAddCards = document.querySelector('.popup_type_add-cards');
const popupOpenImage = document.querySelector('.popup_type_image');
// кнопки
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const popupCloseProfileEditBtn = document.querySelector('.popup__close_type_profile-edit');
const popupCloseAddCardsBtn = document.querySelector('.popup__close_type_add-cards');
const closePopupImgBtn = document.querySelector('.popup__close_type_image');
// переменные
const profileTitleElement = document.querySelector('.profile__title');
const nameProfileInput = document.querySelector('.popup__input_type_name');
const profileSubtitleElement = document.querySelector('.profile__subtitle');
const nameJobInput = document.querySelector('.popup__input_type_job');
const formPopupProfile = document.querySelector('.popup__form-profile');
const cardItems = document.querySelector('.elements__items');
const templateElement = document.querySelector('.template').content;
const nameCardInput = document.querySelector('.popup__input_type_card-name');
const nameCardLinkInput = document.querySelector('.popup__input_type_card-link');
const popupImage = document.querySelector('.popup__open-image');
const popupImgCaption = document.querySelector('.popup__image-caption');



//функция удаления карточки
function handleDeleteCard(event) {
    event.target.closest('.elements__item').remove();
}

//функция добавления лайка
function handleLikeClick(event) {
    event.target.closest('.elements__like-btn').classList.toggle('elements__like-btn_active');
}

// функция открытия попап с карточкой
function createCard(cardData) {
    const cardsTemplate = templateElement.cloneNode(true);
    const cardsImg = cardsTemplate.querySelector('.elements__img');
    const cardsTitle = cardsTemplate.querySelector('.elements__title');
    const cardsDeleteBtn = cardsTemplate.querySelector('.elements__delete-btn');
    const cardsLikeBtn = cardsTemplate.querySelector('.elements__like-btn');

    cardsTitle.textContent = cardData.name;
    cardsImg.src = cardData.link;
    cardsImg.alt = cardData.name;

    cardsDeleteBtn.addEventListener('click', handleDeleteCard);
    cardsLikeBtn.addEventListener('click', handleLikeClick);
    cardsImg.addEventListener('click', function () {
        popupImage.src = cardData.link;
        popupImage.alt = cardData.name;
        popupImgCaption.textContent = cardData.name;
        openPopup(popupOpenImage)
    });
    return cardsTemplate;
}

function renderCard(data) {
    const card = createCard(data);
    cardItems.prepend(card);
}

initialCards.forEach(renderCard);

//функции закрытия и открытия попап
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

//редактирование профиля
profileEditBtn.addEventListener('click', () => {
    openPopup(popupProfileEdit)
});

popupCloseProfileEditBtn.addEventListener('click', function () {
    closePopup(popupProfileEdit);
});

formPopupProfile.addEventListener('submit', function (event) {
    event.preventDefault()
    profileTitleElement.textContent = nameProfileInput.value;
    profileSubtitleElement.textContent = nameJobInput.value;
    closePopup(popupProfileEdit)
})

//попап добавление карточек
profileAddBtn.addEventListener('click', () => {
    openPopup(popupAddCards)
});

popupCloseAddCardsBtn.addEventListener('click', () => {
    closePopup(popupAddCards)
});

popupAddCards.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameCardValue = nameCardInput.value;
    const nameCardLinkvalue = nameCardLinkInput.value;
    const obj = {
        name: nameCardValue,
        link: nameCardLinkvalue
    }
    renderCard(obj);
    openPopup(popupAddCards);
    nameCardInput.value = "";
    nameCardLinkInput.value = "";
    closePopup(popupAddCards)
});

closePopupImgBtn.addEventListener('click', function () {
    closePopup(popupOpenImage)
});






