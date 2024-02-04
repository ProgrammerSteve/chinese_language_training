import React from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';
import Choice from "../choice/Choice";

const ChoiceGrid=()=>{
    const {choices}=useChoiceContext()
    return(
        <div className="h-28 grid grid-cols-2 justify-evenly w-[16rem] sm:w-80 mx-auto">
                <Choice obj={choices[0]}/>
                <Choice obj={choices[1]}/>
                <Choice obj={choices[2]}/>
                <Choice obj={choices[3]}/>
        </div>
    )
}
export default ChoiceGrid;