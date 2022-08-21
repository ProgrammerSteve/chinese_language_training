import Score from "../score/Score";
import CharDisplay from "../chardisplay/CharDisplay";
import ChoiceGrid from "../choicegrid/ChoiceGrid";
import Buttons from "../buttons/Buttons";

const MainComponent=()=>{
    return(
        <div className="mx-auto grid place-content-center gap-2 rounded-2xl bg-red-600 w-[18rem] sm:w-96 h-{100} shadow-xl">
            <Score/>
            <CharDisplay/>
            <ChoiceGrid/>
            <Buttons/>
        </div>
    )
}
export default MainComponent;

