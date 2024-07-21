import Title from "./Title";
import React from "react";

function Home(){
    return (
        <div>
            <Title text={"Gautham YS"} />
            <p className="text-s text-center mt-2">
                Master's student at the University of Illinois, Chicago (MSCS)
            </p>
            <p className="text-s text-center mt-1">Chicago, IL | gsaty@uic.edu | linkedin.com/in/gauthamys | github.com/gauthamys</p>
        </div>
    )
}

export default Home;