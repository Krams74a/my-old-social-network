import s from './PostHeader.module.css';

const PostHeader = (props) => {
    return (
        <div className={s.postHeader}>
            <div className={s.userImgContainer}>
                <img className={s.userImg} src={props.imgUrl} alt="Not load"/>
            </div>
            <div className={s.postInfo}>
                <div className={s.userNameContainer}>
                    <a href="#s">{props.userName}</a>
                </div>
                <div className={s.postDataContainer}>
                    <a href="#s">14.05.2021</a>
                </div>
            </div>
        </div>
    );
}

export default PostHeader;