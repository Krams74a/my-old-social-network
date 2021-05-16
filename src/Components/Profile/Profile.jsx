import s from './Profile.module.css';
import {NavLink} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts postsInfo={props.state.postsInfo} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;