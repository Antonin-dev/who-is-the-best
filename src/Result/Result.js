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
        <div className="bg-slate-800 w-screen h-screen flex justify-center items-center">
            <div className="bg-slate-800 w-2/3 h-screen flex flex-col items-center">
                <h1 className="text-4xl text-slate-300 mt-32 h-auto py-20">Félicitations {name}</h1>
                <p className="text-slate-300 text-2xl pb-24">Score : {score}</p>
                <div className="w-48 h-28 flex flex-col justify-around">
                    <Button text="REJOUER" path="login"/>
                    <Button text="CLASSEMENT" path="rank"/>
                </div>
            </div>
        </div>
    );
};

export default Result;
