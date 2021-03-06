import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor({
        handleFormSubmission,
        popupElement
    }) {
        super(popupElement);


        this._handleFormSubmission = handleFormSubmission;
        this._formElement = this._popupElement.querySelector('.form');
        this._submitButton = this._formElement.querySelector('.form__button');
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
            this.renderSaving(true);
            this._handleFormSubmission(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._formElement.reset();

    }

    renderSaving(isLoading) {

        if (isLoading) {
            this._submitButton.textContent = 'Saving...';
        } else {
            this._submitButton.textContent = this._submitButton.value;
        }
    }
}