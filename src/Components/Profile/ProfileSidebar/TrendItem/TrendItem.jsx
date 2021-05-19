import s from './TrendItem.module.css';

const TrendItem = (props) => {
    return (
        <div className={s.trendItem}>
            <div className={s.itemNameContainer}>
                <a href="/profile">{props.name}</a>
            </div>
            <div className={s.itemCountContainer}>
                <p>{`Упоминания: ${props.mentionsCount}`}</p>
            </div>
        </div>
    );
}

export default TrendItem;