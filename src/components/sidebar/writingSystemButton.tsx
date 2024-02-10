import React,{ FC } from "react"
import { useChoiceContext } from "../../context/ChoiceContext";

interface SidebarProps {
}
  

const WritingSystemButton:FC<SidebarProps>=({})=>{
    const {handleSetToSimplified,handleSetToTraditional,simplified}=useChoiceContext()
    const handleClickSimplified=()=>!simplified && handleSetToSimplified()
    const handleClickTraditional=()=>simplified && handleSetToTraditional()
    return(
<>
        {simplified?
        <div className="select-none h-[50px]  text-sm font-semibold rounded-xl py-1 px-1 grid place-items-center shadow-xl bg-[#82676e] cursor-pointer text-gray-6
        00"><h1>Simplified</h1></div>
        :
        <div onClick={handleClickSimplified} className="select-none bg-[#603a44] h-[50px] text-white text-sm font-semibold rounded-xl px-1 py-1 grid place-items-center shadow-xl hover:bg-slate-400 cursor-pointer hover:text-gray-6
        00"><h1>Simplified</h1></div>}
        {!simplified?
        <div className="select-none h-[50px]  text-sm font-semibold rounded-xl py-1 px-1 grid place-items-center shadow-xl bg-[#82676e] cursor-pointer text-gray-6
        00"><h1>Traditional</h1></div>
        :
        <div onClick={handleClickTraditional} className="select-none bg-[#603a44] h-[50px] text-white text-sm font-semibold rounded-xl px-1 py-1 grid place-items-center shadow-xl hover:bg-slate-400 cursor-pointer hover:text-gray-6
        00"><h1>Traditional</h1></div>}
</>
    )

}

export default WritingSystemButton