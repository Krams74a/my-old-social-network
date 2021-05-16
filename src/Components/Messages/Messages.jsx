import s from './Messages.module.css';
import DialogsList from "./DialogsList/DialogsList";
import Chat from "./Chat/Chat";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <DialogsList dialogsInfo={props.state.dialogsInfo}/>
            <Chat messagesInfo={props.state.messagesInfo}/>
        </div>
    );
}

export default Messages;