import React from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';

const Buttons=()=>{
    const {pickScore,pickTotal,score,total,correctObj,selection,handleToggle}=useChoiceContext()

    const handleSubmit=()=>{
        if(!(selection)){
            return
        }
        if(!correctObj){
            return
        }
        
        else{
            pickTotal(total+1);
            if(correctObj.Character==selection.Character){
                pickScore(score+1);
            } 
            handleToggle()
        }
    }

    const handleReset=()=>{
        pickTotal(0);
        pickScore(0);
        handleToggle();
    }

    return(
        <div className="h-12 flex justify-center gap-4 w-[16rem] sm:w-80 mx-auto">
            <div className='w-20 h-10 my-auto bg-black text-white grid place-content-center rounded-lg select-none cursor-pointer' onClick={handleReset}>Reset</div>
            <div className='w-20 h-10 my-auto bg-blue-500 text-white grid place-content-center rounded-lg select-none cursor-pointer' onClick={handleSubmit}>Submit</div>
        </div>
    )
}
export default Buttons;