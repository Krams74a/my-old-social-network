import s from './DialogsList.module.css';
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = (props) => {

    let dialogsElements = props.state.messages.dialogsInfo.map(d => <DialogItem id={d.id} name={d.name} imgUrl={d.imgUrl}/>)

    return (
        <div className={s.dialogsList}>
            { dialogsElements }
        </div>
    );
}

export default DialogsList;