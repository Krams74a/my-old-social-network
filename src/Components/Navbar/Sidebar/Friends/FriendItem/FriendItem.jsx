import s from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={s.friendItem}>
            <div className={s.friendImg}>
                <img src={props.friendImgUrl} />
            </div>
            <div className={s.friendName}>
                <span>{props.friendName}</span>
            </div>
        </div>
    )
}

export default FriendItem;