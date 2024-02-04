import React from "react";
import { useChoiceContext } from "../../context/ChoiceContext";
const CharSimplifiedSetting=()=>{
    let {simplified,handleSimplified}=useChoiceContext()
    return(
        <div className='w-30 h-10 bg-gray-100 flex justify-around items-center rounded-lg mt-2'>
        <div>Simplified</div>
        <div onClick={()=>handleSimplified()} className={`w-1/4 h-8 rounded-lg bg-gray-200 flex ${simplified?"justify-start":"justify-end"}`}>
          <div className="w-1/2 h-8 rounded-lg bg-gray-600 border-4 border-gray-400"/>
        </div>
        <div>Traditional</div>
      </div>
    )
}
export default CharSimplifiedSetting;
