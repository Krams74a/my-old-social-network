import s from './Users.module.css';
import React from "react";
import UserItemContainer from "./UserItem/UserItemContainer";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        if (this.props.usersInfo.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }

    onPageChanged = (pageNumber) => {
        pageNumber++;
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            console.log(pageNumber)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={s.users}>

                {
                    this.props.usersInfo.map(u => <UserItemContainer key={u.id} id={u.id} name={u.name}
                                                                     photos={u.photos}
                                                                     followed={u.followed}/>)
                }
                <div>
                    <button onClick={ () => this.onPageChanged(this.props.currentPage)}>Далее</button>
                </div>
            </div>
        );
    }
}

export default Users;