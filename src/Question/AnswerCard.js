import React from 'react';
import {useNavigate} from "react-router";

const AnswerCard = ({text, isValid, idQuestion}) => {

    const history = useNavigate();

    function changeHistory (){
        if (isValid){
            history(`/question/${parseInt(idQuestion)+1}`);
        }else{
            history(`/result/${parseInt(idQuestion)}`);
        }
    }

    return (
        <div className="w-32 border-white rounded-3xl bg-white p-4 mr-2" onClick={() => changeHistory()}>
            {text}
        </div>
    );
};

export default AnswerCard;
