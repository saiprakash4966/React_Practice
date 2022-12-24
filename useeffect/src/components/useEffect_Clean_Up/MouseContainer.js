import HookMouse from "../Run effects only once/HookMouse";
import React, {useState} from  'react';

function MouseContainer() {
    const[display,setDisplay] = useState(true)
    return (
        <div>
        <button onClick={()=> setDisplay(!display)}>Toggle display</button>
        {
            display && <HookMouse/>
        }
        </div>
    );
}

export default MouseContainer;