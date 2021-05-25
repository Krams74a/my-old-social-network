import s from './Chat.module.css';
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

const Chat = (props) => {

    let messagesElements = props.state.messages.messagesInfo.map(m => <Message message={m.message} imgUrl={m.userUrl}/>)
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.chat}>
            { messagesElements }
            <div>
                <textarea onChange={updateNewMessageText} ref={newMessageElement} value={props.state.messages.newMessageText}/>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>


    );
}

export default Chat;