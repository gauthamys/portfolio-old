import React from "react";
function Title({text}) {
    return (
        <>
        <p className="text-4xl mb-2 font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mr-6 text-center">
            {text}
        </p>
        </>
    )
}

export default Title;