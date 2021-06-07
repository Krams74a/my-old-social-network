import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPage, setUsers, toggleIsFetching} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Preloader from "../../assets/images/preloader/Preloader";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.usersInfo.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "49152651-9fa6-4324-9da5-a7e5d52bdf5e"
                }
            }).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        pageNumber++;
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "49152651-9fa6-4324-9da5-a7e5d52bdf5e"
            }
        }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (<>
                <Users onPageChanged={this.onPageChanged} usersInfo={this.props.usersInfo}
                       currentPage={this.props.currentPage}/>
                {/*{this.props.isFetching ? <img src={preloader} alt=""/> : null}*/}
                {this.props.isFetching ? <Preloader /> : null}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersInfo: state.users.usersInfo,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    toggleIsFetching: toggleIsFetching
})(UsersAPI);

export default UsersContainer;