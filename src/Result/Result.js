import React, {useEffect} from "react";
import Button from "../Components/Button/Button";
import {useParams} from "react-router";

const Result = ({name}) => {

    const {score} = useParams();
    const port = process.env.PORT || "http://localhost:3001";

    useEffect(() => {
        async function addRank () {
            const ranks = await fetch(`${port}/addRank`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({name:name, score:parseInt(score)})
                }
            );



        }
        addRank();
    },[])

    return (
        <div className="bg-black w-screen h-screen flex justify-center">
            <div className="bg-black w-2/3 h-screen flex flex-col justify-around items-center">
                <h1 className="text-4xl text-white mt-32 h-auto">Félicitation {name}</h1>
                 {/*todo tu es le meilleur a rajouter*/}
                <p className="text-white text-2xl">Score : {score}</p>
                <div className="w-48 h-28 flex flex-col justify-around">
                    <Button text="REJOUER" path="login"/>
                    <Button text="CLASSEMENT" path="rank"/>
                </div>
            </div>
        </div>
    );
};

export default Result;
