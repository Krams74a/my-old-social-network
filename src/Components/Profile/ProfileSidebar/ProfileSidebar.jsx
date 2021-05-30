import s from './ProfileSidebar.module.css';

const ProfileSidebar = (props) => {
    return (
        <div className={s.profileSidebar}>
            <div className={s.textHeader}>
                <h4>Тренды</h4>
            </div>
            <div className={s.items}>
                {props.trendsElements}
            </div>
        </div>
    );
}

export default ProfileSidebar;