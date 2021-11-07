const addErrorMessage = (formEl, inputEl, settings) => {
    const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(settings.inputErrorClass);
    errorEl.innerText = inputEl.validationMessage;
    errorEl.classList.add(settings.errorClass);
};


const removeErrorMessage = (formEl, inputEl, settings) => {
    const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(settings.inputErrorClass);
    errorEl.innerText = '';
    errorEl.classList.remove(settings.errorClass);
};


const isValid = (inputEl) => {
    return inputEl.validity.valid;
}


const checkInputValidity = (formEl, inputEl, settings) => {

    if (!isValid(inputEl)) {
        addErrorMessage(formEl, inputEl, settings);
    } else {
        removeErrorMessage(formEl, inputEl, settings);
    }
};


const toggleButtonState = (inputList, buttonEl, {
    inactiveButtonClass
}) => {
    const allValid = inputList.every(inputEl => isValid(inputEl));
    if (allValid) {
        buttonEl.classList.remove(inactiveButtonClass);
        buttonEl.disabled = false;
    } else {
        buttonEl.classList.add(inactiveButtonClass);
        buttonEl.disabled = true;
    }
};


const setupEventListners = (formEl, {
    inputSelector,
    submitButtonSelector,
    ...otherSettings
}) => {
    const inputList = [...formEl.querySelectorAll(inputSelector)];
    const buttonEl = formEl.querySelector(submitButtonSelector);

    inputList.forEach((inputEl) => {
        inputEl.addEventListener('input', (e) => {
            checkInputValidity(formEl, inputEl, otherSettings);
            toggleButtonState(inputList, buttonEl, otherSettings);
        });
    });
};


const enableValidation = ({
    formSelector,
    ...otherSettings
}) => {
    //select all the forms
    const formList = [...document.querySelectorAll(formSelector)];
    //loop through forms and set up listeners
    formList.forEach((formEl) => {
        formEl.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setupEventListners(formEl, otherSettings);
    });
};


enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
});

export const toggleButtonState = () => {
    ...
}