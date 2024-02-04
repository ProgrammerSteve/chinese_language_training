import React from "react";
import Score from "../score/Score";
import PronounciationDisplay from "../pronounciationdisplay/PronounciationDisplay";
import CharChoiceGrid from "../charchoicegrid/CharChoiceGrid";
import Buttons from "../buttons/Buttons";

const PronounciationComponent=()=>{
    return(
        <div className="mx-auto grid place-content-center gap-2 rounded-2xl bg-red-600 w-[18rem] sm:w-96 h-{100} shadow-xl">
            <Score/>
            <PronounciationDisplay/>
            <CharChoiceGrid/>
            <Buttons/>
        </div>
    )
}
export default PronounciationComponent;

