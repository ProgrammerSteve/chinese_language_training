import React from 'react';
import CharSimplifiedSetting from '../charSimplifiedSetting/CharSimplifiedSetting';
import PageSelector from '../pageSelector/PageSelector';
import PageTabs from '../pageTabs/PageTabs';
import { useChoiceContext } from '../../context/ChoiceContext';

const ScreenSetup=()=>{
    const {page}=useChoiceContext()
    return(
        <>
        <PageTabs/>
        <PageSelector page={page}/>
        <CharSimplifiedSetting/>
        </>
    )
}
export default ScreenSetup;