import React from "react";
import Button from "../Components/Button/Button";

const HomePage = () => {
    return (
        <div className="bg-black w-screen h-screen flex justify-center">
            <div className="bg-red-400 w-2/3 h-screen flex flex-col justify-around items-center">
                <h1 className="text-3xl mt-32 h-auto">Who's the most ...?</h1>
                <div className="w-48 h-28 bg-cyan-800 flex flex-col justify-around">
                    <Button text="JOUER" path="login"/>
                    <Button text="CLASSEMENT" path="rank"/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
