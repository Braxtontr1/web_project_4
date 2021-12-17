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

export {
    openModalWindow,
    closeModalWindow,
}