import Popup from "./Popup.js";
import {
    formSettings, selectors
} from "./constants.js";

export class PopupWithForm extends Popup {
    constructor({ handleFormSubmission, popupSelector }) {
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
    

    formReset() {

        const buttonEl = this._formSelector.querySelector('.form__button');

        buttonEl.disabled = true;
        buttonEl.classList.add(formSettings.inactiveButtonClass);

        this._formSelector.reset();
    }

    setEventListeners() {
        this._popupElement.querySelector("button").addEventListener('click', () => { 
            console.log('close');
            super.setEventListeners();
            this.close();
            });

        this._popupElement.addEventListener('submit', () => { this._handleFormSubmission(this._getInputValues());
        super.setEventListeners();
        this.close();
        if (this._popupElement.classList.contains("modal_type_add-card")) {
            this.formReset();
        } else return true;
        });
    }

    close() {
        super.close();
        this._popupElement.classList.remove('modal_open');
        document.removeEventListener('submit', () => this._handleFormSubmission(this._getInputValues()));

    }
}