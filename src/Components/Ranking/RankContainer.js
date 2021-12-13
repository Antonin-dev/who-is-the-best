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
        <div className="bg-black text-white h-screen ">
            <h1 className="py-6 text-2xl uppercase">Classement</h1>
            <div className="my-6 mx-16">
                {ranks.map(({name, score}, index) =>
                    <RankCard name={name} score={score} key={index}/>
                )}
            </div>
        </div>

    );
};

export default RankContainer;
