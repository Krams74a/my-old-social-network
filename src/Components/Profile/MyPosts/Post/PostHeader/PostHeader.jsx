import s from './PostHeader.module.css';

const PostHeader = (props) => {
    return (
        <div className={s.postHeader}>
            <div className={s.userImgContainer}>
                <img className={s.userImg} src={props.imgUrl} />
            </div>
            <div className={s.userNameContainer}>
                <a href="">{props.userName}</a>
            </div>
            <div className={s.postDataContainer}>
                <a href="">14.05.2021</a>
            </div>
        </div>
    );
}

export default PostHeader;