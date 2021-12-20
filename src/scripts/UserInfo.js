import { selectors } from "./constants";

export default class UserInfo {
    constructor({
        userNameSelector,
        userJobSelector
    }) {
        this._userName = userNameSelector;
        this._userJob = userJobSelector;
    }

    getUserInfo() {

        console.log({
            name: this._userName.textContent,
            job: this._userJob.textContent
        });

        return {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        }

    }

    setUserInfo({
        profileName,
        profileTitle
    })

    {

        this._userName.textContent = profileName;
        this._userJob.textContent = profileTitle;
    }


}