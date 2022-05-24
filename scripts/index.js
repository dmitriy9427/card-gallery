const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');

const profileTitleElement = document.querySelector('.profile__title');
const nameInput = popup.querySelector('.popup__input_text_heading')

const profileSubtitleElement = document.querySelector('.profile__subtitle')
const nameSubheadingElement = document.querySelector('.popup__input_text_subheading')
const popupOpen = 'popup_opened';

const formPopupElement = document.querySelector('.popup__form')


function openPopup() {
    popup.classList.add(popupOpen)
}

function closePopup() {
    popup.classList.remove(popupOpen)
}

profileEditBtn.addEventListener('click', function () {
    openPopup();
    nameInput.value = profileTitleElement.textContent;
    nameSubheadingElement.value = profileSubtitleElement.textContent;
})

popupCloseBtn.addEventListener('click', function () {
    closePopup()
})

formPopupElement.addEventListener('submit', function (event) {
    event.preventDefault()
    profileTitleElement.textContent = nameInput.value;
    profileSubtitleElement.textContent = nameSubheadingElement.value;
    closePopup()
})