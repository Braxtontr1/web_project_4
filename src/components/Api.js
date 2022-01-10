import {
    data
} from "autoprefixer";

export default class Api {
    constructor({
        baseUrl,
        authToken
    }) {
        this._baseUrl = baseUrl;
        this._authToken = authToken;
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: {
                    authorization: this._authToken
                }
            })
            .then(this._isOk);
    }

    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: {
                    authorization: this._authToken
                },
                method: "GET"
            })
            .then(this._isOk);
    }

    createCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
                method: "POST",
                headers: {
                    authorization: this._authToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.title,
                    link: data.image
                })
            })
            .then(res => this._isOk(res));
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
                method: "DELETE",
                headers: {
                    authorization: this._authToken,
                    "Content-Type": "application/json"
                }
            })
            .then(res => this._isOk(res));
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: "PUT",
                headers: {
                    authorization: this._authToken,
                    "Content-Type": "application/json"
                }
            })
            .then(res => this._isOk(res));
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: "DELETE",
                headers: {
                    authorization: this._authToken,
                    "Content-Type": "application/json"
                }
            })
            .then(res => this._isOk(res));
    }

    _isOk(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    }

    editProfile(data) {
        return fetch(`${this._baseUrl}/users/me`, {
                method: "PATCH",
                headers: {
                    authorization: this._authToken,
                    "content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: data.name,
                    about: data.job
                })
            })

            .then(res => this._isOk(res));
    }
}