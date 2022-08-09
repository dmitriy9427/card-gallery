import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupConfirmation } from "../components/PopupConfirmation.js";
import { validationConfig } from "../components/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import "../pages/index.css";

const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const profileUpdateAvatarBtn = document.querySelector('.profile__edit');
const nameProfileInput = document.querySelector('.popup__input_type_name');
const nameJobInput = document.querySelector('.popup__input_type_job');
const formPopupProfile = document.querySelector('.popup__form-profile');
const formChangeAvatar = document.querySelector('.popup__form_type_update-avatar')
const formAddCard = document.querySelector('.popup__form_add-cards')

let userId;

//забираем с сервера данные профиля и карточки
Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([res, section]) =>
    {
        user.setUserInfo(res.name, res.about, res.avatar);
        userId = res._id;
        section.reverse().forEach((data) =>
        {
            createCard(data, undefined, cardsList);
        });
    })
    .catch(console.log);

//валидация
const editFormValidator = new FormValidator(validationConfig, formPopupProfile);
const cardAddFormValidator = new FormValidator(validationConfig, formAddCard);
const changeAvatarValidator = new FormValidator(validationConfig, formChangeAvatar);
editFormValidator.enableValidation();
cardAddFormValidator.enableValidation();
changeAvatarValidator.enableValidation();

//попап добавления карточек
const cardAdd = new PopupWithForm('.popup_type_add-cards', {
    handleFormSubmit: (data) =>
    {
        cardAdd.renderLoading(true);
        api
            .addNewCard(data.cardName, data.cardLink)
            .then((res) =>
            {
                createCard(res, ".template", cardsList);
                cardAdd.close();
            })
            .catch(console.log)
            .finally(() =>
            {
                cardAdd.renderLoading(false);
            });
    },
});

//данные профиля
const user = new UserInfo({
    nameInputSelector: '.profile__title',
    jobInputSelector: '.profile__subtitle',
    avatarSelector: '.profile__image'
})

// Меняем информацию в профиле и сохраняем
const changeProfile = new PopupWithForm('.popup_type_profile-edit', {
    handleFormSubmit: (data) =>
    {
        changeProfile.renderLoading(true);
        api
            .editProfile(data.name, data.job)
            .then((res) =>
            {
                user.setUserInfo(res.name, res.about, res.avatar);
                changeProfile.close()
            })
            .catch(console.log)
            .finally(() =>
            {
                changeProfile.renderLoading(false);
            });
    }
})

//попап авaтара
const popupChangeAvatar = new PopupWithForm('.popup_type_update-avatar', {
    handleFormSubmit: (data) =>
    {
        popupChangeAvatar.renderLoading(true);
        api
            .changeAvatar(data.avatar)
            .then((res) =>
            {
                user.setUserInfo(res.name, res.about, res.avatar);
                popupChangeAvatar.close();
            })
            .catch(console.log)
            .finally(() =>
            {
                popupChangeAvatar.renderLoading(false);
            });
    }
})

//добавляю карточки на страницу
const cardsList = new Section({
    items: [],
    renderer: (data) =>
    {
        createCard(data, ".template", cardsList)
    },
},
    '.elements__items'
);


//добавляю новые карточки
function createCard(data, undefined, cardsList) 
{
    const newCard = new Card({
        name: data.name,
        link: data.link,
        likes: data.likes,
        _id: data._id,
        userId: userId,
        ownerId: data.owner._id,
    },
        ".template",
        { handleCardClick: () => popupOpenImage.open(data.link, data.name) },
        (id) =>
        {
            popupConfirmationDelete.open()
            popupConfirmationDelete.setFormSubmitHandler(() =>
            {
                console.log(id);
                api
                    .deleteCard(id)
                    .then((res) =>
                    {
                        console.log("res", res);
                        newCard.deleteCard()
                        popupConfirmationDelete.close();
                    })
                    .catch(console.log);
            });
        },
        (id) =>
        {
            if (newCard.isLiked()) {
                api
                    .deleteLike(id)
                    .then((res) =>
                    {
                        newCard.setLikes(res.likes);
                    })
                    .catch(console.log);
            } else {
                api
                    .putLike(id)
                    .then((res) =>
                    {
                        newCard.setLikes(res.likes);
                    })
                    .catch(console.log);
            }
        }
    );
    const cardsElement = newCard.generateCard();
    cardsList.addItem(cardsElement);
}

const popupOpenImage = new PopupWithImage('.popup_type_image');
const popupConfirmationDelete = new PopupConfirmation('.popup_type_confirmation');

cardAdd.setEventListeners();
changeProfile.setEventListeners();
popupOpenImage.setEventListeners();
popupConfirmationDelete.setEventListeners();
popupChangeAvatar.setEventListeners();

profileUpdateAvatarBtn.addEventListener('click', () =>
{
    popupChangeAvatar.open()
    changeAvatarValidator.resetValidation()
});

profileEditBtn.addEventListener('click', () =>
{
    changeProfile.open();
    const dataProfile = user.getUserInfo();
    nameProfileInput.value = dataProfile.name;
    nameJobInput.value = dataProfile.about;
})

profileAddBtn.addEventListener('click', () =>
{
    cardAdd.open();
    cardAddFormValidator.resetValidation();
})



