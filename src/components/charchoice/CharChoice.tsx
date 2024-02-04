import React,{ useEffect,useState } from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';
import type { ChoiceData } from '../../context/ChoiceContext';
interface IProps{
    obj:ChoiceData;
}
const CharChoice=({obj}:IProps)=>{
    const {loading,toggle, pickSelection, selection, simplified}=useChoiceContext()
    const [isSelected,setIsSelected]=useState(false)
    const handleSelection=()=>{
        if(isSelected){
            setIsSelected(false)
            pickSelection(null)
        }else{
            pickSelection(obj)
        }
    }
    useEffect(()=>{
        if(!loading && selection?.Pronounciation==obj?.Pronounciation){
            setIsSelected(true)
        }else{
            setIsSelected(false)
        }
    },[selection])
    

    useEffect(()=>{
        setIsSelected(false)
        pickSelection(null)
    },[toggle])

    return(
        <div onClick={handleSelection} className='bg-white w-[8rem] sm:w-36 h-12 flex justify-start gap-3 pl-1 col-span-1 mx-auto my-auto border-black border-2 rounded-xl text-xl cursor-pointer'>
            {!loading &&
                <>
                <span className="select-none my-auto"><p className='text-4xl'>{isSelected?`•`:`◦`}</p></span>
                <span className="select-none my-auto"><p>{simplified?obj.Character:obj.Traditional}</p></span>
                </>
            }
        </div>
    )
}
export default CharChoice;