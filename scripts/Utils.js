const addModal = document.querySelector('.modal_type_add-card');
const editModal = document.querySelector('.modal_type_edit-profile');

const editModalCloseButton = editModal.querySelector('.modal__close-button');
const addModalCloseButton = addModal.querySelector('.modal__close-button');

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

addModalCloseButton.addEventListener('click', () => closeModalWindow(addModal));
editModalCloseButton.addEventListener('click', () => closeModalWindow(editModal));

export {openModalWindow, closeModalWindow, escapeModalWindow}