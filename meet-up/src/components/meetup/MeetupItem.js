import classes from './MeetupItem.module.css';
import Card from '../ui/Card.js';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorite-context';

function MeetupItem(props) {
    //context object in FaavoritesContext component
    const favoritesCtx = useContext(FavoritesContext);

    //props.id comes from meetuplist.js
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);


    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            }); // this triggers addFavoritesHandler from FavoritesContec=xtProvider
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;