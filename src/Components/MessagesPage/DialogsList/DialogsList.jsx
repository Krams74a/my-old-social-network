import s from './DialogsList.module.css';

const DialogsList = (props) => {

    return (
        <div className={s.dialogsList}>
            { props.dialogsElements }
        </div>
    );
}

export default DialogsList;