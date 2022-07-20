// export function openPopup(popup) {
//     popup.classList.add('popup_opened')
//     document.addEventListener('keydown', closeByEsc)
// }

// export function closePopup(popup) {
//     popup.classList.remove('popup_opened')
//     document.removeEventListener('keydown', closeByEsc)
// }

// export function closeByEsc(event) {
//     const popupVisible = document.querySelector('.popup_opened');
//     if (event.key === 'Escape') {
//         closePopup(popupVisible);
//     }
// }

// export function closeByOverlay(e) {
//     const popupVisible = document.querySelector('.popup_opened');
//     if (e.target === e.currentTarget) {
//         closePopup(popupVisible)
//     }
// }