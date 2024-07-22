import Title from "./Title";
import React from "react";

function Home(){
    return (
        <div>
            <Title text={"Gautham Yelliboina Satyanarayana"} />
            <p className="text-lg text-center mt-2">
            ˙✧˖°🎓 Master's student at the <span className="text-pink-500 font-extrabold">University of Illinois, Chicago</span>  (MSCS) 👨‍🎓 ༘⋆｡ ˚
            </p>
            <div className="text-s text-center mt-1">
                📍 Chicago, IL | 
                📩 <a className="profile-link" href="mailto:gsaty@uic.edu">gsaty@uic.edu</a> |  
                💼 <a className="profile-link animate-bounce" target="_blank" href="https:www.linkedin.com/in/gauthamys">LinkedIn</a> | 
                👩🏻‍💻 <a className="profile-link" target="_blank" href="https://www.github.com/gauthamys">Github</a>
            </div>
        </div>
    )
}

export default Home;