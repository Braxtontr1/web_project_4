const modalElement = document.querySelector('.modal');
const modalBttnElement = document.querySelector('#modal-open-button');
const modalBttnClose = document.querySelector('#modal-close');
const modalFormElement = document.querySelector('#modal-edit-form');
const modalNameInput = document.querySelector('#modal-name-input');
const modaltitleInput = document.querySelector('#modal-title-input');
const profileName = document.querySelector('#profile-name');
const profileTitle = document.querySelector('#profile-title');

function openModal() {
    modalElement.classList.add('modal_open');
}

function closeModal() {
    modalElement.classList.remove('modal_open');
}

modalBttnElement.addEventListener('click', openModal);

modalBttnClose.addEventListener ('click', closeModal);

modalFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    profileName.textContent = modalNameInput.value;
    profileTitle.textContent = modaltitleInput.value;
    closeModal();
});
