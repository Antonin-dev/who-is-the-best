import React from "react";

function RankCard({name, score, index}) {

    return (
        <div>
            <div className="flex justify-between mb-6">
                <p className="flex">{index}</p>

                <p>{name}</p>
                <p>{score}</p>

            </div>
            <div className="h-px w-full bg-slate-300 mb-6"></div>
        </div>

    )
}

export default RankCard;
