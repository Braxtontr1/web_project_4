import './index.css';

import {
    elements,
    formSettings,
    initialCards
} from "../components/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import {
    PopupWithForm
} from "../components/PopupWithForm.js";
import {
    PopupWithImage
} from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";


const editModal = document.querySelector('.modal_type_edit-profile');
const editForm = editModal.querySelector('.form');
const addModal = document.querySelector('.modal_type_add-card');
const addForm = addModal.querySelector('.form');

const editModalButton = document.querySelector('.profile__button');
const addModalButton = document.querySelector('.profile__card-button');


const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__about-me');
const modalNameInput = document.querySelector('.form__input_type_name');
const modalDescriptionInput = document.querySelector('.form__input_type_description');


//functions

function createCard(item) {
    const card = new Card({
        data: item,
        handleClick: (data) => cardImagePreview.open(data)
    }, '#destination-template');
    const cardElement = card.generateCard();
    return cardElement;
}

// class instances for Popups

const addCardPopup = new PopupWithForm({
    popupSelector: document.querySelector('.modal_type_add-card'),
    handleFormSubmission: (item) => {
        renderInitialCards.prependItem(createCard(item));
    }

});

const userdata = new UserInfo({
    userNameSelector: profileName,
    userJobSelector: profileTitle
});

const editFormPopup = new PopupWithForm({
    handleFormSubmission: ({
        name,
        job
    }) => {
        userdata.setUserInfo({
            name,
            job
        });

        console.log(name, job)
    },
    popupSelector: document.querySelector('.modal_type_edit-profile'),

});


const cardImagePreview = new PopupWithImage(elements.imagePopup);

const renderInitialCards = new Section({
    items: initialCards,
    renderer: (item) => {

        renderInitialCards.addItem(createCard(item));

    }
}, ".destinations");



addModalButton.addEventListener('click', () => {
    addFormValidator.resetValidation();
    addCardPopup.open();
});

editModalButton.addEventListener('click', () => {
    const getData = userdata.getUserInfo();
    modalNameInput.value = getData.name;
    modalDescriptionInput.value = getData.job;
    editFormPopup.open();

});



// class instances and initializations for validation
const editFormValidator = new FormValidator(formSettings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formSettings, addForm);
addFormValidator.enableValidation();

renderInitialCards.renderItems();



//class initializations for open and closing popups

cardImagePreview.setEventListeners();

editFormPopup.setEventListeners();

addCardPopup.setEventListeners();