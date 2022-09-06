import './App.css';
import React, { useState } from 'react';
import MainComponent from './components/maincomponent/MainComponent';
import DefinitionComponent from './components/definitioncomponent/DefinitionComponent';
import PronounciationComponent from './components/pronounciationcomponent/PronounciationComponent';
import { DataProvider } from './context';

const App = () => {
  const [page, setPage] = useState('character');
  const [simplified, setSimplified] = useState(true);
  const handleSimplified = () => setSimplified(!simplified);
  const characterKeyPress='q'
  const pronounciationKeyPress='w'
  const definitionKeyPress='e'
  const simplifiedKeyPress='r'

  const handleCharacterKeyDown = event => {
    event.preventDefault();
    if(event.keycode===`${characterKeyPress}`){
      setPage('character')
    }
  }
  const handlePronounciationKeyDown = event => {
    event.preventDefault();
    if(event.keycode===`${pronounciationKeyPress}`){
      setPage('pronounciation')
    }
  }
  const handleDefinitionKeyDown = event => {
    event.preventDefault();
    if(event.keycode===`${definitionKeyPress}`){
      setPage('definition')
    }
  }
  const handleSimplifiedKeyDown = event => {
    event.preventDefault();
    if(event.keycode===`${simplifiedKeyPress}`){
      handleSimplified();
    }
  }
  
  // migrate project to a nextjs framework
  // Add navigation bar for hsk1,2,3...
  // create an auth page for signing in and out
  // create a profile page to show what each person got right or wrong
  // allow for scores to be reset
  // add weighted random number function based on right and wrong answers
  return (
    <div className="h-screen w-screen grid place-content-center ">
      <DataProvider>
        <div className="flex justify-around mb-3">
          <div
          onKeyDown={handleCharacterKeyDown} tabIndex={-2} role="radio" aria-checked="false"
            className={`${
              page === 'character'
                ? 'bg-blue-700 text-gray-100'
                : 'bg-blue-300 text-gray-600'
            } rounded-lg w-20 sm:w-24 text-center cursor-pointer select-none`}
            onClick={() => setPage('character')}
          >
            Characters
          </div>
          <div
          onKeyDown={handlePronounciationKeyDown} tabIndex={-3} role="radio" aria-checked="false"
            className={`${
              page === 'pronounciation'
                ? 'bg-red-700 text-gray-100'
                : 'bg-red-300 text-gray-600'
            } rounded-lg w-28 sm:w-32 text-center cursor-pointer select-none`}
            onClick={() => setPage('pronounciation')}
          >
            Pronounciation
          </div>
          <div
          onKeyDown={handleDefinitionKeyDown} tabIndex={-4} role="radio" aria-checked="false"
            className={`${
              page === 'definition'
                ? 'bg-green-700 text-gray-100'
                : 'bg-green-300 text-gray-600'
            } rounded-lg w-20 sm:w-24 text-center cursor-pointer select-none`}
            onClick={() => setPage('definition')}
          >
            Definition
          </div>
        </div>
        {page === 'character' && <MainComponent />}
        {page === 'pronounciation' && <PronounciationComponent />}
        {page === 'definition' && <DefinitionComponent />}
        <div className="w-30 h-10 bg-gray-100 flex justify-around items-center rounded-lg mt-2">
          <div>Simplified</div>
          <div
          onKeyDown={handleSimplifiedKeyDown} tabIndex={-5} role="radio" aria-checked="false"
            onClick={handleSimplified}
            className={`w-1/4 h-8 rounded-lg bg-gray-200 flex ${
              simplified ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className="w-1/2 h-8 rounded-lg bg-gray-600 border-4 border-gray-400" />
          </div>
          <div>Traditional</div>
        </div>
      </DataProvider>
    </div>
  );
};
export default App;
