import s from './Profile.module.css';
import {NavLink} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;