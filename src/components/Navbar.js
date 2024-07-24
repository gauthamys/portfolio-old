import React, { useState } from "react"
import { BiCollapseHorizontal, BiExpandHorizontal } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import { MdOutlinePermIdentity } from "react-icons/md";

export default function Navbar() {
    return (
        <div className="navbar"> 
            <a href="#home">
                <div className={`profile-picture rounded-t-lg`}>
                    {/* <div className={`${collapsed ? "hidden" : ""} font-sans top-1/2 left-1/2 text-white font-bold -translate-x-1/2 translate-y-2/3 absolute text-center`}>
                        <h1 className="text-xl">
                            Gautham YS
                        </h1>
                        <p className="text-xs">gsaty@uic.edu</p>
                    </div> */}
                </div>
            </a>
            <ul>
                <NavItem target={"#home"} title={"Who I am"} Icon={MdOutlinePermIdentity} />
                <NavItem target={"#polaroidstory"} title={"What I'm doing"} Icon={FaTools}/>
                <NavItem title={"What I've done"} Icon={FaRegBuilding}/>
                <NavItem title={"What I want to do"} Icon={GiBullseye}/>
                <NavItem title={"Connect with me"} Icon={LuHeartHandshake}/>
            </ul>
        </div>
    )
}

function NavItem({ title, Icon, target }) {
    return (
        <a href={target} className="navitem flex flex-row">
            <Icon className="mt-2 ml-5"/> 
            <p>{title}</p>       
        </a>
    )
}