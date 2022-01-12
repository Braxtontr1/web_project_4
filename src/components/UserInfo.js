export default class UserInfo {
    constructor({
        userNameSelector,
        userJobSelector,
        userAvatarSelector
    }) {
        this._userName = userNameSelector;
        this._userJob = userJobSelector;
        this._avatar = userAvatarSelector;
    }

    getUserInfo() {

        return {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        }

    }

    setProfilePicture({
        avatar
    }) {
        this._avatar.src = avatar;
    }

    setUserInfo({
        name,
        job,
        _id,
        avatar
    })

    {

        this._userName.textContent = name;
        this._userJob.textContent = job;
        this._id = _id;
        this._avatar.src = avatar;
        this._avatar.alt = name;

    }

    getUserId() {

        return this._id;
    }


}