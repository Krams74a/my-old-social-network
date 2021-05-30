import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={"/messages/"+props.id} activeClassName={s.dialogItemActive} className={s.dialogItem}>
            <div className={s.userImg}>
                <img src={props.imgUrl} alt="Not load"/>
            </div>
            <div className={s.userName}>
                <p>{props.name}</p>
            </div>
        </NavLink>
    );
}

export default DialogItem;