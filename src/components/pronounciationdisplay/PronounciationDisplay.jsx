import { useContext } from 'react';
import { dataContext } from '../../App';

const PronounciationDisplay=()=>{
    const {correctObj}=useContext(dataContext)
    return(
        <div className='bg-gray-100 w-[16rem] sm:w-80 h-80 grid place-content-center text-5xl rounded-lg'>
            {correctObj.Pronounciation}
        </div>
    )
}
export default PronounciationDisplay;