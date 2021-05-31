import s from "./AddMessage.module.css";
import React from "react";

const AddMessage = (props) => {

    let addMessage = () => {
        if (props.value !== "") {
            props.addMessage();
        }
    }

    let updateNewMessageText = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.addMessage}>
            <div className={s.textareaContainer}>
                <textarea onChange={updateNewMessageText} value={props.value}
                              placeholder="Напишите сообщение..."/>
            </div>
            <div className={s.buttonContainer}>
                <button className="fa fa-paper-plane" onClick={addMessage}> Отправить</button>
            </div>
        </div>
    );
}

export default AddMessage;