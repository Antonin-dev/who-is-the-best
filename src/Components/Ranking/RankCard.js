import React from "react";

function RankCard({name, score, index}) {

    return (
        <div className="flex justify-between mb-6">
            <p className="flex">{index}</p>

            <p>{name}</p>
            <p>{score}</p>

        </div>
    )
}

export default RankCard;
