import React, { useState ,useEffect} from 'react';

function HookCounterEx() {
   
    const[increment,setIncrement] = useState(0)

    useEffect ( () =>
    {
        document.title = `You incremented ${increment} times`
    })

    return (
        <div>
            <button onClick={() => setIncrement(increment +1)}> Increment  {increment} times </button>
            
        </div>
    );
}

export default HookCounterEx;