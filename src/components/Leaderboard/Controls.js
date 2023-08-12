import React from "react";
import Filter from "../Filter/Filter";

function Controls({handleChange}) {
    return(
        <div className="leaderboard_head">
            <div className="leaderboard_head_info">
                <h2>{"MEET THE CLOWNS:"}</h2>
            </div>
            <div className="leaderboard_head_controls">
                <Filter handleChange={handleChange}/>
            </div>
        </div>
    );
}

export default Controls;