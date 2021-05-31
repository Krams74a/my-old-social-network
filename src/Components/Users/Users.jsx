import s from './Users.module.css';
import React from "react";

const Users = (props) => {
    return (
        <div className={s.users}>
            {props.usersElements}
        </div>
    );
}

export default Users;