import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import AnswerCard from "./AnswerCard";

const Question = ({name}) => {
    const {id} = useParams()
    const port = process.env.PORT || "http://localhost:3000"
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        async function fetchQuestion () {
            const question = await fetch(`${port}/question`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id: id})
            }
            );
            setQuestion(await question.json());

        }
    fetchQuestion();
    }, [id])
    return (
        <div className="bg-black w-screen h-screen">
            <p className="text-left text-white w-screen ml-3 pt-3">{name}</p>
            {question && (<div className="flex flex-col pt-48">
                <h2 className="text-white mb-10">{question.question}</h2>
                <div className="flex flex-col mx-auto ">
                    <div className="flex mb-4">
                        <AnswerCard text={question.answer[0].text} isValid={question.answer[0].isValid} idQuestion={id}/>
                        <AnswerCard text={question.answer[1].text} isValid={question.answer[1].isValid} idQuestion={id}/>
                    </div>
                    <div className="flex">
                        <AnswerCard text={question.answer[2].text} isValid={question.answer[2].isValid} idQuestion={id}/>
                        <AnswerCard text={question.answer[3].text} isValid={question.answer[3].isValid} idQuestion={id}/>
                    </div>
                </div>

            </div>)}

        </div>
    );
};

export default Question;
