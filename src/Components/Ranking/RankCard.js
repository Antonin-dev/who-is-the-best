import React from "react";

function RankCard({name, score}) {
    return (
        <div className="flex justify-between mb-6">
            <p className="flex"> numero ranking</p>

            <p>{name}</p>
            <p>{score}</p>

        </div>
    )
}

export default RankCard;
