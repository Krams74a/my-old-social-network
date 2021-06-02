import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersInfo: state.users.usersInfo,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;