import Message from "../Message/Message";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesElements: state.messages.messagesInfo.map(m => <Message key={m.id} id={m.id} message={m.message} imgUrl={m.userUrl}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default ProfileSidebarContainer;