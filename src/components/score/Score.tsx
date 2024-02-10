import React from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';

const Score=()=>{
    const {score,total}=useChoiceContext()
    return(
        <div className="h-8 grid place-content-center sm:w-80 mx-auto text-white text-xl">
            <span>Correct: {`${total?score:'-'} / ${total?total:'-'}`}</span>
        </div>
    )
}
export default Score;