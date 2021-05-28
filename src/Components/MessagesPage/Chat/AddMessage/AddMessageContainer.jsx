import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagesReducer";
import AddMessage from "./AddMessage";
import Message from "../Message/Message";
import {connect} from "react-redux";
import MyPosts from "../../../Profile/MyPosts/MyPosts";

/*const AddMessageContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addMessage = () => {
                    let action = addMessageActionCreator();
                    store.dispatch(action);
                }

                let updateNewMessageText = (text) => {
                    let action = updateNewMessageTextActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <AddMessage addMessage={addMessage} updateNewMessageText={updateNewMessageText} value={state.messages.newMessageText}/>
                )
            }}
        </StoreContext.Consumer>
        );
}*/

let mapStateToProps = (state) => {
    return {
        value: state.messages.newMessageText
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;