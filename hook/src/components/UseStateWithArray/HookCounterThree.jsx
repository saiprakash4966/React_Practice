import React , {useState} from 'react';

function HookCounterThree() {
    const[items,setItems] = useState([])

   const addItem = () => 
   {
    setItems([...items,{                             // ...item -> spread operator
        id : items.length,
        value : Math.floor(Math.random() * 10) + 1
    }])

   }

    return (
        <div>
            <button onClick={addItem}>ADD A NUMBER</button>
            <ul>
                {
                    items.map (item =>(
                        <li key={items.id} >{items.value}</li>
                    ) )

                }
            </ul>
        </div>
    );
}

export default HookCounterThree;