import classes from './Card.module.css';

const Card = props =>{
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>//props.className is using to accept external classes
}

export default Card;