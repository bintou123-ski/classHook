import React,{useState, useEffect} from 'react';

function HookCounterOne() {
    const[counter, setCounter]= useState(0);
   const[name, setName]= useState('')
    useEffect(() => {
        console.log('useEffect updating');
      document.title = `you clicked ${counter} times`
    }, [counter])

    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCounter(counter+1)}>Click {counter} times</button>
        </div>
    )
}

export default HookCounterOne
