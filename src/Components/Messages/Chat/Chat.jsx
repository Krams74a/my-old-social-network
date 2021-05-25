import s from './Chat.module.css';
import Message from "./Message/Message";
import React from "react";
import AddMessage from "./AddMessage/AddMessage";

const Chat = (props) => {

    let messagesElements = props.state.messages.messagesInfo.map(m => <Message message={m.message} imgUrl={m.userUrl}/>)

    return (
        <div className={s.chat}>
            <div className={s.messagesContainer}>
                {messagesElements}
            </div>
            <div className={s.textareaContainer}>
                <AddMessage state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Chat;