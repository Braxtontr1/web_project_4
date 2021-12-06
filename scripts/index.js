import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import {
    openModalWindow,
    closeModalWindow
} from "./Utils.js";

const initialCards = [{
        title: "Yosemite Valley",
        image: "./images/Yosemite-valley.jpg"
    },
    {
        title: "Zion Canyon",
        image: "./images/zion-canyon.jpg"
    },
    {
        title: "Telluride",
        image: "./images/telluride.jpg"
    },
    {
        title: "Yellowstone",
        image: "./images/yellowstone.jpg"
    },
    {
        title: "Bass Harbor",
        image: "./images/bass-harbor.jpg"
    },
    {
        title: "Big Bend",
        image: "./images/big-bend.jpg"
    }
];


const destinations = document.querySelector('.destinations');

const editModal = document.querySelector('.modal_type_edit-profile');
const editForm = editModal.querySelector('.form');
const addModal = document.querySelector('.modal_type_add-card');
const addForm = addModal.querySelector('.form');
const previewModal = document.querySelector('.modal_type_image');

const editModalButton = document.querySelector('.profile__button');
const addModalButton = document.querySelector('.profile__card-button');
const editModalCloseButton = editModal.querySelector('.modal__close-button'); 
const addModalCloseButton = addModal.querySelector('.modal__close-button'); 

const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__about-me');
const modalNameInput = document.querySelector('.form__input_type_name');
const modalDescriptionInput = document.querySelector('.form__input_type_description');

const modalCardTitle = document.querySelector('.form__input_type_title');
const modalImageLink = document.querySelector('.form__input_type_image-link');



// // functions

function prefillEditProfileForm() {
    modalNameInput.value = profileName.textContent;
    modalDescriptionInput.value = profileTitle.textContent;
}

function renderCard(data, placesList) {
    const card = new Card(data, '#destination-template').generateCard();
    placesList.append(card);
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = modalNameInput.value;
    profileTitle.textContent = modalDescriptionInput.value;
    closeModalWindow(editModal);
}

function formReset(formEl) {

    const buttonEl = formEl.querySelector('.form__button');

    buttonEl.disabled = true;
    buttonEl.classList.add(formSettings.inactiveButtonClass);

    formEl.reset();
}

function addFormSubmitHandler(evt) {
    evt.preventDefault();
    const addCardData = {
        title: modalCardTitle.value,
        image: modalImageLink.value,
    }
    const cardEl = new Card(addCardData, '#destination-template').generateCard();
    destinations.prepend(cardEl);
    closeModalWindow(addModal);
    formReset(addForm);
}

function closeModalOverlay(evt) {
    if (evt.target.classList.contains('modal')) {
        closeModalWindow(evt.target);
    }
}

editForm.addEventListener('submit', editFormSubmitHandler);
editModalButton.addEventListener('click', () => {
    prefillEditProfileForm(editModal);
    openModalWindow(editModal);
})

addModalButton.addEventListener('click', () => openModalWindow(addModal));
addModalCloseButton.addEventListener('click', () => closeModalWindow(addModal));
editModalCloseButton.addEventListener('click', () => closeModalWindow(editModal));

editModal.addEventListener('click', closeModalOverlay);
addModal.addEventListener('click', closeModalOverlay);
previewModal.addEventListener('click', closeModalOverlay);


addForm.addEventListener('submit', addFormSubmitHandler);
addModalButton.addEventListener('click', () => openModalWindow(addModal));


// // actions

initialCards.forEach((data) => {
    renderCard(data, destinations);
});

const formSettings = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
}

const editFormValidator = new FormValidator(formSettings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formSettings, addForm);
addFormValidator.enableValidation();