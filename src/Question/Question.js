import React from 'react';
import {useParams} from "react-router";
import AnswerCard from "./AnswerCard";

const Question = ({name}) => {
    const {id} = useParams()
    return (
        <div className="bg-black w-screen h-screen">
            <p className="text-left text-white w-screen ml-3 pt-3">{name}</p>
            <div className="flex flex-col pt-48">
                <h2 className="text-white mb-10">exemple question .......</h2>
                <div className="flex flex-col mx-auto ">
                    <div className="flex mb-4">
                        <AnswerCard/>
                        <AnswerCard/>
                    </div>
                    <div className="flex">
                        <AnswerCard/>
                        <AnswerCard/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Question;
