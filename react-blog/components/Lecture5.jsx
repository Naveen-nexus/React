 //*************Apply multiple conditions in React **************** */
    //process
    //1. create state and button
    //2. change state value on button click
    //3. add multiple conditions for toggle
import { useState } from 'react';

function Lecture5(){
    const [count, setCount] = useState(0);
    return(<>
        <h1> # 5.Apply multiple conditions in React #</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Increase Count</button>
         {
        count==0?<h2>Condition 0</h2>
        :count ==1?<h2>Condition1</h2>
        :count ==2?<h2>Condition2</h2>
        :count ==3?<h2>Condition3</h2>
        :count ==4?<h2>Condition4</h2>
        :<h2>other condition</h2>

    }
    </>)
}
export default Lecture5;