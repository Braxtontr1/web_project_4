import Popup from "./Popup.js";


export default class PopupWithDelete extends Popup {
    constructor({
        handleFormSubmission,
        popupElement
    }) {
        super(popupElement);


        this._handleFormSubmission = handleFormSubmission;
        this._formElement = this._popupElement.querySelector('.form');
    }

    open(cardId, cardElement) {
        super.open();
        this._cardId = cardId;
        this._cardElemnent = cardElement;
        console.log(this._cardId);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmission(this._cardId, this._cardElemnent);
            this.close();
        });
    }

}