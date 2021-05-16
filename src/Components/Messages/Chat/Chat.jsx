import s from './Chat.module.css';
import Message from "./Message/Message";
import React from "react";

const Chat = (props) => {

    let messagesElements = props.messagesInfo.map(m => <Message message={m.message} imgUrl={m.userUrl}/>)

    let newMessageElement = React.createRef();
    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.chat}>
            { messagesElements }
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={newMessage}>Отправить</button>
            </div>
        </div>


    );
}

export default Chat;