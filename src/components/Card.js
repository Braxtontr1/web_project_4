class Card {
    constructor({
        data,
        handleClick
    }, cardSelector) {
        this._title = data.title;
        this._image = data.image;

        this._cardSelector = cardSelector;
        this._handleClick = handleClick;

    }

    _getTemplate() {
        const cardElement =
            document.querySelector(this._cardSelector)
            .content.querySelector('.destination').cloneNode(true);
        return cardElement;
    }

    _handleLike() {
        this._likeButton.classList.toggle('destination__like-button_active');
    }

    _handleDelete() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {

        this._likeButton.addEventListener('click', () => this._handleLike());

        this._element.querySelector('.destination__image').addEventListener('click', () => this._handleClick({
            title: this._title,
            image: this._image
        }));

        this._element.querySelector('.destination__delete-button').addEventListener('click', () => this._handleDelete());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.destination__like-button');
        const cardElementImage = this._element.querySelector('.destination__image');

        this._setEventListeners();

        this._element.querySelector('.destination__title').textContent = this._title;

        cardElementImage.src = this._image;
        cardElementImage.alt = this._title;

        return this._element;
    }
}

export default Card;