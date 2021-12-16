import React from 'react';
import {useNavigate} from "react-router";

const AnswerCard = () => {

    let navigate = useNavigate();

    function redirectPath() {
        navigate("question/1", {replace: true});
    }


    return (
        <div className="w-32 border-white rounded-3xl bg-white" onClick={redirectPath}>
            Réponse x
        </div>
    );
};

export default AnswerCard;
