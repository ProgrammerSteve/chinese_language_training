import { useContext } from 'react';
import { dataContext } from '../../App';

const CharDisplay=()=>{
    const {correctObj}=useContext(dataContext)
    return(
        <div className='bg-gray-100 w-80 h-80 grid place-content-center text-7xl rounded-lg'>
            {correctObj.Character}
        </div>
    )
}
export default CharDisplay;