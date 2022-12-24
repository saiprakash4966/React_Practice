import React ,{ useState , useEffect} from 'react';

function IntervalHookExample() {
    const[increment,setIncrement] = useState(0)

    const tick = () =>
    {
        setIncrement(prevIncrement =>prevIncrement+1)
    }
    

    useEffect(() =>
    {
        const interval = setInterval(tick,1000)

        return  () =>
        {
            clearInterval(interval)
        }

    },[]) 
    return (
        <div>
         {increment}   
        </div>
    );
}

export default IntervalHookExample;