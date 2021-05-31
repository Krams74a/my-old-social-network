import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import AddPostContainer from "./AddPost/AddPostContainer";
import ProfileSidebarContainer from "./ProfileSidebar/ProfileSidebarContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.header}>
                <ProfileInfo/>
            </div>
            <div className={s.content}>
                <AddPostContainer/>
                <MyPostsContainer/>
            </div>
            <div className={s.sidebar}>
                <ProfileSidebarContainer/>
            </div>
        </div>
    );
}

export default Profile;