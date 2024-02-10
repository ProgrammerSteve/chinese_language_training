import React, { FC } from "react"

interface NavbarProps {
isOpen:boolean;
}
import Button from "./button";
import { useChoiceContext } from "../../context/ChoiceContext";
import WritingSystemButton from "./writingSystemButton";
import { PAGE_CLASSES } from "../pageSelector/PageSelector";

  
const Sidebar:FC<NavbarProps>=({isOpen})=>{
    const {page}=useChoiceContext()
    return(
   
        <div className={` side-bar-animation ${isOpen ? 'active' : ''} pt-[70px] text-white text-xl fixed top-0 right-0 w-[150px] sidebar-height flex flex-col gap-2 px-4 rounded-md`}>
         <div  className="select-none  text-white text-lg font-semibold rounded-lg px-1 py-1 grid place-items-center shadow-sm "><h1>Game Type</h1></div>
         
         {Object.values(PAGE_CLASSES).map((title,ind)=><Button title={title} page={page}  key={`demo-sidebar-item-${ind}`}/>)}
         
         <div  className="select-none  text-white text-lg font-semibold rounded-lg mt-2 px-1 py-1 grid place-items-center shadow-sm "><h1>Writing</h1><h1>System</h1></div>
         <WritingSystemButton/>
        </div>
    
    )
}

export default Sidebar
