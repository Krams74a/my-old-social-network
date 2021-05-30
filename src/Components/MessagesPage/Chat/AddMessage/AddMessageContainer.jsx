import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagesReducer";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";

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