import s from "./AddMessage.module.css";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagesReducer";

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
            <div className={s.textareaContainer}>
                <textarea onChange={updateNewMessageText} value={props.state.messages.newMessageText}
                              placeholder="Напишите сообщение..."/>
            </div>
            <div className={s.buttonContainer}>
                <button className="fa fa-paper-plane" onClick={addMessage}> Отправить</button>
            </div>
        </div>
    );
}

export default AddMessage;