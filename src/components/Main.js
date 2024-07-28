import React from "react";
import Home from "./Home";
import PolaroidStory from "./PolaroidStory";
import Cloud from "./Clouds";
import Sun from "./Sun";

function Main() {
    return (
        <div className="main">
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