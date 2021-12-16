import React from 'react';
import {Link} from "react-router-dom";

function Button({text, path}) {
    return (
        <Link to={`/${path}`}>
            <div
                className="bg-slate-300 text-slate-800 h-12 rounded-3xl flex justify-center items-center font-semibold">{text}</div>
        </Link>
    );
}

export default Button;
