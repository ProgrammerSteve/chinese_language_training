import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { dataContext } from '../../App';
const CharChoice=({obj})=>{
    const {loading,toggle, pickSelection, selection}=useContext(dataContext)
    const [isSelected,setIsSelected]=useState(false)
    const handleSelection=()=>{
        if(isSelected){
            setIsSelected(false)
            pickSelection({})
        }else{
            pickSelection(obj)
        }
    }
    useEffect(()=>{
        if(selection!=={} && !loading && selection?.Pronounciation==obj?.Pronounciation){
            setIsSelected(true)
        }else{
            setIsSelected(false)
        }
    },[selection])
    

    useEffect(()=>{
        setIsSelected(false)
        pickSelection({})
    },[toggle])

    return(
        <div onClick={handleSelection} className='bg-white w-[8rem] sm:w-36 h-12 flex justify-start gap-3 pl-1 col-span-1 mx-auto my-auto border-black border-2 rounded-xl text-xl cursor-pointer'>
            {!loading &&
                <>
                <span className="select-none my-auto"><p className='text-4xl'>{isSelected?`•`:`◦`}</p></span>
                <span className="select-none my-auto"><p>{obj.Character}</p></span>
                </>
            }
        </div>
    )
}
export default CharChoice;