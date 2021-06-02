import s from "./UserItem.module.css";
import React from "react";
import userPhoto from "../../../assets/images/user.jpg"

const UserItem = (props) => {
    return (
        <div className={s.userItem}>
            <div className={s.userImageDiv}>
                <img alt="No file" src={props.photos.small !== null ? props.photos.small : userPhoto}/>
            </div>
            <div className={s.userInfoDiv}>
                <div className={s.userNameDiv}>
                    <a href="#s">{props.name}</a>
                </div>
                <div className={s.userDescriptionDiv}>
                    <p>{props.userCity + ", " + props.userAge + " лет"}</p>
                </div>
            </div>
            <div className={s.subscribeButtonDiv}>
                {props.followed ? <button onClick={() => {
                    props.removeFriend(props.id)
                }}>Удалить из друзей</button> : <button onClick={() => {
                    props.addFriend(props.id)
                }}>Добавить в друзья</button>}

            </div>
        </div>
    );
}

export default UserItem;