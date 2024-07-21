import React, { useState } from "react"
import { BiCollapseHorizontal, BiExpandHorizontal } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import { MdOutlinePermIdentity } from "react-icons/md";

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div className={`navbar ${collapsed ? "w-24 rounded-t-full rounded-b-full" : "w-64 rounded-b-lg rounded-t-lg"}`}> 
            <button className="w-8 h-8 p-2.5 rounded-full shadow-2xl bg-slate-400 absolute top-1/2 -right-2.5 text-xs text-center font-bold border-2px border-black"
                onClick={() => {
                    setCollapsed(!collapsed)
                }}>
                {collapsed ? <BiExpandHorizontal /> : <BiCollapseHorizontal />}
            </button>
            <div className={`profile-picture ${collapsed ? "rounded-t-full" : "rounded-t-lg"}`}>
                {/* <div className={`${collapsed ? "hidden" : ""} font-sans top-1/2 left-1/2 text-white font-bold -translate-x-1/2 translate-y-2/3 absolute text-center`}>
                    <h1 className="text-xl">
                        Gautham YS
                    </h1>
                    <p className="text-xs">gsaty@uic.edu</p>
                </div> */}
            </div>
            <ul>
                <NavItem target={"#home"} title={"Who I am"} collapsed={collapsed} Icon={MdOutlinePermIdentity} />
                <NavItem title={"What I'm doing"} collapsed={collapsed} Icon={FaTools}/>
                <NavItem title={"What I've done"} collapsed={collapsed} Icon={FaRegBuilding}/>
                <NavItem title={"What I want to do"} collapsed={collapsed} Icon={GiBullseye}/>
                <NavItem title={"Connect with me"} collapsed={collapsed} Icon={LuHeartHandshake}/>
            </ul>
        </div>
    )
}

function NavItem({ title, collapsed, Icon, target }) {
    return (
        <a href={target} className="navitem flex flex-row">
                <Icon className="mt-2 ml-5"/>
                <span className={`ml-5 ${collapsed ? "hidden" : ""}`}>{title}</span>           
        </a>
    )
}