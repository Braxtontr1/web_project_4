

export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._handleEscapeClose = this._handleEscapeClose.bind(this);
    }

    _handleEscapeClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.querySelector(".modal__close-button").addEventListener('click', () => {
            this.close();
        });

        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('modal_open')) {
                this.close();
            }
        });
    }

    open() {
        this._popupElement.classList.add('modal_open');
        document.addEventListener('keydown', this._handleEscapeClose);
    }

    close() {
        this._popupElement.classList.remove('modal_open');
        document.removeEventListener('keydown', this._handleEscapeClose);

    }
}