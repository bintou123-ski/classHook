import React,{useState} from 'react'
import HookMouse from './HookMouse'

function Mousecontainer() {
    const[display, setDisplay] = useState()
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default Mousecontainer
