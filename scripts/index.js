//попапы
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const popupAddCards = document.querySelector('.popup_type_add-cards');
const popupOpenImage = document.querySelector('.popup_type_image');
// кнопки
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const popupCloseProfileEditBtn = document.querySelector('.popup__close_type_profile-edit');
const popupCloseAddCardsBtn = document.querySelector('.popup__close_type_add-cards');
const closePopupImg = document.querySelector('.popup__close_type_image');
// переменные
const profileTitleElement = document.querySelector('.profile__title');
const nameInput = document.querySelector('.popup__input_type_name');
const profileSubtitleElement = document.querySelector('.profile__subtitle');
const nameTextInput = document.querySelector('.popup__input_type_subheading');
const cardItems = document.querySelector('.elements__items');
const templateElement = document.querySelector('.template').content;
const nameCardInput = document.querySelector('.popup__input_type_card-name');
const nameCardLinkInput = document.querySelector('.popup__input_type_card-link');
const popupImage = document.querySelector('.popup__open-image');
const popupImgCaption = document.querySelector('.popup__image-caption');
const formPopupElement = document.querySelector('.popup__form');


//функция удаления карточки
function deleteCard(event) {
    event.target.closest('.elements__item').remove();
}

//функция добавления лайка
function addLike(event) {
    event.target.closest('.elements__like-btn').classList.toggle('elements__like-btn_active');
    console.log(addLike)
}

// функция открытия попап с карточкой
function createCard(cardData) {
    const cardTemplate = templateElement.cloneNode(true);
    const cardImg = cardTemplate.querySelector('.elements__img');
    const cardTitle = cardTemplate.querySelector('.elements__title');
    const cardDeleteBtn = cardTemplate.querySelector('.elements__delete-btn');
    const cardLikeBtn = cardTemplate.querySelector('.elements__like-btn');

    cardTitle.textContent = cardData.name;
    cardImg.src = cardData.link;
    cardImg.alt = 'Изображение';

    cardDeleteBtn.addEventListener('click', deleteCard);
    cardLikeBtn.addEventListener('click', addLike);
    cardImg.addEventListener('click', function () {
        popupImage.src = cardData.link;
        popupImage.alt = 'Изображение';
        popupImgCaption.textContent = cardData.name;
        openPopup(popupOpenImage)
    });
    return cardTemplate;
}

function renderCard(Data) {
    const card = createCard(Data);
    cardItems.prepend(card);
}

initialCards.forEach(renderCard);

//функции закрытия и открытия попап
function openPopup(popup) {
    popup.classList.toggle('popup_opened')
}

function closePopup() {
    popupProfileEdit.classList.remove('popup_opened')
}

//редактирование профиля
profileEditBtn.addEventListener('click', () => {
    openPopup(popupProfileEdit)
    nameInput.value = profileTitleElement.textContent;
    nameTextInput.value = profileSubtitleElement.textContent;
});

popupCloseProfileEditBtn.addEventListener('click', function () {
    openPopup(popupProfileEdit);
});

formPopupElement.addEventListener('submit', function (event) {
    event.preventDefault()
    profileTitleElement.textContent = nameInput.value;
    profileSubtitleElement.textContent = nameTextInput.value;
    closePopup(popupProfileEdit)
})

//попап добавление карточек
profileAddBtn.addEventListener('click', () => {
    openPopup(popupAddCards)
});

popupCloseAddCardsBtn.addEventListener('click', () => {
    openPopup(popupAddCards)
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
});

closePopupImg.addEventListener('click', function () {
    openPopup(popupOpenImage)
});






