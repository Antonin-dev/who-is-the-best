import React from 'react';
import {useNavigate} from "react-router";

const AnswerCard = ({text, isValid, idQuestion}) => {
    console.log(isValid);
    const history = useNavigate();
    console.log(typeof parseInt(idQuestion))


    function changeHistory (){
        history(`/question/${parseInt(idQuestion)+1}`);
    }

    return (
        <div className="w-32 border-white rounded-3xl bg-white" onClick={() => changeHistory()}>
            {text}
        </div>
    );
};

export default AnswerCard;
