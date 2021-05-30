const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesInfo: [
        {
            id: 1,
            userUrl: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",
            message: "Ссд хоть как лучше , жесткий сейчас он не всегда нужен, он только если нужно хранить большие объемы данных, а ссд на 240 500 гб на пару лет перезаписей хватит"
        },
        {
            id: 2,
            userUrl: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",
            message: "Привчедел"
        },
    ],
    dialogsInfo: [
        {
            id: 1,
            name: "Максим Ветлугин",
            imgUrl: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album"
        },
        {
            id: 2,
            name: "Иван Новиков",
            imgUrl: "https://vk.com/images/camera_200.png"
        },
        {
            id: 3,
            name: "Денис Дан",
            imgUrl: "https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album"
        },
        {
            id: 4,
            name: "Василий Глазырин",
            imgUrl: "https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album"
        },
        {
            id: 5,
            name: "Александра Маркова",
            imgUrl: "https://sun9-12.userapi.com/impf/c849320/v849320227/1c9896/-WXxGlQ1818.jpg?size=450x600&quality=96&sign=92e2be87652a184ec61335ba95c92c8d&type=album"
        },
        {
            id: 6,
            name: "Валерия Шаталова",
            imgUrl: "https://sun9-61.userapi.com/impg/-Gzq6F_XfIUScPZ5X1yuk_KX_Tr1BMB4uBdo_w/MSpmQ-xE4hU.jpg?size=1280x1279&quality=96&sign=b2b9f20a34f7b3e18ab6e31649d0ebd0&type=album"
        },
    ],
    newMessageText: ''
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                userUrl: "https://vk.com/images/camera_200.png",
                userName: "Иван Новиков"
            };
            return {
                ...state,
                newMessageText: "",
                messagesInfo: [...state.messagesInfo, newMessage]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messagesReducer;