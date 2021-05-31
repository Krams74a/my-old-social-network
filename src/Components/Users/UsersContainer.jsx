import Users from "./Users";
import {connect} from "react-redux";
import UserItem from "./UserItem/UserItem";

const mapStateToProps = (state) => {
    return {
        usersElements: state.users.usersInfo.map(u => <UserItem key={u.id} id={u.id} userName={u.userName} userImg={u.userImg} isFriend={u.isFriend} userAge={u.userAge} userCity={u.userCity}/>)
    }
}
const mapDispatchToProps = (dispatch) => {

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;