import React from 'react';
import DefinitionChoice from '../definitionchoice/DefinitionChoice';

const DefinitionChoiceGrid=({choices,loading,toggle, pickSelection, selection })=>(
        <div className="h-28 grid grid-cols-2 justify-evenly w-[16rem] sm:w-80 mx-auto">
            <DefinitionChoice obj={choices[0]} index={0} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection}/>
            <DefinitionChoice obj={choices[0]} index={1} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection}/>
            <DefinitionChoice obj={choices[0]} index={2} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection}/>
            <DefinitionChoice obj={choices[0]} index={3} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection}/>
        </div>
    )

export default DefinitionChoiceGrid;