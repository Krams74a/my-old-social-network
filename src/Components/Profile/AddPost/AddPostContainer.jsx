import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import AddPost from "./AddPost";
import {connect} from "react-redux";

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