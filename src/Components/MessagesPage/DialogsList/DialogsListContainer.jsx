import DialogItem from "./DialogItem/DialogItem";
import DialogsList from "./DialogsList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.messages.dialogsInfo.map(d => <DialogItem key={d.id} id={d.id} name={d.name} imgUrl={d.imgUrl}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsList);

export default ProfileSidebarContainer;