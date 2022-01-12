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
import PopupWithDelete from "../components/PopupWithDelete.js";


const editModal = document.querySelector('.modal_type_edit-profile');
const editForm = editModal.querySelector('.form');
const addModal = document.querySelector('.modal_type_add-card');
const addForm = addModal.querySelector('.form');
const profilePictureModal = document.querySelector('.modal_type_update-profile-picture');
const profilePictureForm = profilePictureModal.querySelector('.form');
const deleteModal = document.querySelector('.modal_type_delete-confirmation');

const editModalButton = document.querySelector('.profile__button');
const addModalButton = document.querySelector('.profile__card-button');
const profilePictureEditButton = document.querySelector('.profile__image-button');



const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__about-me');
const profileImage = document.querySelector('profile__image');
const modalNameInput = document.querySelector('.form__input_type_name');
const modalDescriptionInput = document.querySelector('.form__input_type_description');
const modalProfilePicture = document.querySelector('.form__input_type_profile-image-link');

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

const deleteCardPopup = new PopupWithDelete({
    popupElement: deleteModal,
    handleFormSubmission: (cardId, cardElement) => {
        
        api.deleteCard(cardId)
            .then(() => {
                cardElement.remove()
            })
            .then(() => {
                console.log(cardId);
                deleteCardPopup.close()
            })



            .catch(err => console.log(`Error: ${err}`))
    }
});

function createCard(item) {
    const card = new Card({
        data: item,
        handleClick: (data) => cardImagePreview.open(data),
        userId: userData.getUserId(),
        openDeleteModalHandler: function openDeleteModalHandler() {
            deleteCardPopup.open(item._id, cardElement);
            deleteCardPopup.setEventListeners();
        },
        handleLike: function handleLike() {
            if(this._likeButton.classList.contains("destination__like-button_active")) {
                api.deleteLike(item._id)
                .then((data) => this.updateLikeCount(data))
                .catch(err => console.log(`Error: ${err}`))
            } else {
                api.addLike(item._id)
                .then((data) => this.updateLikeCount(data))
                .catch(err => console.log(`Error: ${err}`))
            }
        }
    },
     '#destination-template');
    const cardElement = card.generateCard();
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

const userData = new UserInfo({
    userNameSelector: profileName,
    userJobSelector: profileTitle,
    userAvatarSelector: profileImage

});

api.getUserInfo()
    .then((data) => {
        console.log(data);
        userData.setUserInfo({
            name: data.name,
            job: data.about,
            _id: data._id,
            avatar: data.avatar
        })
    })
    .then((userData) => {
        console.log(userData);
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
                    avatar: data.avatar
                });
                editFormPopup.close();
            })

            .catch(err => console.log(`Error: ${err}`));
    }
});

const editProfilePicturePopup = new PopupWithForm({
    popupElement: profilePictureModal,
    handleFormSubmission: (data) => {
        api.editProfilePicture(data).then(data => {
                userData.setProfilePicture({
                    avatar: data.avatar
                });

                editProfilePicturePopup.close();
            })

            .catch(err => console.log(`Error: ${err}`));
            console.log(data.avatar);
    } 
});

const cardImagePreview = new PopupWithImage(elements.imagePopup);


addModalButton.addEventListener('click', () => {
    addFormValidator.resetValidation();
    addCardPopup.open();
});

editModalButton.addEventListener('click', () => {
    const getData = userData.getUserInfo();
    modalNameInput.value = getData.name;
    modalDescriptionInput.value = getData.job;
    editFormValidator.resetValidation();
    editFormPopup.open();

});

profilePictureEditButton.addEventListener('click', () => {
    // const pictureData = userData.setProfilePicture()
    EditProfilePictureValidator.resetValidation();
    // modalProfilePicture.src = pictureData.avatar;
    editProfilePicturePopup.open();

});


// class instances and initializations for validation
const editFormValidator = new FormValidator(formSettings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formSettings, addForm);
addFormValidator.enableValidation();

const EditProfilePictureValidator = new FormValidator(formSettings, profilePictureForm);
EditProfilePictureValidator.enableValidation();


//class initializations for open and closing popups

cardImagePreview.setEventListeners();

editFormPopup.setEventListeners();

addCardPopup.setEventListeners();

editProfilePicturePopup.setEventListeners();