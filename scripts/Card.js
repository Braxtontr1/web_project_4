const previewModal = document.querySelector('.modal_type_image');
const previewModalImage = previewModal.querySelector('.modal__image');
const previewModalTitle = previewModal.querySelector('.modal__image-title');
const modalCardTitle = document.querySelector('.form__input_type_title');
const modalImageLink = document.querySelector('.form__input_type_image-link');
const previewModalCloseButton = previewModal.querySelector('.modal__close-button');

function escapeModalWindow(evt) {
    if (evt.key === 'Escape') {
        const openedModal = document.querySelector('.modal_open')
        closeModalWindow(openedModal);
    }
}

function stopEscapeModalListener() {
    document.removeEventListener('keydown', escapeModalWindow);
}

function closeModalWindow(modalWindow) {
    modalWindow.classList.remove('modal_open');
    stopEscapeModalListener();
}

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
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.destination__title').textContent = this._title;
        this._element.querySelector('.destination__image').src = this._image;
        this._element.querySelector('.destination__image').alt = this._title;

        return this._element;
    }
}

export default Card;