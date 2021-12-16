import React from 'react';
import {Link} from "react-router-dom";

const Login = ({setName}) => {
    function inputUpdate (value) {
        setName(value)
    }
    return (
        <div className="bg-slate-800 w-screen h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <input onChange={(e) => inputUpdate(e.target.value)} className="bg-slate-800 text-slate-300 text-xl"
                       type="text"
                       placeholder="Enter your name ..."/>
                <Link to={"/question/0"}>
                    <div className="text-slate-300"> ></div>
                </Link>
            </div>
        </div>)
};

export default Login;
