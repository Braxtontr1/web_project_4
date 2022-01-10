import Popup from "./Popup.js";


export default class PopupWithConfirmation extends Popup {
    constructor({
        popupElement,
        handleFormSubmission,
    }) {
        super(popupElement, handleFormSubmission);
        this._formElement = this._popupElement.querySelector('.form');

    }


    open(cardId, cardElement) {
        super.open();
        this._cardId = cardId;
        this._cardElemnent = cardElement;
        console.log(this._cardId);
    }

    _handleFormSubmission = (evt,) => {
        evt.preventDefault();
        this._handleFormSubmission(this._cardId, this._cardElemnent);
    }

    setEventListeners() {
        super.setEventListeners();


        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this.close();
        });
    }
}