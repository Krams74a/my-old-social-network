import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.userImage}>
                <img src={props.imgUrl} />
            </div>
            <div className={s.messageContainer}>
                <div className={s.messageText}>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    );
}

export default Message;