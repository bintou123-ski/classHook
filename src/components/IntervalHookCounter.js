import React,{useEffect, useState} from 'react'

function IntervalHookCounter() {
    const[counter,setCounter] = useState(0)
    
    const tick=()=>{
        setCounter(counter+1)
    }

    useEffect(()=>{
        console.log('useEffect render');
        const interval = setInterval(tick, 1000)
return()=>{
    clearInterval(interval)
}
},[counter])
    return (
        <div>
            {counter}
        </div>
    )
}

export default IntervalHookCounter
