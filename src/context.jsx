import React, { 
  useState, 
  createContext, 
  useEffect,
  useMemo
} from "react";
import {
  getThreeOtherRandomStrings,
  possibilitySet,
  getRand,
} from './utilities/random.utils';

export const DataContext = createContext();

export const DataProvider=({children})=>{
  const [characterArr, setCharacterArr] = useState([]);
  const [selection, setSelection] = useState({});
  const [correctObj, setCorrectObj] = useState('');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [simplified, setSimplified] = useState(true);
  const backendUrl = `https://kind-ruby-lobster.cyclic.app/`;
  const pickSelection = (obj) => setSelection(obj);
  const pickScore = (num) => setScore(num);
  const pickTotal = (num) => setTotal(num);
  const handleToggle = () => setToggle(!toggle);
  const handleSimplified = () => setSimplified(!simplified);

  useEffect(() => {
    if (!loading) {
      const rand = getRand(characterArr.length);
      const arrangementRand = getRand(24);
      setCorrectObj(characterArr[rand]);
      //   let choiceSet=getThreeOtherRandomNum(rand,characterArr.length).map(num=>characterArr[num]);
      const choiceSet = getThreeOtherRandomStrings(
        rand,
        characterArr.length,
        characterArr
      ).map((num) => characterArr[num]);
      const arrangementSet = possibilitySet[arrangementRand];
      setChoices(arrangementSet.map((num) => choiceSet[num]));
    }
  }, [toggle]);

  useEffect(() => {
    const pullData = async () => {
      const data = await fetch(backendUrl).then((resp) => resp.json());
      console.log('data: ',data);
      const rand = getRand(data.length);
      const arrangementRand = getRand(24);
      setTotal(0);
      setCharacterArr(data);
      setCorrectObj(data[rand]);
      //   let choiceSet=getThreeOtherRandomNum(rand,data.length).map(num=>data[num]);
      const choiceSet = getThreeOtherRandomStrings(rand, data.length, data).map(
        (num) => data[num]
      );
      const arrangementSet = possibilitySet[arrangementRand];
      setChoices(arrangementSet.map((num) => choiceSet[num]));
      setLoading(false);
    };
    pullData();
  }, []);

  const value = useMemo(()=>({
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
    handleSimplified,
  }),[characterArr,toggle,selection,choices,correctObj,score,total,loading,simplified]);

return(
  <DataContext.Provider value={value}>
      {children}
  </DataContext.Provider>
)
}