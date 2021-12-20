class FormValidator {
    constructor(settings, formEl) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formEl;
    }

    _addErrorMessage(inputElement) {
        const errorEl = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorEl.innerText = inputElement.validationMessage;
        errorEl.classList.add(this._errorClass);
    }

    _removeErrorMessage(inputElement) {
        const errorEl = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorEl.innerText = '';
        errorEl.classList.remove(this._errorClass);
    }

    _isValid(inputElement) {
        return inputElement.validity.valid;
    }

    _checkFormValidity() {
        return this._inputList.every(inputElement => this._isValid(inputElement));
    }

    _checkInputValidity(inputElement) {
        if (!this._isValid(inputElement)) {
            this._addErrorMessage(inputElement);
        } else {
            this._removeErrorMessage(inputElement);
        }
    }

    _disableButton() {
        this._buttonEl.classList.add(this._inactiveButtonClass);
        this._buttonEl.disabled = true;
    }

    _toggleButtonState() {
        if (this._checkFormValidity()) {
            this._buttonEl.classList.remove(this._inactiveButtonClass);
            this._buttonEl.disabled = false;
        } else {
            this._disableButton();
        }
    }

    _setupEventListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonEl = this._form.querySelector(this._submitButtonSelector);

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', (e) => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList);
            });
        });
    }


    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setupEventListeners(this._form);
    }

    resetValidation() {
        this._toggleButtonState(); 
  
        this._inputList.forEach((inputElement) => {
          this._removeErrorMessage(inputElement) 
        });
  
      }
  

}


export default FormValidator;