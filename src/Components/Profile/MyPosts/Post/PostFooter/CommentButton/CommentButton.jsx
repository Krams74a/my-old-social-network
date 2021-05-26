import s from './CommentButton.module.css';

const CommentButton = () => {
    return (
        <button className={(s.commentButton)+" fa fa-commenting-o"}>
        </button>
    );
}

export default CommentButton;