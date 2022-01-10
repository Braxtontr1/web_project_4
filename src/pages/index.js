import './index.css';

import {
    elements,
    formSettings,
    initialCards
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
    PopupWithImage
} from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";


const editModal = document.querySelector('.modal_type_edit-profile');
const editForm = editModal.querySelector('.form');
const addModal = document.querySelector('.modal_type_add-card');
const addForm = addModal.querySelector('.form');
const deleteModal = document.querySelector('.modal_type_delete-confirmation');
const deleteConfirmation = deleteModal.querySelector('.form');

const editModalButton = document.querySelector('.profile__button');
const addModalButton = document.querySelector('.profile__card-button');
const deleteButton = document.querySelector('.destination__delete-button');



const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__about-me');
const modalNameInput = document.querySelector('.form__input_type_name');
const modalDescriptionInput = document.querySelector('.form__input_type_description');

const config = {
    baseUrl: `https://around.nomoreparties.co/v1/group-12`,
    authToken: "9b1558af-91ea-493b-ada9-7496ba6fa8e8"
}


const api = new Api(config);

// function intitialCards(res) {
//     const renderInitialCards = new Section({
//         items: res,
//         userId: userData.getUserId(res),
//         renderer: (res) => {
//             renderInitialCards.addItem(createCard(res));

//         }
//     }, ".destinations");
//     // console.log(renderInitialCards);
//     renderInitialCards.renderItems(res);
// }

// api.getCards().then((res) => {

//     intitialCards(res);


// })

api.getCards().then((res) => {
    const renderInitialCards = new Section({
        items: res,
        renderer: (res) => {
            renderInitialCards.addItem(createCard(res));

        }
    }, ".destinations");

    renderInitialCards.renderItems(res);
})

//functions

const deleteCardPopup = new PopupWithConfirmation({
    popupElement: deleteModal,
    handleFormSubmission: (cardId, cardElement) => {
        api.deleteCard(cardId)
            .then(() => {
                cardElement.remove()
            })
            .then(() => {
                deleteCardPopup.close()
            })


            .catch(err => console.log(`Error: ${err}`));
    }
});

function createCard(data) {
    const card = new Card({
        data: data,
        handleClick: (data) => cardImagePreview.open(data),
        userId: userData.getUserId(),
        openDeleteModalHandler: function openDeleteModalHandler(data) {deleteCardPopup.open(data, cardElement)},
    }, '#destination-template');
    const cardElement = card.generateCard();
    console.log(data._id);
    return cardElement;

}

// class instances for Popups

const addCardPopup = new PopupWithForm({
    popupElement: addModal,
    handleFormSubmission: (item) => {
        const addNewCard = new Section({
            items: item,
            renderer: (item) => {
                addNewCard.prependItem(createCard(item));
            }
        }, '.destinations');
        api.createCard(item);
    }

});

// const deleteCardPopup = new PopupWithConfirmation({
//     popupElement: deleteModal,
//     handleFormSubmission: (cardId, cardElement) => {
//         api.deleteCard(cardId)
//             .then(() => {
//                 cardElement.remove()
//             })
//             .then(() => {
//                 deleteCardPopup.close()
//             })


//             .catch(err => console.log(`Error: ${err}`));
//     }
// });

const userData = new UserInfo({
    userNameSelector: profileName,
    userJobSelector: profileTitle,

});

api.getUserInfo()
    .then((data) => {
        userData.setUserInfo({
            name: data.name,
            job: data.about,
            _id: data._id
        })
    })
    .catch(err => console.log(`Error: ${err}`));


const editFormPopup = new PopupWithForm({
    popupElement: editModal,
    handleFormSubmission: (data) => {
        api.editProfile(data).then(data => {
                userData.setUserInfo({
                    name: data.name,
                    job: data.about,
                    id: data._id,
                });
                editFormPopup.close();
            })

            .catch(err => console.log(`Error: ${err}`));
    }
});

console.log(userData._id);
const cardImagePreview = new PopupWithImage(elements.imagePopup);


addModalButton.addEventListener('click', () => {
    addFormValidator.resetValidation();
    addCardPopup.open();
});

editModalButton.addEventListener('click', () => {
    const getData = userData.getUserInfo();
    modalNameInput.value = getData.name;
    const getId = userData.getUserId();
    modalDescriptionInput.value = getData.job;
    editFormValidator.resetValidation();
    editFormPopup.open();

});


// class instances and initializations for validation
const editFormValidator = new FormValidator(formSettings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formSettings, addForm);
addFormValidator.enableValidation();


//class initializations for open and closing popups

cardImagePreview.setEventListeners();

editFormPopup.setEventListeners();

addCardPopup.setEventListeners();

deleteCardPopup.setEventListeners();