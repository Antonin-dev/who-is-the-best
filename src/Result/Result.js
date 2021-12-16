import React from "react";
import Button from "../Components/Button/Button";

const Result = ({name}) => {
    return (
        <div className="bg-black w-screen h-screen flex justify-center">
            <div className="bg-black w-2/3 h-screen flex flex-col justify-around items-center">
                <h1 className="text-4xl text-white mt-32 h-auto">Félicitation {name}</h1>
                <p className="text-white text-2xl">Score : XXXX</p>
                <div className="w-48 h-28 flex flex-col justify-around">
                    <Button text="REJOUER" path="login"/>
                    // est ce qu'on peut pointer le path sur /question directement ?
                    <Button text="CLASSEMENT" path="rank"/>
                </div>
            </div>
        </div>
    );
};

export default Result;
