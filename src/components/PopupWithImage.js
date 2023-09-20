import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = document.querySelector(".popup__open-image");
    this._name = document.querySelector(".popup__image-caption");
  }

  open(link, name) {
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._name.textContent = name;
    console.log(this._image.src);
  }
}
