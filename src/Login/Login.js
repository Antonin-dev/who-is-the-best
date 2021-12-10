import React from 'react';
import {Link} from "react-router-dom";

const Login = ({setName}) => {


    function inputUpdate (value) {
        setName(value)
    }



    return (
        <div className="bg-black w-screen h-screen flex flex-col justify-center">
            <div>
                <input onChange={(e) => inputUpdate(e.target.value)} className="bg-black text-white" type="text" placeholder="Enter your name ..."/>

                <Link to={"/question/0"}><div className="text-white"> > </div></Link>
            </div>


        </div>
    );
};

export default Login;
