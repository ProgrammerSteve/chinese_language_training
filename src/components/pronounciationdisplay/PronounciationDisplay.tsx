import React from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';

const PronounciationDisplay=()=>{
    const {correctObj}=useChoiceContext()
    return(
        <div className='bg-gray-100 w-[16rem] sm:w-80 h-80 grid place-content-center text-5xl rounded-lg'>
            {correctObj && correctObj.Pronounciation}
        </div>
    )
}
export default PronounciationDisplay;