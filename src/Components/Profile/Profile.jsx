import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import AddPostContainer from "./AddPost/AddPostContainer";
import ProfileSidebarContainer from "./ProfileSidebar/ProfileSidebarContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <AddPostContainer/>
            <MyPostsContainer/>
            <ProfileSidebarContainer/>
        </div>
    );
}

export default Profile;