import {
    closeModalWindow,
    openModalWindow
} from "./Utils.js";

const previewModal = document.querySelector('.modal_type_image');
const previewModalImage = previewModal.querySelector('.modal__image');
const previewModalTitle = previewModal.querySelector('.modal__image-title');
const previewModalCloseButton = previewModal.querySelector('.modal__close-button');

previewModalCloseButton.addEventListener('click', () => closeModalWindow(previewModal));

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

        openModalWindow(previewModal);
    }

    _setEventListeners() {
        this._element.querySelector('.destination__like-button').addEventListener('click', () => this._handleLike());

        this._element.querySelector('.destination__image').addEventListener('click', () => this._handlePreviewImage());

        this._element.querySelector('.destination__delete-button').addEventListener('click', () => this._handleDelete());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.destination__title').textContent = this._title;

        const cardElementImage = this._element.querySelector('.destination__image');
        cardElementImage.src = this._image;
        cardElementImage.alt = this._title;

        return this._element;
    }
}

export default Card;