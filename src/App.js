import './App.css';
import MainComponent from "./components/maincomponent/MainComponent";
import DefinitionComponent from './components/definitioncomponent/DefinitionComponent';
import PronounciationComponent from './components/pronounciationcomponent/PronounciationComponent';
import { getThreeOtherRandomNum,getThreeOtherRandomStrings, possibilitySet, getRand } from ".//utilities/random.utils";
import { useEffect, useState, useRef, createContext} from "react";
import React from 'react';
import Navbar from './components/navbar/Navbar';

export const dataContext =createContext();

const App=()=>{
  const [characterArr, setCharacterArr]=useState([]);
  const [selection, setSelection]=useState({});
  const [correctObj, setCorrectObj]=useState('');
  const [score, setScore]=useState(0);
  const [total, setTotal]=useState(0);
  const [choices, setChoices]=useState([]);
  const [loading,setLoading]=useState(true)
  const [toggle,setToggle]=useState(true)
  const [simplified,setSimplified]=useState(true)


  const backendUrl=`https://mandarin-hsk1-backend.herokuapp.com/`;

  const [page,setPage]=useState('character');

  const pickSelection=(obj)=>setSelection(obj)
  const pickScore=(num)=>setScore(num)
  const pickTotal=(num)=>setTotal(num)
  const handleToggle=()=>setToggle(!toggle)
  const handleSimplified=()=>setSimplified(!simplified)

  useEffect(()=>{
      if(!loading){
          let rand=getRand(characterArr.length)
          let arrangementRand=getRand(24)
          setCorrectObj(characterArr[rand])
        //   let choiceSet=getThreeOtherRandomNum(rand,characterArr.length).map(num=>characterArr[num]);
          let choiceSet=getThreeOtherRandomStrings(rand,characterArr.length,characterArr).map(num=>characterArr[num]);
          let arrangementSet=possibilitySet[arrangementRand];
          setChoices(arrangementSet.map(num=>choiceSet[num]))
      }
  },[toggle])

  useEffect(()=>{
      const pullData=async()=>{
          console.log('attempting to pull data...')
          const data= await fetch(backendUrl).then(resp=>resp.json());
          console.log(data)
          let rand=getRand(data.length)
          let arrangementRand=getRand(24)
          setTotal(0)
          setCharacterArr(data);
          setCorrectObj(data[rand])
          console.log({rand, correctObj})
        //   let choiceSet=getThreeOtherRandomNum(rand,data.length).map(num=>data[num]);
          let choiceSet=getThreeOtherRandomStrings(rand,data.length,data).map(num=>data[num]);
          let arrangementSet=possibilitySet[arrangementRand];
          setChoices(arrangementSet.map(num=>choiceSet[num]))
          setLoading(false)
      }
      pullData();
  },[])

  const value = {
      characterArr,
      selection,
      choices,
      correctObj,
      score,
      total,
      loading,
      toggle,
      simplified,
      pickSelection,
      pickScore,
      pickTotal,
      handleToggle,
      handleSimplified
    };



   
    //migrate project to a nextjs framework
    //Add navigation bar for hsk1,2,3...
    //create an auth page for signing in and out
    //create a profile page to show what each person got right or wrong
    //allow for scores to be reset
    //add weighted random number function based on right and wrong answers

  return(
        
      <div className="h-screen w-screen grid place-content-center ">
          {/* {
              loading?<p>loading</p>:(
              <>
              <p>total:{total}</p>
              <p>correct:{correctObj.Character} {correctObj.Pronounciation}</p>
              <p>selection:{selection?.Character}{selection?.Pronounciation}</p>
              <p>{`[${choices[0].Character}, ${choices[1].Character}, ${choices[2].Character}, ${choices[3].Character}]`}</p>
              </>
              )
          } */}
          <dataContext.Provider value={value}>
            
           
            <div className='flex justify-around mb-3'>
            <div className={`${page==='character'?'bg-blue-700 text-gray-100':'bg-blue-300 text-gray-600'} rounded-lg w-20 sm:w-24 text-center cursor-pointer select-none`} onClick={()=>setPage('character')}>Characters</div>
            <div className={`${page==='pronounciation'?'bg-red-700 text-gray-100':'bg-red-300 text-gray-600'} rounded-lg w-28 sm:w-32 text-center cursor-pointer select-none`} onClick={()=>setPage('pronounciation')}>Pronounciation</div>
            <div className={`${page==='definition'?'bg-green-700 text-gray-100':'bg-green-300 text-gray-600'} rounded-lg w-20 sm:w-24 text-center cursor-pointer select-none`} onClick={()=>setPage('definition')}>Definition</div>
            </div>
           
            {(page==="character")&& <MainComponent/>}
            {(page==="pronounciation")&& <PronounciationComponent/>}
            {(page==="definition")&& <DefinitionComponent/>}

            <div className='w-30 h-10 bg-gray-100 flex justify-around items-center rounded-lg mt-2'>
              <div>Simplified</div>

              <div onClick={handleSimplified} className={`w-1/4 h-8 rounded-lg bg-gray-200 flex ${simplified?"justify-start":"justify-end"}`}>
                <div className="w-1/2 h-8 rounded-lg bg-gray-600 border-4 border-gray-400"/>
              </div>

              <div>Traditional</div>
            </div>
        


              
          </dataContext.Provider>
      </div>
  )
}
export default App;
