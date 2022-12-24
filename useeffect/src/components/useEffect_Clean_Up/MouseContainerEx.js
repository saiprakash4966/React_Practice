import React, { useState } from 'react';
import HookMouse from '../Run effects only once/HookMouse';

function MouseContainerEx() {
    const[show,setShow] = useState(true)
    return (
        <div>
        <button onClick={()=> setShow(!show)}> Show</button>
          {
            show && <HookMouse/>
          }  
        </div>
    );
}

export default MouseContainerEx;