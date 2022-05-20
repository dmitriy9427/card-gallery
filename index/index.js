const profileEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeProfileEdit = popup.querySelector('.popup__close');

const profileTitleElement = document.querySelector('.profile__title');
const nameHeadingElement = popup.querySelector('.popup__container_heading')

const profileSubtitleElemtnt = document.querySelector('.profile__subtitle')
const nameSubheadingElement = document.querySelector('.popup__container_subheading')
const POPUP_IS_OPEN_CLASSNAME = 'popup__opened';

const formPopupElement = document.querySelector('.popup__container')
// console.log(profileTitleElement)
// console.log(nameHeadingElement)
// console.log(profileEdit);
// console.log(popup);
// console.log(closeProfileEdit);

function openPopup(profileEdit) {
    profileEdit.classList.add(POPUP_IS_OPEN_CLASSNAME)
}

function closePopup(closeProfileEdit) {
    closeProfileEdit.classList.remove(POPUP_IS_OPEN_CLASSNAME)
}

profileEdit.addEventListener('click', function () {
    if (popup) {
        openPopup(popup);
    }
    nameHeadingElement.value = profileTitleElement.textContent;
    nameSubheadingElement.value = profileSubtitleElemtnt.textContent;
})

closeProfileEdit.addEventListener('click', function () {
    closePopup(popup)
})

formPopupElement.addEventListener('submit', function (event) {
    event.preventDefault()
    profileTitleElement.textContent = nameHeadingElement.value;
    profileSubtitleElemtnt.textContent = nameSubheadingElement.value;
    closePopup(popup)
})

function detectClosePopup(event) {
    console.log(event.target);
    console.log(event.target.classList);
    if (event.target.classList.contains('popup')) {
        closePopup(popup)
    }
}

document.body.addEventListener('click', function (event) {
    detectClosePopup(event)
})