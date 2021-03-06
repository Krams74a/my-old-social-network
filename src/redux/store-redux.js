import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;