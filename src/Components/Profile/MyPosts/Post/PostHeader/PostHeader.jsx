import s from './PostHeader.module.css';

const PostHeader = (props) => {
    return (
        <div className={s.postHeader}>
            <div className={s.userImgContainer}>
                <img className={s.userImg} src={props.imgUrl} />
            </div>
            <div className={s.postInfo}>
                <div className={s.userName}>
                    <span><b>{props.userName}</b></span>
                </div>
                <div className={s.postData}>
                    14.05.2021
                </div>
            </div>
        </div>
    );
}

export default PostHeader;