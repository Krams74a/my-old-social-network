import s from './AddPost.module.css';
import React from "react";
import Post from "../MyPosts/Post/Post";

const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.addPostContainer}>
            <textarea className={s.item} onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} placeholder='Что у вас нового?'/>
            <button className={s.item} onClick={addPost}>Опубликовать</button>
        </div>
    );
}

export default AddPost;