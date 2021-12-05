const addModal = document.querySelector('.modal_type_add-card');
const editModal = document.querySelector('.modal_type_edit-profile');
const previewModal = document.querySelector('.modal_type_image');

const editModalCloseButton = editModal.querySelector('.modal__close-button');
const addModalCloseButton = addModal.querySelector('.modal__close-button');
const previewModalCloseButton = previewModal.querySelector('.modal__close-button');
const editModalButton = document.querySelector('.profile__button');
const addModalButton = document.querySelector('.profile__card-button');

function escapeModalWindow(evt) {
    if (evt.key === 'Escape') {
        const openedModal = document.querySelector('.modal_open')
        closeModalWindow(openedModal);
    }
}

function stopEscapeModalListener() {
    document.removeEventListener('keydown', escapeModalWindow);
}

function openModalWindow(modalWindow) {
    modalWindow.classList.add('modal_open');
    document.addEventListener('keydown', escapeModalWindow);
}

function closeModalWindow(modalWindow) {
    modalWindow.classList.remove('modal_open');
    stopEscapeModalListener();
}

addModalButton.addEventListener('click', () => openModalWindow(addModal));

addModalCloseButton.addEventListener('click', () => closeModalWindow(addModal));
editModalCloseButton.addEventListener('click', () => closeModalWindow(editModal));
previewModalCloseButton.addEventListener('click', () => closeModalWindow(previewModal));

export {openModalWindow, closeModalWindow}