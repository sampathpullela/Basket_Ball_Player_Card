import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
    return (
        <div className="player-card">
            <img src={image} alt={`${name}`} className="player-image" />
            <h2 className="player-name">{name}</h2>
            <p className="player-position">{position}</p>
            <div className="player-stats">
                <p>Points per game: {stats.pointsPerGame}</p>
                <p>Assists per game: {stats.assistsPerGame}</p>
                <p>Rebounds per game: {stats.reboundsPerGame}</p>
            </div>
        </div>
    );
};

export default BasketballPlayerCard;
