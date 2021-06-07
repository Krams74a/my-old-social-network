import s from "./UserItem.module.css";
import React from "react";
import userPhoto from "../../../assets/images/user.jpg"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const UserItem = (props) => {
    return (
        <div className={s.userItem}>
            <div className={s.userImageDiv}>
                <img alt="No file" src={props.photos.small !== null ? props.photos.small : userPhoto}/>
            </div>
            <div className={s.userInfoDiv}>
                <div className={s.userNameDiv}>
                    <NavLink to={"/profile/"+props.id} href="#s">{props.name}</NavLink>
                </div>
                <div className={s.userDescriptionDiv}>
                    <p>{props.userCity + ", " + props.userAge + " лет"}</p>
                </div>
            </div>
            <div className={s.subscribeButtonDiv}>
                {props.followed ? <button onClick={() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/`+props.id, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "49152651-9fa6-4324-9da5-a7e5d52bdf5e"
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.removeFriend(props.id)
                        }
                    })
                }}>Удалить из друзей</button> : <button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/`+props.id, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "49152651-9fa6-4324-9da5-a7e5d52bdf5e"
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.addFriend(props.id)
                        }
                    })
                }}>Добавить в друзья</button>}

            </div>
        </div>
    );
}

export default UserItem;