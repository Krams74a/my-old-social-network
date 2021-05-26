import s from './Sidebar.module.css';
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <p className={s.header}>Друзья</p>
            <Friends state={props.state}/>
        </div>
    )
}

export default Sidebar;