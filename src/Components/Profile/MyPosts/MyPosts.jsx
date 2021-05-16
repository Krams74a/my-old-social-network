import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    console.log(props);

    let postsElements = props.postsInfo.map(p => <Post userImg={p.userImg} userName={p.userName} postData={"14.05.2021"} message={p.message} postImage={p.postImage}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement}>

                </textarea>
                <button onClick={addPost}>Опубликовать</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;