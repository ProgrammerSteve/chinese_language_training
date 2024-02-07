import React,{ FC } from "react"
// import Button from "./button"
import HamburgerMenu from "./menu";
// import { demoList } from "../../App";
interface NavbarProps {
page:string;
handleSelection:(page:string)=>void;
toggleSidebar:()=>void;
isOpen:boolean;
}
  


const Navbar:FC<NavbarProps>=({toggleSidebar,isOpen})=>{
    return(
        <div className="bg-red-800 h-[70px] text-white text-xl flex items-center justify-between px-4 rounded-md">
            <div className="grid place-items-center"><h1 className="font-extrabold text-2xl">HSK Training</h1></div>
            <div className="block">
            <HamburgerMenu toggleSidebar={toggleSidebar} isOpen={isOpen}/>
            </div>
        </div>
    )
}

export default Navbar