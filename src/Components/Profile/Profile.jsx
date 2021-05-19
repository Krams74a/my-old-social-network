import s from './Profile.module.css';
import {NavLink} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts profile={props.profile} addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
            <ProfileSidebar profile={props.profile}/>
        </div>
    );
}

export default Profile;