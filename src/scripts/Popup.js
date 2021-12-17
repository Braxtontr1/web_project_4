import { selectors } from "./constants.js";

export default class Popup {
    constructor(popupSelector) {
        this._popupElement = popupSelector;
        this._handleEscapeClose = this._handleEscapeClose.bind(this);
    }

    _handleEscapeClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('modal_open')) {
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