import React from "react";
import "./Leaderboard.css"

function Leaderboard() {
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
                            <th className="head_item player-header">{"Player"}</th>
                            <th className="head_item winrate-header">{"Win Rate"}</th>
                            <th className="head_item games">{"Games"}</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Leaderboard;