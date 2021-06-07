import s from './Users.module.css';
import React from "react";
import UserItemContainer from "./UserItem/UserItemContainer";

const Users = (props) => {
    return (
        <div className={s.users}>

            {
                props.usersInfo.map(u => <UserItemContainer key={u.id} id={u.id} name={u.name}
                                                                 photos={u.photos}
                                                                 followed={u.followed}/>)
            }
            <div>
                <button onClick={ () => props.onPageChanged(props.currentPage)}>Далее</button>
            </div>
        </div>
    )
}

export default Users;