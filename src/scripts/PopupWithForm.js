import Popup from "./Popup.js";
import {
    formSettings
} from "./constants.js";

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmission}) {
        super(popupSelector);


        this._handleFormSubmission = handleFormSubmission;
        this._formSelector = this._popupElement.querySelector('.form');
    }


    _getInputValues() {

        

        const formValues = {};

        this._inputElements = Array.from(this._formSelector.elements);
        this._inputElements.forEach((input) => {
            formValues[input.name] = input.value;
        });

        return formValues;
    }

    _formSubmissionHandler () {
        this._handleFormSubmission(this._getInputValues())
    }
    

    formReset() {

        const buttonEl = this._formSelector.querySelector('.form__button');

        buttonEl.disabled = true;
        buttonEl.classList.add(formSettings.inactiveButtonClass);

        this._formSelector.reset();
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', this._formSubmissionHandler());
        super.setEventListeners();
        this.formReset();
    }

    close() {
        this._popupElement.classList.remove('modal_open');
        document.removeEventListener('submit', this._formSubmissionHandler());
        super.close();

    }
}