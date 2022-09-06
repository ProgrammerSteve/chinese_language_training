import React from 'react';

const Buttons=({pickScore,pickTotal,score,total,correctObj,selection,handleToggle})=>{
    const keypressReset=10;
    const keypressSubmit=12;

    const handleSubmit=()=>{
       if(('Character' in selection)){
            pickTotal(total+1);
            if(correctObj.Character===selection.Character){
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

    const handleKeyDownReset = event => {
        event.preventDefault();
        if(event.keycode===`${keypressReset}`){
            handleReset();
        }
    };

    const handleKeyDownSubmit = event => {
        event.preventDefault();
        if(event.keycode===`${keypressSubmit}`){
            handleReset();
        }
    };

    return(
        <div className="h-12 flex justify-center gap-4 w-[16rem] sm:w-80 mx-auto">
            <div 
            className='w-20 h-10 my-auto bg-black text-white grid place-content-center rounded-lg select-none cursor-pointer' 
            onClick={handleReset}
            onKeyDown={handleKeyDownReset}
            tabIndex={-1} 
            role="button" 
            >
                Reset
            </div>
            <div 
            className='w-20 h-10 my-auto bg-blue-500 text-white grid place-content-center rounded-lg select-none cursor-pointer' 
            onClick={handleSubmit}
            onKeyDown={handleKeyDownSubmit}
            tabIndex={-2} 
            role="button" 
            >
                Submit
            </div>
        </div>
    )
}
export default Buttons;