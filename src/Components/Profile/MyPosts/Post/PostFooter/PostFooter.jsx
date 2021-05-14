import s from './PostFooter.module.css';
import LikeButton from "./LikeButton/LikeButton";
import CommentButton from "./CommentButton/CommentButton";
import RepostButton from "./RepostButton/RepostButton";

const PostFooter = () => {
    return (
        <div className={s.postFooter}>
            <LikeButton/>
            <CommentButton/>
            <RepostButton/>
        </div>
    );
}

export default PostFooter;