class Card {
    constructor({
        data,
        handleClick,
        openDeleteModalHandler,
        userId,
    }, cardSelector) {
        this._title = data.name;
        this._image = data.link;
        this._id = data._id;
        this._authUserId = data.owner._id;
        this._userId = userId;

        this._cardSelector = cardSelector;
        this._handleClick = handleClick;
        this._openDeleteModalHandler = openDeleteModalHandler;

        const deleteModal = document.querySelector('.modal_type_delete-confirmation');
        const deleteConfirmation = deleteModal.querySelector('.form');

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

    // _openDeleteHandler() {
    //     this._element.classList
    // }

    _deleteHandler() {
        if (this._userId === this._authUserId) {
            this._deleteButton.classList.add('destination__delete-button_visible');
        } else {
            this._deleteButton.classList.remove('destination__delete-button_visible');
        }

    }

    _setEventListeners() {

        this._likeButton.addEventListener('click', () => this._handleLike());

        this._element.querySelector('.destination__image').addEventListener('click', () => this._handleClick({
            title: this._title,
            image: this._image
        }));

        this._element.querySelector('.destination__delete-button').addEventListener('click', () => this._openDeleteModalHandler(this._id));

    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.destination__like-button');
        const cardElementImage = this._element.querySelector('.destination__image');
        this._deleteButton = this._element.querySelector('.destination__delete-button');

        this._setEventListeners();
        this._deleteHandler(this._id);

        this._element.querySelector('.destination__title').textContent = this._title;

        cardElementImage.src = this._image;
        cardElementImage.alt = this._title;

        return this._element;
    }
}

export default Card;