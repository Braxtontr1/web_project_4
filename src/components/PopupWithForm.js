import Popup from "./Popup.js";


export class PopupWithForm extends Popup {
    constructor({
        handleFormSubmission,
        popupElement
    }) {
        super(popupElement);


        this._handleFormSubmission = handleFormSubmission;
        this._formElement = this._popupElement.querySelector('.form');
    }


    _getInputValues() {

        const formValues = {};

        this._inputElements = Array.from(this._formElement.elements);
        this._inputElements.forEach((input) => {
            formValues[input.name] = input.value;
        });

        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();


        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmission(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._formElement.reset();

    }
}