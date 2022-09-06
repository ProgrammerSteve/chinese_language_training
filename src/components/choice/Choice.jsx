import React, { useEffect, useState } from 'react';

const Choice = ({ obj,index,loading, toggle, pickSelection, selection }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [keypress,setKeyPress]=useState(0)
  switch(index){
      case 1:
          setKeyPress(65);
          break;
      case 2:
          setKeyPress(83);
          break;
      case 3:
          setKeyPress(68);
          break;
      case 4:
          setKeyPress(70);
          break;
      default: 
          break;
  }

  const handleSelection = () => {
    if (isSelected) {
      setIsSelected(false);
      pickSelection({});
    } else {
      pickSelection(obj);
    }
  }
  const handleKeyDown = event => {
    event.preventDefault();
    if(event.keycode===`${keypress}`){
      handleSelection();
    }
}
  useEffect(()=>{
    if ( selection !== {} && !loading && selection?.Pronounciation === obj?.Pronounciation){
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  } ,[selection] )

    useEffect(()=>{
        setIsSelected(false)
        pickSelection({})
    },[toggle])

    return(
        <div onClick={handleSelection} onKeyDown={handleKeyDown} tabIndex={index} role="radio" aria-checked="false" className='bg-white w-[8rem] sm:w-36 h-12 flex justify-start gap-3 pl-1 col-span-1 mx-auto my-auto border-black border-2 rounded-xl text-xl cursor-pointer'>
            {!loading &&
                <>
                <span className="select-none my-auto"><p className='text-4xl'>{isSelected?`•`:`◦`}</p></span>
                <span className="select-none my-auto text-xs sm:text-md"><p>{obj.Pronounciation}</p></span>
                </>
            }
        </div>
    )
}
export default Choice;