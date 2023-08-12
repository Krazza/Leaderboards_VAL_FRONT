import React from "react";
import "./Player.css";

function Player({ currentTier, currentTierPatched, elo, images, season, place, name }) {

    let style = "odd";
    if(((place % 2) === 0))
        style = "even";

    let isSeasonAvailable = true;
    if(JSON.stringify(season) === JSON.stringify({ error: "No data Available"}))
        isSeasonAvailable = false;

    return (
        <tr className={`player ${style}`}>
            <th className="player-rank">{place}</th>
            <th className="player-rank"><img src={images.small} alt={currentTierPatched}/></th>
            <th className="player-rank elo">{elo}</th>
            <th className="player-name">{name}</th>
            {
                isSeasonAvailable ?
                <>
                    <th className="player-winrate">{((season.wins/season.number_of_games)*100).toPrecision(4)}{"%"}</th>
                    <th className="player-games">{season.number_of_games}</th>
                </> 
                :
                <>
                    <th className="player-winrate">{"gid gud"}</th>
                    <th className="player-games">{"0"}</th>
                </>
            }
            
        </tr>
    )
}

export default Player;