import s from './DialogsList.module.css';
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = () => {
    let dialogs = [
        {id: 1, name: "Максим Ветлугин", imgUrl: "https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album"},
        {id: 2, name: "Иван Новиков", imgUrl: "https://vk.com/images/camera_200.png"},
        {id: 3, name: "Денис Дан", imgUrl: "https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album"},
        {id: 4, name: "Василий Глазырин", imgUrl: "https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album"},

    ];

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} imgUrl={d.imgUrl}/>)

    return (
        <div className={s.dialogsList}>
            { dialogsElements }
        </div>
    );
}

export default DialogsList;