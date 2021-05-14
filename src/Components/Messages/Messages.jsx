import s from './Messages.module.css';
import DialogsList from "./DialogsList/DialogsList";
import Chat from "./Chat/Chat";

const Messages = () => {
    return (
        <div className={s.messages}>
            <DialogsList />
            <Chat />
        </div>
    );
}

export default Messages;