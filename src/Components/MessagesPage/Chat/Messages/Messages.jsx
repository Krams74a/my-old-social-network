import s from "./Messages.module.css";

const Messages = (props) => {
    return (
        <div className={s.messagesContainer}>
            {props.messagesElements}
        </div>
    );
}

export default Messages;