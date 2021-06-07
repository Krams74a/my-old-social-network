import s from "./LoginBlock.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.jpg"
import Preloader from "../../../assets/images/preloader/Preloader";

const LoginBlock = (props) => {

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div className={s.loginBlock}>
            {props.isAuth ? <NavLink to={`/profile`} >{props.login }</NavLink> : <NavLink to="/login" >Login</NavLink>}
            <div className={s.userPhotoBlock}>
                <img alt="" src={props.userProfile.photos.small !== null ? props.userProfile.photos.small : userPhoto } />
            </div>
        </div>
    )
}

export default LoginBlock;