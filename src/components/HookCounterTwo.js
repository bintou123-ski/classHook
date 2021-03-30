
import React, {useState} from "react";


function HookCounterTwo() {
    const initialCounter = 0
    const[counter, setCounter] = useState(initialCounter);

    const IncrementFive = ()=>{
        for(let i=0; i<5; i++){
        setCounter(prevCounter =>prevCounter +1)
    }
}
    return (
        <div>
            Count:{counter}
            <button  onClick={ ()=>setCounter(initialCounter)}>Reset</button>
            <button  onClick={  ()=>setCounter(prevCounter =>prevCounter +1)}>Increment</button>
            <button  onClick={  ()=>setCounter(prevCounter =>prevCounter - 1)}>Decrement</button>
            <button  onClick={IncrementFive}>Increment5</button>
        </div>
    )
}

export default HookCounterTwo

   
