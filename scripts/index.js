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

const destinationTemplate = document.querySelector('#destination-template').content.querySelector('.destination');
const destinations = document.querySelector('.destinations');

const page = document.querySelector('.page');
const editModal = document.querySelector('.modal_type_edit-profile');
const editForm = editModal.querySelector('.form');
const addModal = document.querySelector('.modal_type_add-card');
const addForm = addModal.querySelector('.form');
const previewModal = document.querySelector('.modal_type_image');

const editModalButton = document.querySelector('.profile__button');
const addModalButton = document.querySelector('.profile__card-button');
const editModalCloseButton = editModal.querySelector('.modal__close-button');
const addModalCloseButton = addModal.querySelector('.modal__close-button');

const previewModalCloseButton = previewModal.querySelector('.modal__close-button');
const previewModalImage = previewModal.querySelector('.modal__image');
const previewModalTitle = previewModal.querySelector('.modal__image-title');

const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__about-me');
const modalNameInput = document.querySelector('.form__input_type_name');
const modalDescriptionInput = document.querySelector('.form__input_type_description');

const cardTitle = document.querySelector('.destination__title');
const cardImage = document.querySelector('.destination__image');
const modalCardTitle = document.querySelector('.form__input_type_title');
const modalImageLink = document.querySelector('.form__input_type_image-link');



// // functions

function prefillEditProfileForm() {
    modalNameInput.value = profileName.textContent;
    modalDescriptionInput.value = profileTitle.textContent;
}

function openModalWindow(modalWindow) {
    modalWindow.classList.add('modal_open');
}

function closeModalWindow(modalWindow) {
    modalWindow.classList.remove('modal_open');
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = modalNameInput.value;
    profileTitle.textContent = modalDescriptionInput.value;
    closeModalWindow(editModal);
}

function previewImage(card) {
    previewModalImage.src = card.image;
    previewModalImage.alt = card.title;
    previewModalTitle.textContent = card.title;
    openModalWindow(previewModal);
}

function generateCard(card) {

    const cardEl = destinationTemplate.cloneNode(true);
    const cardImage = cardEl.querySelector('.destination__image');
    const deleteBttn = cardEl.querySelector('.destination__delete-button');
    const likeButton = cardEl.querySelector('.destination__like-button');

    cardEl.querySelector('.destination__title').textContent = card.title;
    cardEl.querySelector('.destination__image').src = card.image;
    cardEl.querySelector('.destination__image').alt = card.title;

    deleteBttn.addEventListener('click', function () {
        const cardDelete = deleteBttn.closest('.destination');
        cardDelete.remove();
    });

    cardImage.addEventListener('click', () => previewImage(card));

    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('destination__like-button_active');
    });


    return cardEl;
}

function addFormSubmitHandler(evt) {
    evt.preventDefault();
    const card = {
        title: modalCardTitle.value,
        image: modalImageLink.value,
    };
    const cardEl = generateCard(card);
    destinations.prepend(cardEl);
    closeModalWindow(addModal);
    addForm.reset();
}

function escapeModalWindow(evt) {
    if (evt.key === 'Escape') {
        document.querySelectorAll('.modal').forEach((item) => {
            closeModalWindow(item);
        });
    };
};

function closeModalOverlay(evt) {
    if (evt.target.classList.contains('modal')) {
        closeModalWindow(evt.target);
    };


};


// Event Listeners

editForm.addEventListener('submit', editFormSubmitHandler);
editModalButton.addEventListener('click', () => {
    prefillEditProfileForm(editModal);
    openModalWindow(editModal);
});


editModal.addEventListener('click', closeModalOverlay);
addModal.addEventListener('click', closeModalOverlay);
previewModal.addEventListener('click', closeModalOverlay);


addForm.addEventListener('submit', addFormSubmitHandler);
addModalButton.addEventListener('click', () => openModalWindow(addModal));


addModalCloseButton.addEventListener('click', () => closeModalWindow(addModal));
editModalCloseButton.addEventListener('click', () => closeModalWindow(editModal));
previewModalCloseButton.addEventListener('click', () => closeModalWindow(previewModal));


page.addEventListener('keydown', escapeModalWindow);
// // actions

initialCards.forEach((card) => {
    cardEl = generateCard(card);
    destinations.append(cardEl);
});