import s from './ProfileInfo.module.css';
import DescriptionBlock from "./DescriptionBlock/DescriptionBlock";
import React from "react";

const ProfileInfo = (props) => {

    return (
        <div className={s.profileInfo}>
            <div className={s.headImageContainer}>
                <img className={s.headImage}
                     src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
                     alt=""/>
            </div>
            <DescriptionBlock userProfile={props.userProfile}/>
        </div>
    )

}

export default ProfileInfo;