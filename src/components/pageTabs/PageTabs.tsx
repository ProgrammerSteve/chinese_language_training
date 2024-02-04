import React from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';

const PageTabs=()=>{
    const {page,handleSetPage}=useChoiceContext()
    return(
        <div className='flex justify-around mb-3'>
        <div className={`${page==='character'?'bg-blue-700 text-gray-100':'bg-blue-300 text-gray-600'} rounded-lg w-20 sm:w-24 text-center cursor-pointer select-none`} onClick={()=>handleSetPage('character')}>Characters</div>
        <div className={`${page==='pronounciation'?'bg-red-700 text-gray-100':'bg-red-300 text-gray-600'} rounded-lg w-28 sm:w-32 text-center cursor-pointer select-none`} onClick={()=>handleSetPage('pronounciation')}>Pronounciation</div>
        <div className={`${page==='definition'?'bg-green-700 text-gray-100':'bg-green-300 text-gray-600'} rounded-lg w-20 sm:w-24 text-center cursor-pointer select-none`} onClick={()=>handleSetPage('definition')}>Definition</div>
        </div>
    )
}
export default PageTabs;