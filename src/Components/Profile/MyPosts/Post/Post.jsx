import s from './Post.module.css';
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";
import PostFooter from "./PostFooter/PostFooter";

const Post = (props) => {
    return (
        <div className={s.post}>
            <PostHeader imgUrl={props.userImg} userName={props.userName}/>
            <PostContent message={props.message} postImage={props.postImage}/>
            <PostFooter/>
        </div>
    );
}

export default Post;