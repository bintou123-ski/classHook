import React from 'react';

import ReactDOM  from "react-dom";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from './components/HookCounterThree';
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import Mousecontainer from './components/Mousecontainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';

const App = ()=>{
    return(
        <div>
            <DataFetching/>
           {/*<IntervalHookCounter/>
             <Mousecontainer/>
            <HookMouse/>
             <ClassCounterOne/>
          <HookCounterOne/>
            <HookCounterThree/>
            <ClassCounterTwo/>
            <HookCounterTwo/>
           <ClassCounter/>
            <HookCounter/>*/}
        </div>
    )
}
export default App;