class FormValidator {
    constructor(settings, formEl) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formEl;
    }

    _addErrorMessage(inputEl) {
        const errorEl = this._form.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.add(this._inputErrorClass);
        errorEl.innerText = inputEl.validationMessage;
        errorEl.classList.add(this._errorClass);
    }

    _removeErrorMessage(inputEl) {
        const errorEl = this._form.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.remove(this._inputErrorClass);
        errorEl.innerText = '';
        errorEl.classList.remove(this._errorClass);
    }

    _isValid(inputEl) {
        return inputEl.validity.valid;
    }

    _checkFormValidity() {
        return this._inputList.every(inputEl => this._isValid(inputEl));
    }

    _checkInputValidity(inputEl) {
        if (!this._isValid(inputEl)) {
            this._addErrorMessage(inputEl);
        } else {
            this._removeErrorMessage(inputEl);
        }
    }

    _toggleButtonState() {
        if (this._checkFormValidity()) {
            this._buttonEl.classList.remove(this._inactiveButtonClass);
            this._buttonEl.disabled = false;
        } else {
            this._buttonEl.classList.add(this._inactiveButtonClass);
            this._buttonEl.disabled = true;
        }
    }

    _setupEventListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonEl = this._form.querySelector(this._submitButtonSelector);
    
        this._inputList.forEach((inputEl) => {
            inputEl.addEventListener('input', (e) => {
                this._checkInputValidity(inputEl);
                this._toggleButtonState(this._inputList);
            });
        });
    };

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setupEventListeners(this._form);
    }

    resetForm() {
        this._buttonEl.disabled = true;
        this._buttonEl.classList.add(this._inactiveButtonClass);
    
        this._form.reset();
    }
    
}


export default FormValidator;