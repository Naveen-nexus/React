import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const[reverseCount, setReverseCount] = useState(10);
    return (<div>
        <h2>Counter:{count}</h2>
        <h2>Reverse Counter:{reverseCount}</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setReverseCount(reverseCount-1)}>Decrement</button>
    </div>)
}
export default Counter;