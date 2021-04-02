import React, { useState ,useEffect } from 'react'

function HookMouse() {
    const[x,  setX]= useState(0)
    const[y, setY] = useState(0)

    const logMousePosition =(e)=>{
        console.log('Mouse event')
        setX(e.clientX)
         setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffet render only once');
        window.addEventListener('mousemove', logMousePosition)
        
        return()=>{
            console.log('componentwillUnmount');
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
   
    return (
        <div>
            Hooks X_{x} and Y_{y}
        </div>
    )
}

export default HookMouse
