import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost} from "./redux/state";
import React from "react";
import {updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}