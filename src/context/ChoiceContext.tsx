import React, { useState, useEffect, useContext, createContext } from "react";
import { getRand,getThreeOtherRandomStrings,possibilitySet } from "../utilities/random.utils";
import { Characters } from "../Characters";






// const backendUrl=`https://mandarin-hsk1-backend.herokuapp.com/`;
// const backendUrl=`https://kind-ruby-lobster.cyclic.app/`;

/* Example of ChoiceData
{
Category: "Expression"
Character: "喂"
Meaning: "hello (on the phone)"
Pronounciation: "wèi"
Traditional: "喂"
_id: "62d710a46c68398f3699cc22"
}
*/

export type ChoiceData={
    Category:string,
    Character:string,
    Meaning:string,
    Pronounciation:string,
    Traditional:string,
    _id:string
}

function getData():Promise<ChoiceData[]>{
    // return fetch('https://kind-ruby-lobster.cyclic.app/')
    // .then(res => res.json())
    // .then(res => {
    //   return res as ChoiceData[]
    // })
    return new Promise<any>((resolve,reject)=>{
      resolve(Characters as ChoiceData[])
    })
}

interface IProps extends React.PropsWithChildren<{}> {}

interface ChoiceContextValue {
    characterArr:ChoiceData[];
    selection:ChoiceData|null;
    choices:ChoiceData[];
    correctObj:ChoiceData|null;
    score:number;
    total:number;
    loading:boolean;
    toggle:boolean;
    simplified:boolean;
    page:string;
    pickSelection:(obj:ChoiceData|null)=>void;
    pickScore:(num:number)=>void;
    pickTotal:(num:number)=>void;
    handleToggle:()=>void;
    handleSimplified:()=>void;
    handleSetToSimplified:()=>void;
    handleSetToTraditional:()=>void;
    handleSetPage:(page:string)=>void;
}

export const ChoiceContext = createContext<ChoiceContextValue>({
    characterArr:[],
    selection:null,
    choices:[],
    correctObj:null,
    score:0,
    total:0,
    loading:true,
    toggle:true,
    simplified:true,
    page:'character',
    pickSelection:()=>null,
    pickScore:()=>null,
    pickTotal:()=>null,
    handleToggle:()=>null,
    handleSimplified:()=>null,
    handleSetToSimplified:()=>null,
    handleSetToTraditional:()=>null,
    handleSetPage:()=>null
  });
  
  export function ChoiceContextProvider(props: IProps) {

    const [characterArr, setCharacterArr]=useState<ChoiceData[]>([]);
    const [selection, setSelection]=useState<ChoiceData|null>(null);
    const [correctObj, setCorrectObj]=useState<ChoiceData|null>(null);
    const [score, setScore]=useState<number>(0);
    const [total, setTotal]=useState<number>(0);
    const [choices, setChoices]=useState<ChoiceData[]>([]);
    const [loading,setLoading]=useState<boolean>(true)
    const [toggle,setToggle]=useState<boolean>(true)
    const [simplified,setSimplified]=useState<boolean>(true)
    const [page,setPage]=useState<string>('character');
    const pickSelection=(obj:ChoiceData|null)=>setSelection(obj)
    const pickScore=(num:number)=>setScore(num)
    const pickTotal=(num:number)=>setTotal(num)
    const handleToggle=()=>setToggle(!toggle)
    const handleSimplified=()=>setSimplified(!simplified)
    const handleSetToSimplified=()=>setSimplified(true)
    const handleSetToTraditional=()=>setSimplified(false)
    const handleSetPage=(page:string)=>setPage(page)
        
    
    useEffect(()=>{
        if(loading)return
        let rand=getRand(characterArr.length)
        let arrangementRand=getRand(24)
        setCorrectObj(characterArr[rand])
        let choiceSet=getThreeOtherRandomStrings(rand,characterArr.length,characterArr).map(num=>characterArr[num]);
        let arrangementSet=possibilitySet[arrangementRand];
        setChoices(arrangementSet.map(num=>choiceSet[num]))
    },[toggle])
  
    useEffect(()=>{
        const pullData=async()=>{
            const data= await getData()
            let rand=getRand(data.length) //gets random index from the data
            let arrangementRand=getRand(24) //random number from 0-23
            setTotal(0)
            setCharacterArr(data);
            setCorrectObj(data[rand])
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
        page,
        pickSelection,
        pickScore,
        pickTotal,
        handleToggle,
        handleSimplified,
        handleSetToSimplified,
        handleSetToTraditional,
        handleSetPage
      };
    return (
      <ChoiceContext.Provider value={value}>
        {props.children}
      </ChoiceContext.Provider>
    );
  }

  export function useChoiceContext() {
    return useContext(ChoiceContext);
  }