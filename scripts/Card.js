import { closeModalWindow, escapeModalWindow } from "./Utils.js";

const previewModal = document.querySelector('.modal_type_image');
const previewModalImage = previewModal.querySelector('.modal__image');
const previewModalTitle = previewModal.querySelector('.modal__image-title');
const previewModalCloseButton = previewModal.querySelector('.modal__close-button');

class Card {
    constructor(data, cardSelector) {
        this._title = data.title;
        this._image = data.image;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement =
         document.querySelector(this._cardSelector)
        .content.querySelector('.destination').cloneNode(true);
        return cardElement;
    }

    _handleLike() {
        this._element.querySelector('.destination__like-button')
        .classList.toggle('destination__like-button_active');
    }

    _handleDelete() {
        this._element.remove();
        this._element = null;
    }

    _handlePreviewImage() {
        previewModalImage.src = this._image;
        previewModalImage.alt = this._title;
        previewModalTitle.textContent = this._title;

        previewModal.classList.add('modal_open');
        document.addEventListener('keydown', escapeModalWindow);
    }

    _setEventListeners() {
        this._element.querySelector('.destination__like-button').addEventListener('click', () => this._handleLike());

        this._element.querySelector('.destination__image').addEventListener('click', () => this._handlePreviewImage());

        this._element.querySelector('.destination__delete-button').addEventListener('click', () => this._handleDelete());

        previewModalCloseButton.addEventListener('click', () => closeModalWindow(previewModal));
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._cardElementImage = this._element.querySelector('.destination__image');
        this._element.querySelector('.destination__title').textContent = this._title;
        this._cardElementImage.src = this._image;
        this._cardElementImage.alt = this._title;

        return this._element;
    }
}

export default Card;