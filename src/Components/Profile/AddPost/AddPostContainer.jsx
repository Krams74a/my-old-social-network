import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import AddPost from "./AddPost";
import {connect} from "react-redux";

/*const AddPostContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <AddPost addPost={addPost} onPostChange={onPostChange} value={state.profile.newPostText}/>
                )
            }}
        </StoreContext.Consumer>
        );
}*/

let mapStateToProps = (state) => {
    return {
        value: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;