import s from "./UserItem.module.css";
import React from "react";

const UserItem = (props) => {
    return (
        <div className={s.userItem}>
            <div className={s.userImageDiv}>
                <img alt="No file" src={props.userImg} />
            </div>
            <div className={s.userInfoDiv}>
                <div className={s.userNameDiv}>
                    <a href="#s">{props.userName}</a>
                </div>
                <div className={s.userDescriptionDiv}>
                    <p>{props.userCity + ", " + props.userAge + " лет"}</p>
                </div>
            </div>
            <div className={s.subscribeButtonDiv}>
                <button>Добавить в друзья</button>
            </div>
        </div>
    );
}

export default UserItem;