import React from "react";
import MainComponent from "../maincomponent/MainComponent";
import DefinitionComponent from '../definitioncomponent/DefinitionComponent';
import PronounciationComponent from '../pronounciationcomponent/PronounciationComponent';
import { FC } from "react"


export const PAGE_CLASSES={
    character: "character",
    pronounciation: "pronounciation",
    definition: "definition"
}
  
const getPage=(page= PAGE_CLASSES.character)=>{
return({
    [PAGE_CLASSES.character]: MainComponent,
    [PAGE_CLASSES.pronounciation]: DefinitionComponent,
    [PAGE_CLASSES.definition]: PronounciationComponent,
}[page]
)}


interface PageProps {
page:string
}

const PageSelector:FC<PageProps> =({page})=>{
    const CustomPage=getPage(page);
    return(
    
    <div className='page-height grid place-items-center'><CustomPage/></div>
    
    )
}

export default PageSelector