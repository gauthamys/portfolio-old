import React from "react";
import Home from "./Home";
import PolaroidStory from "./PolaroidStory";
import Cloud from "./Clouds";
import Sun from "./Sun";

function Main() {
    return (
        <div className="main">
            <Cloud topClass={"top-[-2rem]"} animate={"animate-cloud_1"}/>
            <Cloud topClass={"top-[0rem]"} animate={"animate-cloud_2"}/>
            <Cloud topClass={"top-[2.5rem]"} animate={"animate-cloud_3"}/>
            <Cloud topClass={"top-[4.5rem]"} animate={"animate-cloud_4"}/>
            <Cloud topClass={"top-[6.5rem]"} animate={"animate-cloud_5"}/>
            <Sun />
            <div className="m-6">
                <div id="home" name="home">
                    <Home />
                </div>
                <div id="polaroidstory" name="polaroidstory">
                    <PolaroidStory />
                </div>
            </div>
        </div>
    )
}

export default Main;