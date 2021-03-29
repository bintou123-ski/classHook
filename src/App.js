import React from 'react';
import ReactDOM  from "react-dom";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookCounterTwo from "./components/HookCounterTwo";

const App = ()=>{
    return(
        <div>
            <ClassCounterTwo/>
            <HookCounterTwo/>
           {/*<ClassCounter/>
            <HookCounter/>*/}
        </div>
    )
}
export default App;