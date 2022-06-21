//попапы
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
const popupCreateCard = document.querySelector('.popup__create-card')

const validationConfig = {
    submitButtonSelector: '.button',
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClass: '.error-message',
    errorVisibleClass: ' error-message_visible',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
}

enableValidation(validationConfig)

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
    document.addEventListener('keydown', closeByEsc)
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeByEsc)
}


//редактирование профиля
profileEditBtn.addEventListener('click', () => {
    openPopup(popupProfileEdit)
    nameProfileInput.value = profileTitleElement.textContent;
    nameJobInput.value = profileSubtitleElement.textContent;
});

popupCloseProfileEditBtn.addEventListener('click', function () {
    closePopup(popupProfileEdit);
});

function savePopupProfile() {
    profileTitleElement.textContent = nameProfileInput.value;
    profileSubtitleElement.textContent = nameJobInput.value;
    closePopup(popupProfileEdit)
}

formPopupProfile.addEventListener('submit', function (event) {
    event.preventDefault()
    savePopupProfile()
})


//попап добавление карточек
profileAddBtn.addEventListener('click', () => {
    openPopup(popupAddCards)
});

popupCloseAddCardsBtn.addEventListener('click', () => {
    closePopup(popupAddCards)
});

function submitAddCardForm() {
    const nameCardValue = nameCardInput.value;
    const nameCardLinkvalue = nameCardLinkInput.value;
    const cardData = {
        name: nameCardValue,
        link: nameCardLinkvalue
    }
    renderCard(cardData);
    closePopup(popupAddCards)
    disableSubmitButton(popupCreateCard, validationConfig.inactiveButtonClass);
    // nameCardInput.reset();
    // nameCardLinkInput.reset();
}

popupAddCards.addEventListener('submit', (event) => {
    event.preventDefault();
    submitAddCardForm();

});

closePopupImgBtn.addEventListener('click', function () {
    closePopup(popupOpenImage)
});
// функция для закрытия попапа кнопкой Esc и нажатием в любую область вокруг модального окна

function closeByEsc(event) {
    const popupVisible = document.querySelector('.popup_opened');
    if (event.key === 'Escape') {
        closePopup(popupVisible);
    }
}

function closeByOverlay(event) {
    const popupVisible = document.querySelector('.popup_opened');
    if (event.target.classList.contains('popup')) {
        closePopup(popupVisible);
    }
}

popupProfileEdit.addEventListener('click', closeByOverlay);
popupAddCards.addEventListener('click', closeByOverlay);
popupOpenImage.addEventListener('click', closeByOverlay);