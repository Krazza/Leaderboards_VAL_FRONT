import React, { useEffect, useState } from "react";
import MMRService from "../../services/MMR";
import "./Leaderboard.css"
import CustomSpinner from "../BootstrapElements/CustomSpinner";
import Player from "./Player";

function Leaderboard() {

    const [chosenSeason, setChosenSeason] = useState("e7a1");
    const [playersData, setPlayersData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function FetchPlayerData() {
            const data = await MMRService.getAll();
            data.sort((a, b) => (a.MMRData.elo > b.MMRData.elo) ? -1 : (b.MMRData.elo > a.MMRData.elo) ? 1 : 0);
            setPlayersData(data);
        }
        FetchPlayerData();
    }, [])

    useEffect(() => {
        setIsLoading(false);
    }, [playersData])

    if(playersData !== undefined)
        console.log(playersData)
    return (
        <div className="leaderboard">
            <div className="leaderboard_head">
                <div className="leaderboard_head_info">
                    <h2>{"MEET THE CLOWNS:"}</h2>
                </div>
                <div className="leaderboard_head_controls">
                    <input className="search" type="text" name="search" placeholder="Search"/>
                </div>
            </div>
            <div className="leaderboard_table">
                <table>
                    <thead>
                        <tr className="table_head">
                            <th className="head_item rank-header">{"#"}</th>
                            <th className="head_item rank-header">{"Rank"}</th>
                            <th className="head_item rank-header">{"RR"}</th>
                            <th className="head_item player-header">{"Player"}</th>
                            <th className="head_item winrate-header">{"Win Rate"}</th>
                            <th className="head_item games">{"Games"}</th>
                        </tr>
                    </thead>
                    { isLoading ?
                    <tbody className="spinnerposition">
                        <CustomSpinner/>
                    </tbody> 
                    : 
                    <tbody>
                        {
                            playersData?.map((player, index) => 
                            <Player key={player.givenName} name={player.givenName} currentTier={player.MMRData.currentTier}
                                currentTierPatched={player.MMRData.currentTierPatched} elo={player.MMRData.elo}
                                images={player.MMRData.images} place={index + 1} season={player.MMRData.seasons[chosenSeason]}/>)
                        }
                    </tbody> }
                </table>
            </div>
        </div>
    );
}

export default Leaderboard;