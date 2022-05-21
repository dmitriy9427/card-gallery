const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');

const profileTitleElement = document.querySelector('.profile__title');
const nameInput = popup.querySelector('.popup__input_text_heading')

const profileSubtitleElement = document.querySelector('.profile__subtitle')
const nameSubheadingElement = document.querySelector('.popup__input_text_subheading')
const POPUP_IS_OPEN_CLASSNAME = 'popup_opened';

const formPopupElement = document.querySelector('.popup__form')


function openPopup(profileEditBtn) {//если я удаляю аргумент, код перестает работать((
    profileEditBtn.classList.add(POPUP_IS_OPEN_CLASSNAME)
}

function closePopup(popupCloseBtn) {
    popupCloseBtn.classList.remove(POPUP_IS_OPEN_CLASSNAME)
}

profileEditBtn.addEventListener('click', function () {
    openPopup(popup);
    nameInput.value = profileTitleElement.textContent;
    nameSubheadingElement.value = profileSubtitleElement.textContent;
})

popupCloseBtn.addEventListener('click', function () {
    closePopup(popup)
})

formPopupElement.addEventListener('submit', function (event) {
    event.preventDefault()
    profileTitleElement.textContent = nameInput.value;
    profileSubtitleElement.textContent = nameSubheadingElement.value;
    closePopup(popup)
})