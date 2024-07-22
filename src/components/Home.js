import Polaroid from "./Polaroid";
import Title from "./Title";
import React from "react";

function Home(){
    return (
        <div className="relative">
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
            <div className="h-max w-[75%] p-2 py-24 bg-white mt-10 absolute left-1/2 -translate-x-1/2">
                <div className="flex flex-row left-1/2 mx-[10%]">
                    <p className="grow text-center">lorem ipsum</p>
                    <Polaroid imgSrc={"bg-profile"} description={"text 1"} />
                </div>
            </div>
        </div>
    )
}

export default Home;