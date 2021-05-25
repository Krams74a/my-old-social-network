import s from './Profile.module.css';
import {NavLink} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
            <ProfileSidebar state={props.state}/>
        </div>
    );
}

export default Profile;