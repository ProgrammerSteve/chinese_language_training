import React, {useContext} from "react";
import { DataContext } from '../../context';
import Score from "../score/Score";
import CharDisplay from "../chardisplay/CharDisplay";
import ChoiceGrid from "../choicegrid/ChoiceGrid";
import Buttons from "../buttons/Buttons";

const MainComponent = () => {
    const {score,total,correctObj, simplified,pickScore,pickTotal,handleToggle,choices,loading, toggle, pickSelection, selection   }=useContext(DataContext)
    return (
        <div className="mx-auto grid place-content-center gap-2 rounded-2xl bg-red-600 w-[18rem] sm:w-96 h-{100} shadow-xl">
            <Score score={score} total={total}/>
            <CharDisplay correctObj={correctObj} simplified={simplified} />
            <ChoiceGrid choices={choices} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection} />
            <Buttons pickScore={pickScore} pickTotal={pickTotal} score={score} total={total} correctObj={correctObj} selection={selection} handleToggle={handleToggle}/>
        </div>
    );
};
export default MainComponent;
