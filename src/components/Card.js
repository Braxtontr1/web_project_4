class Card {
    constructor({
        data,
        handleClick,
        openDeleteModalHandler,
        handleLike,
        userId,
    }, cardSelector) {
        this._title = data.name;
        this._image = data.link;
        this._likes = data.likes;
        this._authUserId = data.owner._id;
        this._userId = userId;

        this._cardSelector = cardSelector;
        this._handleClick = handleClick;
        this._openDeleteModalHandler = openDeleteModalHandler;
        this._handleLike = handleLike;

    }

    _getTemplate() {
        const cardElement =
            document.querySelector(this._cardSelector)
            .content.querySelector('.destination').cloneNode(true);
        return cardElement;
    }

    updateLikeCount(data) {
        this._likes = data.likes;
        this._likeButtonHandler();
    }

    _likeButtonHandler() {
        this._likeCount.textContent = this._likes.length;

        if (this._likes.filter((user) => user._id === this._userId).length > 0) {
            this._likeButton.classList.add("destination__like-button_active");
        } else {
            this._likeButton.classList.remove("destination__like-button_active");
        }
    }

    _deleteHandler() {
        if (this._userId === this._authUserId) {
            this._deleteButton.classList.add('destination__delete-button_visible');
        } else {
            this._deleteButton.classList.remove('destination__delete-button_visible');
        }

    }

    isLiked() {
        if (this._likeButton.classList.contains("destination__like-button_active")) {
            return true;
        } else {
            return false;
        }
    }

    _setEventListeners() {

        this._likeButton.addEventListener('click', () => this._handleLike());

        this._element.querySelector('.destination__image').addEventListener('click', () => this._handleClick({
            title: this._title,
            image: this._image
        }));

        this._element.querySelector('.destination__delete-button').addEventListener('click', () => this._openDeleteModalHandler());

    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeCount = this._element.querySelector(".destination__like-button-count");
        this._likeButton = this._element.querySelector('.destination__like-button');
        const cardElementImage = this._element.querySelector('.destination__image');
        this._deleteButton = this._element.querySelector('.destination__delete-button');

        this._setEventListeners();
        this._deleteHandler();
        this._likeButtonHandler();

        this._element.querySelector('.destination__title').textContent = this._title;

        cardElementImage.src = this._image;
        cardElementImage.alt = this._title;

        return this._element;
    }
}

export default Card;