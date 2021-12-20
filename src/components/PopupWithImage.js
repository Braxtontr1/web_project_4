import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);

        this._imageElement = this._popupElement.querySelector('.modal__image');
        this._imageElementTitle = this._popupElement.querySelector('.modal__image-title');
    }

    open(data) {
        this._imageElement.src = data.image;
        this._imageElement.alt = data.title;
        this._imageElementTitle.textContent = data.title;
        super.open();
    }
}