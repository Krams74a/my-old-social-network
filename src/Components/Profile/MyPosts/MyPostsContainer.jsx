import Post from './Post/Post';
import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                let postsElements = state.profile.postsInfo.map(p => <Post userImg={p.userImg} userName={p.userName} postData={"14.05.2021"} message={p.message} postImage={p.postImage}/>);

                return (
                    <MyPosts postsElements={postsElements}/>
                )
            }}
        </StoreContext.Consumer>
        );
}*/

let mapStateToProps = (state) => {
    return {
        postsElements: state.profile.postsInfo.map(p => <Post key={p.id} userImg={p.userImg} userName={p.userName} postData={"14.05.2021"} message={p.message} postImage={p.postImage}/>),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;