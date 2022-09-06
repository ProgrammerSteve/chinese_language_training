import React from 'react';
import CharChoice from '../charchoice/CharChoice';

const CharChoiceGrid=({choices,loading,toggle, pickSelection, selection, simplified})=>(
        <div className="h-28 grid grid-cols-2 justify-evenly w-[16rem] sm:w-80 mx-auto">
                <CharChoice obj={choices[0]} index={0} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection} simplified={simplified}/>
                <CharChoice obj={choices[1]} index={1} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection} simplified={simplified}/>
                <CharChoice obj={choices[2]} index={2} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection} simplified={simplified}/>
                <CharChoice obj={choices[3]} index={3} loading={loading} toggle={toggle} pickSelection={pickSelection} selection={selection} simplified={simplified}/>
        </div>
    )
export default CharChoiceGrid;