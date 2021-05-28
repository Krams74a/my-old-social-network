import DialogItem from "./DialogItem/DialogItem";
import DialogsList from "./DialogsList";
import MyPosts from "../../Profile/MyPosts/MyPosts";
import {connect} from "react-redux";

/*const DialogsListContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let dialogsElements = state.messages.dialogsInfo.map(d => <DialogItem id={d.id} name={d.name} imgUrl={d.imgUrl}/>)

                return(
                    <DialogsList dialogsElements={dialogsElements}/>
                )
            }}
        </StoreContext.Consumer>
        );
}*/

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.messages.dialogsInfo.map(d => <DialogItem id={d.id} name={d.name} imgUrl={d.imgUrl}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsList);

export default ProfileSidebarContainer;