import { useContext } from 'react';
import { dataContext } from '../../App';


const Score=()=>{
    const {score,total}=useContext(dataContext)

    return(
        <div className="h-8 grid place-content-center w-80 mx-auto text-white text-xl">
            <span>{`${score?score:'-'} / ${total?total:'-'}`}</span>
        </div>
    )
}
export default Score;