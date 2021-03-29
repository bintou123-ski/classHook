import React from 'react';
import ReactDOM  from "react-dom";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";

const App = ()=>{
    return(
        <div>
            <ClassCounter/>
            <HookCounter/>
        </div>
    )
}
export default App;