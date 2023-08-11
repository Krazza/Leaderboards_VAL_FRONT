import React from "react";
import "./Player.css";

function Player({ currentTier, currentTierPatched, elo, images, season, place, name }) {
    return (
        <tr className="player">
            <th className="player-rank">{place}</th>
            <th className="player-rank">{currentTierPatched}</th>
            <th className="player-name">{name}</th>
            {/* <th className="player-winrate">{(season.wins/season.number_of_games)*100}{"%"}</th> */}
            {/* <th className="player-games">{season.number_of_games}</th> */}
        </tr>
    )
}

export default Player;