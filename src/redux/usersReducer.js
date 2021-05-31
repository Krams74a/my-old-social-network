const ADD_FRIEND = "ADD_FRIEND";

let initialState = {
    usersInfo: [
        {
            id: 1,
            userImg: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",
            userName: "Максим Ветлугин",
            userCity: "Москва",
            userAge: "15",
            isFriend: false
        },
        {
            id: 2,
            userImg: "https://vk.com/images/camera_200.png",
            userName: "Иван Новиков",
            userCity: "Омск",
            userAge: "17",
            isFriend: false
        },
        {
            id: 3,
            userImg: "https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album",
            userName: "Василий Глазырин",
            userCity: "Челябинск",
            userAge: "17",
            isFriend: false
        },
        {
            id: 4,
            userImg: "https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album",
            userName: "Денис Дан",
            userCity: "Тверь",
            userAge: "35",
            isFriend: false
        },
        {
            id: 5,
            userImg: "https://sun9-12.userapi.com/impf/c849320/v849320227/1c9896/-WXxGlQ1818.jpg?size=450x600&quality=96&sign=92e2be87652a184ec61335ba95c92c8d&type=album",
            userName: "Александра Маркова",
            userCity: "Москва",
            userAge: "18",
            isFriend: false
        },
        {
            id: 6,
            userImg: "https://sun9-61.userapi.com/impg/-Gzq6F_XfIUScPZ5X1yuk_KX_Tr1BMB4uBdo_w/MSpmQ-xE4hU.jpg?size=1280x1279&quality=96&sign=b2b9f20a34f7b3e18ab6e31649d0ebd0&type=album",
            userName: "Валерия Шаталова",
            userCity: "Санкт-Петербург",
            userAge: "20",
            isFriend: false
        }
    ]
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                usersInfo: [...state.usersInfo[action.id].isFriend = true],
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (id) => ({type: ADD_FRIEND, id: id})

export default usersReducer;