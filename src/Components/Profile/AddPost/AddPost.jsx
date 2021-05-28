import s from './AddPost.module.css';
import React from "react";
import Post from "../MyPosts/Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const AddPost = (props) => {

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.onPostChange(text);
    }

    return (
        <div className={s.addPostContainer}>
            <textarea className={s.item} onChange={onPostChange}
                      value={props.value}
                      placeholder='Что у вас нового?'/>
            <button className={s.item} onClick={addPost}>Опубликовать</button>
        </div>
    );
}

export default AddPost;