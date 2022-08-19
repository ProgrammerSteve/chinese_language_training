import './App.css';
import MainComponent from "./components/maincomponent/MainComponent";
import PronounciationComponent from './components/pronounciationcomponent/PronounciationComponent';
import { getThreeOtherRandomNum, possibilitySet, getRand } from ".//utilities/random.utils";
import { useEffect, useState, useRef, createContext} from "react";
import React from 'react';

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
  const backendUrl=`https://mandarin-hsk1-backend.herokuapp.com/`;

  const pickSelection=(obj)=>setSelection(obj)
  const pickScore=(num)=>setScore(num)
  const pickTotal=(num)=>setTotal(num)
  const handleToggle=()=>setToggle(!toggle)

  useEffect(()=>{
      if(!loading){
          let rand=getRand(characterArr.length)
          let arrangementRand=getRand(24)
          setCorrectObj(characterArr[rand])
          let choiceSet=getThreeOtherRandomNum(rand,characterArr.length).map(num=>characterArr[num]);
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
          let choiceSet=getThreeOtherRandomNum(rand,data.length).map(num=>data[num]);
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
      pickSelection,
      pickScore,
      pickTotal,
      handleToggle
    };

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
              <MainComponent/>
              {/* <PronounciationComponent/> */}
          </dataContext.Provider>
      </div>
  )
}
export default App;
