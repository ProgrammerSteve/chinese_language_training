import React, {useContext} from "react";
import { DataContext } from '../../context';
import Score from "../score/Score";
import PronounciationDisplay from "../pronounciationdisplay/PronounciationDisplay";
import CharChoiceGrid from "../charchoicegrid/CharChoiceGrid";
import Buttons from "../buttons/Buttons";


const PronounciationComponent = () => {
  const {score,total,correctObj,pickScore,pickTotal,handleToggle,choices,loading,toggle, pickSelection, selection, simplified  }=useContext(DataContext)
  return(
  <div className="mx-auto grid place-content-center gap-2 rounded-2xl bg-red-600 w-[18rem] sm:w-96 h-{100} shadow-xl">
    <Score score={score} total={total}/>
    <PronounciationDisplay correctObj={correctObj} />
    <CharChoiceGrid choices={choices} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection} simplified={simplified} />
    <Buttons pickScore={pickScore} pickTotal={pickTotal} score={score} total={total} correctObj={correctObj} selection={selection} handleToggle={handleToggle}/>
  </div>
);}

export default PronounciationComponent;
