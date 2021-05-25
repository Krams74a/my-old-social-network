import s from './Messages.module.css';
import DialogsList from "./DialogsList/DialogsList";
import Chat from "./Chat/Chat";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <DialogsList state={props.state}/>
            <Chat state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default Messages;