import './index.css';

import {
    selectors,
    formSettings,
    initialCards
} from "./constants.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import { PopupWithForm } from "./PopupWithForm.js";
import {
    PopupWithImage
} from "./PopupWithImage.js";
import {
    openModalWindow,
    closeModalWindow
} from "./Utils.js";
import UserInfo from "./UserInfo.js";


const destinations = document.querySelector('.destinations');

const modal = document.querySelector('.modal');
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


const editFormPopup = new PopupWithForm({
    popupSelector: document.querySelector('.modal_type_edit-profile'),
    handleFormSubmission: (data) => {
      const userData = new UserInfo({userNameSelector: profileName, userJobSelector: profileTitle});
      userData.getUserInfo({userNameSelector: modalNameInput, userJobSelector: modalDescriptionInput});
    }
    
  });

  editModalButton.addEventListener('click', () => {
    editFormPopup.open();
  });


const cardImagePreview = new PopupWithImage(selectors.imagePopup);

const renderInitialCards = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card({
            data: item,
            handleClick: (data) => cardImagePreview.open(data)
        }, '#destination-template');
        const cardElement = card.generateCard();
        renderInitialCards.addItem(cardElement);

    }
}, ".destinations");





// class instances and initializations for validation
const editFormValidator = new FormValidator(formSettings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formSettings, addForm);
addFormValidator.enableValidation();

renderInitialCards.renderItems();



//class initializations for open and closing popups

cardImagePreview.setEventListeners();

editFormPopup.setEventListeners();

