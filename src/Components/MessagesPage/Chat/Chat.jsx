import s from './Chat.module.css';
import React from "react";
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Chat = () => {
    return (
        <div className={s.chat}>
            <MessagesContainer/>
            <div className={s.textareaContainer}>
                <AddMessageContainer/>
            </div>
        </div>
    );
}

export default Chat;