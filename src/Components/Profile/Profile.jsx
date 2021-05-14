import s from './Profile.module.css';
import {NavLink} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;