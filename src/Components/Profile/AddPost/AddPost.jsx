import s from './AddPost.module.css';
import React from "react";
import Post from "../MyPosts/Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.addPostContainer}>
            <textarea className={s.item} onChange={onPostChange} ref={newPostElement}
                      value={props.state.profile.newPostText} placeholder='Что у вас нового?'/>
            <button className={s.item} onClick={addPost}>Опубликовать</button>
        </div>
    );
}

export default AddPost;