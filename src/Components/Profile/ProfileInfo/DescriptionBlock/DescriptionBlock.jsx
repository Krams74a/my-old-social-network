import s from './DescriptionBlock.module.css';

const DescriptionBlock = () => {
    return (
        <div className={s.descriptionBlock}>
            <div className={s.userInfo}>
                <div className={s.userImgContainer}>
                    <img src="https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album" alt="Not load"/>
                </div>
                <div className={s.userName}>
                    <h3>Максим Ветлугин</h3>
                    <textarea placeholder="Тут мог быть ваш статус..."/>
                </div>
            </div>
            <div className={s.socialBlock}>
                <button>Подписаться</button>
                <button>Подписаться</button>
                <button>Подписаться</button>
            </div>
        </div>
    );
}

export default DescriptionBlock;