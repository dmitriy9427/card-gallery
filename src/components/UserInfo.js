export class UserInfo
{
    constructor (profileTitleSelector, profileSubtitleSelector)
    {
        this._title = document.querySelector(profileTitleSelector);
        this._subtitle = document.querySelector(profileSubtitleSelector);
    }
    //возвращаю объект с данными пользователя
    getUserInfo()
    {
        return {
            title: this._title.textContent,
            subtitle: this._subtitle.textContent

        }
    }

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({ name, link })
    {
        this._title.textContent = name;
        this._subtitle.textContent = link;
    }
}