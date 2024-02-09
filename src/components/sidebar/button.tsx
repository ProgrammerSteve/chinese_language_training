import React,{ FC } from "react"
import { useChoiceContext } from "../../context/ChoiceContext";

interface SidebarProps {
    title:string;
    page:string
}
  

const Button:FC<SidebarProps>=({title,page})=>{
    const {handleSetPage}=useChoiceContext()

    const handleClick=()=>handleSetPage(title)


    return(
<>
        {page==title?
        <div className="select-none h-[50px]  text-sm font-semibold rounded-xl py-1 px-1 grid place-items-center shadow-xl bg-[#82676e] cursor-pointer text-gray-6
        00"><h1>{title}</h1></div>
        :
        <div onClick={handleClick} className="select-none bg-[#603a44] h-[50px] text-white text-sm font-semibold rounded-xl px-1 py-1 grid place-items-center shadow-xl hover:bg-slate-400 cursor-pointer hover:text-gray-6
        00"><h1>{title}</h1></div>}
</>
    )

}

export default Button