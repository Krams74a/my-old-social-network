import Message from "../Message/Message";
import Messages from "./Messages";
import MyPosts from "../../../Profile/MyPosts/MyPosts";
import {connect} from "react-redux";

/*const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let messagesElements = state.messages.messagesInfo.map(m => <Message message={m.message} imgUrl={m.userUrl}/>)

                return(
                    <Messages messagesElements={messagesElements} />
                )
            }}
        </StoreContext.Consumer>
        );
}*/

let mapStateToProps = (state) => {
    return {
        messagesElements: state.messages.messagesInfo.map(m => <Message message={m.message} imgUrl={m.userUrl}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default ProfileSidebarContainer;