import React , {useState ,useEffect} from 'react';

function HookCounterExample() {
    const[increment,setIncrement] =useState(0)
    const[user,setUser] = useState('')

    useEffect(() =>{
        console.log('useEffect : updating element')
        document.title = `You clicked ${increment} times`;
    },[increment])

    
    return (
        <div>
            <input type='text' value={user} onChange={e => setUser(e.target.value)}/>
            <button onClick={() => setIncrement(increment+1)}> Click {increment} times</button>
        </div>
    );
}

export default HookCounterExample;