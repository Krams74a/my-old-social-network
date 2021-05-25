const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export let store = {
    _state: {
        profile: {
            postsInfo: [
                {id: 1, userImg: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album", userName: "Максим Ветлугин", message: "На ссд лучше всего игры держать так же как и систему , и больше проекты чтоб работа с ними была быстрее а на жестком важные файлы и просто какие-то файлы чтоб не забивать ссд", postImage:"https://sun1.is74.userapi.com/impg/bxZj91ROk6XQ7TjDeLnyFjfqL21Ndbna8xO8oA/2I4InhKUC_Y.jpg?size=537x358&quality=96&sign=d93e1df50bd9a80ae2334156d1878cc2&type=album"},
                {id: 2, userImg: "https://vk.com/images/camera_200.png", userName: "Иван Новиков", message: "Привчедел"},
                {id: 3, userImg: "https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album", userName: "Василий Глазырин", message: "сука как поворачивать в ворлд едит если я не знаю градусы"},
                {id: 4, userImg: "https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album", userName: "Денис Дан", message: "если шо я беседу не читал, там вопрос шо лучше ссд или хдд, что отвечать если я считаю что один под одно другой под другое"}
            ],
            newPostText: '',
            trendsInfo: [
                {name: "#ABOBA", mentionsCount: 7},
                {name: "#КонецБиткоина", mentionsCount: 1000},
                {name: "#НоваяСоцсеть", mentionsCount: 153},
                {name: "#Привчёдел", mentionsCount: 15},
            ],
        },
        messages: {
            messagesInfo: [
                {id:"1", userUrl:"https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",message:"Ссд хоть как лучше , жесткий сейчас он не всегда нужен, он только если нужно хранить большие объемы данных, а ссд на 240 500 гб на пару лет перезаписей хватит"},
                {id:"1", userUrl:"https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",message:"Привчедел"},
            ],
            dialogsInfo: [
                {id: 1, name: "Максим Ветлугин", imgUrl: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album"},
                {id: 2, name: "Иван Новиков", imgUrl: "https://vk.com/images/camera_200.png"},
                {id: 3, name: "Денис Дан", imgUrl: "https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album"},
                {id: 4, name: "Василий Глазырин", imgUrl: "https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album"},
            ],
            newMessageText: ''
        },
        sidebar: {
            friendsInfo: [
                {id: 1, name: "Максим Ветлугин", imgUrl: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album"},
                {id: 2, name: "Иван Новиков", imgUrl: "https://vk.com/images/camera_200.png"},
                {id: 3, name: "Денис Дан", imgUrl: "https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album"},
                {id: 4, name: "Василий Глазырин", imgUrl: "https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album"},
                {id: 5, name: "Иван Новиков", imgUrl: "https://vk.com/images/camera_200.png"},
                {id: 6, name: "Денис Дандан", imgUrl: "https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album"},
            ],
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("No subscribers");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profile.newPostText,
                likesCount: 0,
                userImg: "https://vk.com/images/camera_200.png",
                userName: "Иван Новиков",
            };

            this._state.profile.newPostText = "";
            this._state.profile.postsInfo.push(newPost);
            this._callSubscriber(this.state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this.state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.messages.newMessageText,
                userUrl: "https://vk.com/images/camera_200.png",
                userName: "Иван Новиков"
            };
            this._state.messages.newMessageText = "";
            this._state.messages.messagesInfo.push(newMessage);
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messages.newMessageText = action.newText;
            this._callSubscriber(this.state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default store;