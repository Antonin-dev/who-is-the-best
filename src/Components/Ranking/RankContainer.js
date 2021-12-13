import React from 'react';
import RankCard from "./RankCard";

const RankContainer = () => {

    const ranks = [
        {
            name: "antonin",
            score: 4
        }, {
            name: "Viny",
            score: 4
        }, {
            name: "Mathilde",
            score: 4
        }, {
            name: "antonin",
            score: 2
        }, {
            name: "Lise",
            score: 9
        }, {
            name: "antonin",
            score: 4
        }, {
            name: "Julien",
            score: 5
        }, {
            name: "Bobby",
            score: 4
        },
    ]

    return (
        <div>
            <h1>Classement</h1>
            <div>
                {ranks.map(({name, score}, index) =>
                    <RankCard name={name} score={score} key={index}/>
                )}
            </div>
        </div>

    );
};

export default RankContainer;
