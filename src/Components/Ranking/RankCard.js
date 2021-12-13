import React from "react";

function RankCard({name, score}) {
    return (
        <div>
            <p> numero ranking</p>
            <div>
                <p>{name}</p>
                <p>{score}</p>
            </div>
        </div>
    )
}

export default RankCard;
