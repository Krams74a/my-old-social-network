import s from './ProfileSidebar.module.css';
import TrendItem from "./TrendItem/TrendItem";

const ProfileSidebar = (props) => {

    let trendsElements = props.profile.trendsInfo.map( t => <TrendItem name={t.name} mentionsCount={t.mentionsCount} />);

    return (
        <div className={s.profileSidebar}>
            <div className={s.textHeader}>
                <h4>Тренды</h4>
            </div>
            <div className={s.items}>
                {trendsElements}
            </div>
        </div>
    );
}

export default ProfileSidebar;