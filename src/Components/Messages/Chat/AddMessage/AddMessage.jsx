import s from "./AddMessage.module.css";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/state";

const AddMessage = (props) => {

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let updateNewMessageText = (event) => {
        let text = event.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.addMessage}>
            <div>
                    <textarea onChange={updateNewMessageText} value={props.state.messages.newMessageText}
                              placeholder="Отправьте сообщение..."/>
            </div>
            <div className={s.buttonContainer}>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default AddMessage;