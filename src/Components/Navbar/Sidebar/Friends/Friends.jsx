import s from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
    console.log(props);
    let friendsElements = props.friendsInfo.map(f => <FriendItem friendName={f.name} friendImgUrl={f.imgUrl}/>)
    console.log(friendsElements);
    return (
        <div>
            <div className={s.friendsContainer}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;