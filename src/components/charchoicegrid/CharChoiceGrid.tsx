import React from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';
import CharChoice from '../charchoice/CharChoice';
const CharChoiceGrid=()=>{
    const {choices}=useChoiceContext()
    return(
        <div className="h-28 grid grid-cols-2 justify-evenly w-[16rem] sm:w-80 mx-auto">
                <CharChoice obj={choices[0]}/>
                <CharChoice obj={choices[1]}/>
                <CharChoice obj={choices[2]}/>
                <CharChoice obj={choices[3]}/>
        </div>
    )
}
export default CharChoiceGrid;