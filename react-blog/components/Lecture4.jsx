//what we are going to learn today
    //**************Toggle or hide and Show in React *******************/
    //1. Define State
    //2. Update state on button click
    //3. add condition for toggle
    //4. Hide and show content
    //5 task for practice
    //6. interview question


 //react me hum kisi bhi cheez ko hide or show kar sakte hai STATE ke through aur conditional item ko render karvate hai  

 import { useState } from 'react';
 function Lecture4(){
    const [display, setDisplay] = useState(true);
    return(<div>
        <h1> # 4.Toggle or Hide and Show in React #</h1>
        {/* {
            display? <p>Naveen kumar</p>:null
        } */}
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {
            display?<h2>Chirag kumar</h2>:null
        }
    </div>
    )
 }
 export default Lecture4;



 //**************************IMPORTANT**********************************//
 //agar true kar deta hu to hamesha dikhega aur false karne pe hamesha hide rahega

 //ab button lagate hai jisse click karne pe hide and show ho jaye





