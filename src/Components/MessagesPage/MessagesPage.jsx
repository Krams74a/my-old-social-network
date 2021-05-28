import s from './MessagesPage.module.css';
import Chat from "./Chat/Chat";
import DialogsListContainer from "./DialogsList/DialogsListContainer";

const MessagesPage = () => {
    return (
        <div className={s.messages}>
            <DialogsListContainer/>
            <Chat/>
        </div>
    );
}

export default MessagesPage;