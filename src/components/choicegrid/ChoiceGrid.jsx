import React from 'react';
import Choice from "../choice/Choice";

const ChoiceGrid=({choices,loading, toggle, pickSelection, selection})=>(
        <div className="h-28 grid grid-cols-2 justify-evenly w-[16rem] sm:w-80 mx-auto">
                <Choice obj={choices[0]} index={0} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection}/>
                <Choice obj={choices[1]} index={0} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection}/>
                <Choice obj={choices[2]} index={0} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection}/>
                <Choice obj={choices[3]} index={0} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection}/>
        </div>
    )
export default ChoiceGrid;