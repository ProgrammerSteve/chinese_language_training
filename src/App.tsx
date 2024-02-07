import React, {useState} from "react";
import ScreenSetup from './components/screenSetup/ScreenSetup';
import Navbar from "./components/navbar";

import './App.css';
import { ChoiceContextProvider } from './context/ChoiceContext';
const App=()=>{


  const [page,setPage]=useState<string>('home')
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const toggleSidebar=()=>{
    setIsOpen(!isOpen)
  }
  const handleSelection=(page:string)=>{
      setPage(page)
  }

  return(
        
    <>
          <ChoiceContextProvider>
          <Navbar page={page} handleSelection={handleSelection} toggleSidebar={toggleSidebar} isOpen={isOpen}/>
          <div className="page-height pt-4 flex  flex-col place-content-center">
            <ScreenSetup/>
          </div>
          </ChoiceContextProvider>

          </>
 
  )
}
export default App;
