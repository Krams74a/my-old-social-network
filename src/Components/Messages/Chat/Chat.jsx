import s from './Chat.module.css';
import Message from "./Message/Message";

const Chat = () => {

    let messages = [
        {id:"1", userUrl:"https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",message:"Ссд хоть как лучше , жесткий сейчас он не всегда нужен, он только если нужно хранить большие объемы данных, а ссд на 240 500 гб на пару лет перезаписей хватит"},

    ];

    let messagesElements = messages.map(m => <Message message={m.message} imgUrl={m.userUrl}/>)

    return (
        <div className={s.chat}>
            { messagesElements }
        </div>
    );
}

export default Chat;