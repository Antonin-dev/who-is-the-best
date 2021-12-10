import React from 'react';

function Button({text, path}){
    return (
        <div className="bg-slate-300 h-12 rounded-3xl flex justify-center items-center">{text}</div>
    );
}

export default Button;
