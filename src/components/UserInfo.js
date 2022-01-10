export default class UserInfo {
    constructor({
        userNameSelector,
        userJobSelector,
    }) {
        this._userName = userNameSelector;
        this._userJob = userJobSelector;
    }

    getUserInfo() {

        return {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        }

    }

    setUserInfo({
        name,
        job,
        _id
    })

    {

        this._userName.textContent = name;
        this._userJob.textContent = job;
        this._id = _id;
    }

    getUserId() {

        return this._id;
    }


}