import { useContext } from 'react';
import { dataContext } from '../../App';
import Choice from "../choice/Choice";

const ChoiceGrid=()=>{
    const {choices}=useContext(dataContext)
    return(
        <div className="h-28 grid grid-cols-2 justify-evenly w-80 mx-auto">
                <Choice obj={choices[0]}/>
                <Choice obj={choices[1]}/>
                <Choice obj={choices[2]}/>
                <Choice obj={choices[3]}/>
        </div>
    )
}
export default ChoiceGrid;