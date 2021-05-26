import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.messageContainer}>
            <div className={s.userImageContainer}>
                <img src={props.imgUrl}/>
            </div>
            <div className={s.userName}>
                <a href="">Иван</a>
            </div>
            <div className={s.messageText}>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Message;