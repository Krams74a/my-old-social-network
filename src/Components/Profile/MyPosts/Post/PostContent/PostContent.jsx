import s from './PostContent.module.css';

const PostContent = (props) => {
    return (
        <div className={s.postContent}>
            <div className={s.postImg}>
                <img src={props.postImage} alt=""/>
            </div>
            <div className={s.postMessage}>
                { props.message }
            </div>
        </div>
    );
}

export default PostContent;