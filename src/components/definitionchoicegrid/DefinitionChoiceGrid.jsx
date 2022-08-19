import { useContext } from 'react';
import { dataContext } from '../../App';
import DefinitionChoice from '../definitionchoice/DefinitionChoice';

const DefinitionChoiceGrid=()=>{
    const {choices}=useContext(dataContext)
    return(
        <div className="h-28 grid grid-cols-2 justify-evenly w-[16rem] sm:w-80 mx-auto">
                <DefinitionChoice obj={choices[0]}/>
                <DefinitionChoice obj={choices[1]}/>
                <DefinitionChoice obj={choices[2]}/>
                <DefinitionChoice obj={choices[3]}/>
        </div>
    )
}
export default DefinitionChoiceGrid;