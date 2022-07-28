import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { validationConfig, initialCards } from "./components/constants.js";
import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import "./pages/index.css";

//попапы
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');

// кнопки
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');

// переменные
const nameProfileInput = popupProfileEdit.querySelector('.popup__input_type_name');
const nameJobInput = document.querySelector('.popup__input_type_job');
const formPopupProfile = document.querySelector('.popup__form-profile');
const cardContainer = document.querySelector('.elements__items');
const cardTemplateSelector = '.template';
const formAddCard = document.querySelector('.popup__form_add-cards')

const editFormValidator = new FormValidator(validationConfig, formPopupProfile);
const cardAddFormValidator = new FormValidator(validationConfig, formAddCard)
const popupOpenImage = new PopupWithImage('.popup_type_image');
const user = new UserInfo('.profile__title', '.profile__subtitle')
popupOpenImage.setEventListeners();

editFormValidator.enableValidation();
cardAddFormValidator.enableValidation();

// Меняем информацию в профиле и сохраняем
const changeProfile = new PopupWithForm({
    handleFormSubmit: (data) =>
    {
        user.setUserInfo(data);
    },
},
    '.popup_type_profile-edit'
)
changeProfile.setEventListeners();

//добавляю новые карточки
function createCard(cardData)
{
    const newCard = new Card(cardData, cardTemplateSelector, handleCardClick);
    const nevCardElement = newCard.getCardElement();
    return nevCardElement;
}

const cardAdd = new PopupWithForm(
    {
        handleFormSubmit: (cardData) =>
        {
            const newCardElement = createCard(cardData);
            cardContainer.prepend(newCardElement);
        },
    },
    '.popup_type_add-cards'
);
cardAdd.setEventListeners();

const cardListRender = new Section({
    items: initialCards,
    renderer: (cardData) =>
    {
        const newCardElement = createCard(cardData);
        cardContainer.prepend(newCardElement);
    },
},
    '.elements__items'
);
cardListRender.renderItems();


profileAddBtn.addEventListener('click', function ()
{
    cardAdd.open();
    cardAddFormValidator.resetValidation();
});


//функция открытия попапа с картинкой
function handleCardClick(link, name)
{
    popupOpenImage.open(name, link)
}

profileEditBtn.addEventListener('click', () =>
{
    const dataProfile = user.getUserInfo();
    const { title, subtitle } = dataProfile;
    nameProfileInput.value = title;
    nameJobInput.value = subtitle;
    changeProfile.open();
})
