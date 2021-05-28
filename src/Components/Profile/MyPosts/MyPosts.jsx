import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import AddPost from "../AddPost/AddPost";
import AddPostContainer from "../AddPost/AddPostContainer";

const MyPosts = (props) => {
    return (
        <div>
            <div className={s.posts}>
                { props.postsElements }
            </div>
        </div>
    );
}

export default MyPosts;