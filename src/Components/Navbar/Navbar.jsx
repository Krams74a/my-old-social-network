import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.navbar}>
            <NavLink to='/profile' activeClassName={s.active} className={s.item}>
                <p className={(s.itemLink)+" fa fa-home"}> Профиль</p>
            </NavLink>
            <NavLink to='/messages' activeClassName={s.active} className={s.item}>
                <p className={(s.itemLink)+" fa fa-comments-o"}> Сообщения</p>
            </NavLink>
            <NavLink to='/users' activeClassName={s.active} className={s.item}>
                <p className={(s.itemLink)+" fa fa-user-circle"}> Пользователи</p>
            </NavLink>
            <NavLink to='/news' activeClassName={s.active} className={s.item}>
                <p className={(s.itemLink)+" fa fa-newspaper-o"}> Новости</p>
            </NavLink>
            <NavLink to='/music' activeClassName={s.active} className={s.item}>
                <p className={(s.itemLink)+" fa fa-music"}> Музыка</p>
            </NavLink>
            <NavLink to='/settings' activeClassName={s.active} className={s.item}>
                <p className={(s.itemLink)+" fa fa-gear"}> Настройки</p>
            </NavLink>
            <hr/>
            {/*<Sidebar state={props.state}/>*/}
        </nav>
    );
}

export default Navbar;