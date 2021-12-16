import React from "react";
import Button from "../Components/Button/Button";

const HomePage = () => {
    return (
        <div className="bg-slate-800 w-screen h-screen flex justify-center">
            <div className="w-2/3 h-screen flex flex-col justify-center items-center">
                <h1 className="text-slate-300 text-3xl h-auto uppercase pb-12">Who's the most ...?</h1>
                <div className="w-48 h-28 flex flex-col justify-around">
                    <Button text="JOUER" path="login"/>
                    <Button text="CLASSEMENT" path="rank"/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
