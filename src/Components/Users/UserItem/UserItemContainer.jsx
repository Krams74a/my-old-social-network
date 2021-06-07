import {connect} from "react-redux";
import UserItem from "./UserItem";
import {addFriend, removeFriend} from "../../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersInfo: state.usersInfo,
        currentPage: state.currentPage,
    }
}

const UserItemContainer = connect(mapStateToProps, {
    addFriend,
    removeFriend
})(UserItem);

export default UserItemContainer;