import BgElements from "./BgElement";
import React from "react";
import Home from "./Home";
import { Element } from "react-scroll";

function Main() {
    return (
        <div className="main">
            <BgElements />
            <div className="m-6">
                <div id="home" name="home">
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default Main;