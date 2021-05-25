import s from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
    let friendsElements = props.state.sidebar.friendsInfo.map(f => <FriendItem friendName={f.name} friendImgUrl={f.imgUrl}/>)
    return (
        <div>
            <div className={s.friendsContainer}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;