const modalElement = document.querySelector('.modal');
const modalBttnElement = document.querySelector('.profile__button');
const modalBttnClose = document.querySelector('.modal__close-button');
const modalFormElement = document.querySelector('.form');
const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__about-me');
const modalNameInput = document.querySelector('#modal-name-input');
const modaltitleInput = document.querySelector('#modal-title-input');

function openModal() {
    modalElement.classList.add('modal_open');
    modalNameInput.value = profileName.textContent;
    modaltitleInput.value = profileTitle.textContent;
}

function closeModal() {
    modalElement.classList.remove('modal_open');
}

function saveModal(e) {
    e.preventDefault();
    profileName.textContent = modalNameInput.value;
    profileTitle.textContent = modaltitleInput.value;
    closeModal();
}

modalBttnElement.addEventListener('click', openModal);

modalBttnClose.addEventListener('click', closeModal);

modalFormElement.addEventListener('submit', saveModal);