import s from './Chat.module.css';
import Message from "./Message/Message";
import React from "react";
import AddMessage from "./AddMessage/AddMessage";
import MessagesContainer from "./MessagesContainer/MessagesContainer";

const Chat = (props) => {
    return (
        <div className={s.chat}>
            <MessagesContainer state={props.state}/>
            <div className={s.textareaContainer}>
                <AddMessage state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Chat;