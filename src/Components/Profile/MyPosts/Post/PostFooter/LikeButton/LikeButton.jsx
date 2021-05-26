import s from './LikeButton.module.css';

const LikeButton = () => {
    return (
        <button className={(s.likeButton)+" fa fa-heart-o"}>
        </button>
    );
}

export default LikeButton;