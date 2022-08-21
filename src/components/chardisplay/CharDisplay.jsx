import { useContext } from 'react';
import { dataContext } from '../../App';

const CharDisplay=()=>{
    const {correctObj,simplified}=useContext(dataContext)
    return(
        <div className='bg-gray-100 w-[16rem] sm:w-80 h-80 grid place-content-center text-7xl rounded-lg'>
            {simplified?correctObj.Character:correctObj.Traditional}
        </div>
    )
}
export default CharDisplay;