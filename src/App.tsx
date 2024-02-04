import React from "react";
import './App.css';
import ScreenSetup from './components/screenSetup/ScreenSetup';

import { ChoiceContextProvider } from './context/ChoiceContext';
const App=()=>{
  return(
        
      <div className="h-screen w-screen grid place-content-center ">
          <ChoiceContextProvider>
            <ScreenSetup/>
          </ChoiceContextProvider>
      </div>
  )
}
export default App;
