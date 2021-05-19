import s from './ProfileInfo.module.css';
import DescriptionBlock from "./DescriptionBlock/DescriptionBlock";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.headImageContainer}>
                <img className={s.headImage} src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </div>
            <DescriptionBlock />
        </div>
    );
}

export default ProfileInfo;