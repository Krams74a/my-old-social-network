import s from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div>
            <div className={s.posts}>
                { props.postsElements }
            </div>
        </div>
    );
}

export default MyPosts;