import { openPopup, closePopup, closeByOverlay } from "./utils.js";
import { validationConfig, initialCards } from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js"

//попапы
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const popupAddCard = document.querySelector('.popup_type_add-cards');
export const popupOpenImage = document.querySelector('.popup_type_image');
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
const cardContainer = document.querySelector('.elements__items');
const cardTemplateSelector = '.template';
const nameCardInput = document.querySelector('.popup__input_type_card-name');
const nameCardLinkInput = document.querySelector('.popup__input_type_card-link');
 const popupImage = document.querySelector('.popup__open-image');
 const popupImgCaption = document.querySelector('.popup__image-caption');
const popupCreateCard = document.querySelector('.popup__create-card')
const formAddCard = document.querySelector('.popup__form_add-cards')


const editFormValidator = new FormValidator(validationConfig, formPopupProfile);
const cardAddFormValidator = new FormValidator(validationConfig, formAddCard)

editFormValidator.enableValidation();
cardAddFormValidator.enableValidation();


// функция открытия попап с карточкой
function createCard(cardData) {
    const card = new Card(cardData, cardTemplateSelector);
    const cardElement = card.getCardElement();
    return cardElement;
}

function renderCard(data) {
    const card = createCard(data);
    cardContainer.prepend(card);

}

initialCards.forEach((data) => {
    renderCard(data, cardContainer)
});

//редактирование профиля
profileEditBtn.addEventListener('click', () => {
    openPopup(popupProfileEdit)
    nameProfileInput.value = profileTitleElement.textContent;
    nameJobInput.value = profileSubtitleElement.textContent;
});

popupCloseProfileEditBtn.addEventListener('click', function () {
    closePopup(popupProfileEdit);
});

function saveProfileData() {
    profileTitleElement.textContent = nameProfileInput.value;
    profileSubtitleElement.textContent = nameJobInput.value;
    closePopup(popupProfileEdit)
}

formPopupProfile.addEventListener('submit', function (event) {
    event.preventDefault()
    saveProfileData()
})


//попап добавление карточек
profileAddBtn.addEventListener('click', () => {
    openPopup(popupAddCard)
});

popupCloseAddCardsBtn.addEventListener('click', () => {
    closePopup(popupAddCard)
});

function handleAddCard() {
    const nameCardValue = nameCardInput.value;
    const nameCardLinkValue = nameCardLinkInput.value;
    const cardData = {
        name: nameCardValue,
        link: nameCardLinkValue
    }
    renderCard(cardData, cardContainer);
    formAddCard.reset();
    closePopup(popupAddCard)
}

popupAddCard.addEventListener('submit', (event) => {
    event.preventDefault();
    handleAddCard();

});

closePopupImgBtn.addEventListener('click', function () {
    closePopup(popupOpenImage)
});

popupProfileEdit.addEventListener('click', closeByOverlay);
popupAddCard.addEventListener('click', closeByOverlay);
popupOpenImage.addEventListener('click', closeByOverlay);