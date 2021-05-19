import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import AddPost from "../AddPost/AddPost";

const MyPosts = (props) => {
    let postsElements = props.profile.postsInfo.map(p => <Post userImg={p.userImg} userName={p.userName} postData={"14.05.2021"} message={p.message} postImage={p.postImage}/>);
    return (
        <div>
            <AddPost profilePage={props.profile} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;