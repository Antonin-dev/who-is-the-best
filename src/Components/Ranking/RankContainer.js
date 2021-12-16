import React, {useEffect, useState} from 'react';
import RankCard from "./RankCard";

const RankContainer = () => {

    const [ranks, setRanks] = useState(null);

    const port = process.env.PORT || "http://localhost:3001";

    useEffect(() => {
        async function fetchRank () {
            const rank = await fetch(`${port}/rank`, {
                    method: "GET",
                }
            );
            let result = await rank.json()
            result.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
            setRanks(result);
        }
        fetchRank();
    }, [port]);

    return (
        <div className="bg-black text-white h-screen ">
            <h1 className="py-6 text-2xl uppercase">Classement</h1>
            <div className="my-6 mx-16">
                {ranks && ranks.map((rank, index) =>
                        <RankCard name={rank.name} score={rank.score} key={index} index={index+1} />
                    )}
            </div>
        </div>

    );
};

export default RankContainer;
