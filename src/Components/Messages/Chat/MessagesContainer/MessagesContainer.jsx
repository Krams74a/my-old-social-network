import s from "./MessagesContainer.module.css";
import Message from "../Message/Message";

const MessagesContainer = (props) => {

    let messagesElements = props.state.messages.messagesInfo.map(m => <Message message={m.message} imgUrl={m.userUrl}/>)

    return (
        <div className={s.messagesContainer}>
            {messagesElements}
        </div>
    );
}

export default MessagesContainer;