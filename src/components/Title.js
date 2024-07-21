import React from "react";
function Title({text}) {
    return (
        <>
        <p className="text-6xl mb-3 font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mr-6 text-center">
            {text}
        </p>
        <hr />
        </>
    )
}

export default Title;