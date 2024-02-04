import { useEffect,useState } from 'react';
import React from 'react';
import { useChoiceContext } from '../../context/ChoiceContext';
const DefinitionChoice=({obj})=>{
    const {loading,toggle, pickSelection, selection}=useChoiceContext()
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
        if( !loading && selection?.Pronounciation==obj?.Pronounciation){
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
        <div onClick={handleSelection} className='bg-white w-[8rem] sm:w-36 h-12 flex justify-start gap-3 pl-1 col-span-1 mx-auto my-auto border-black border-2 rounded-xl cursor-pointer'>
            {!loading &&
                <>
                <span className="select-none my-auto"><p className='text-4xl'>{isSelected?`•`:`◦`}</p></span>
                <span className="select-none my-auto"><p className='text-xs'>{obj.Meaning}</p></span>
                </>
            }
        </div>
    )
}
export default DefinitionChoice;