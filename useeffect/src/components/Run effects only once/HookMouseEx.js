import React , {useState,useEffect} from 'react';

function HookMouseEx() {
    const[a,setA] = useState(0)
    const[b,setB] = useState(0)

    const logMousePosition =(e =>
        {
            console.log('mouse event');
            setA(e.clientA)
            setB(e.clientB)
        })

    useEffect ( ()=>
    {
        console.log('use effect called');
        window.addEventListener('mousemove' , logMousePosition)

    },[])

    return (
        <div>
            A-{a}  B-{b}
            
        </div>
    );
}

export default HookMouseEx;