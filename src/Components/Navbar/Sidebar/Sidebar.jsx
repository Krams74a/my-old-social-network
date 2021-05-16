import s from './Sidebar.module.css';
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    console.log(props);
    return (
        <div className={s.sidebar}>
            <p>Друзья</p>
            <Friends friendsInfo={props.friendsInfo}/>
        </div>
    )
}

export default Sidebar;