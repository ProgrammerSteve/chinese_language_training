import React from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';

const CharDisplay=()=>{
    const {correctObj,simplified}=useChoiceContext()
    return(
        <div className='bg-gray-100 w-[16rem] sm:w-80 h-80 grid place-content-center text-7xl rounded-lg'>
            {correctObj && (simplified?correctObj.Character:correctObj.Traditional)}
        </div>
    )
}
export default CharDisplay;