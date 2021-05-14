import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <NavLink to='/profile' activeClassName={s.active} className={s.item}>
                <p className={s.itemLink}>Профиль</p>
            </NavLink>
            <NavLink to='/messages' activeClassName={s.active} className={s.item}>
                <p className={s.itemLink}>Сообщения</p>
            </NavLink>
            <NavLink to='/news' activeClassName={s.active} className={s.item}>
                <p className={s.itemLink}>Новости</p>
            </NavLink>
            <NavLink to='/music' activeClassName={s.active} className={s.item}>
                <p className={s.itemLink}>Музыка</p>
            </NavLink>
            <NavLink to='/settings' activeClassName={s.active} className={s.item}>
                <p className={s.itemLink}>Настройки</p>
            </NavLink>
        </nav>
    );
}

export default Navbar;