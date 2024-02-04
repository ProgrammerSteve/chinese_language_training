import React from "react";
import Score from "../score/Score";
import CharDisplay from "../chardisplay/CharDisplay";
import Buttons from "../buttons/Buttons";
import DefinitionChoiceGrid from "../definitionchoicegrid/DefinitionChoiceGrid";

const DefinitionComponent=()=>{
    return(
        <div className="mx-auto grid place-content-center gap-2 rounded-2xl bg-red-600 w-[18rem] sm:w-96 h-{100} shadow-xl">
            <Score/>
            <CharDisplay/>
            <DefinitionChoiceGrid/>
            <Buttons/>
        </div>
    )
}
export default DefinitionComponent;

