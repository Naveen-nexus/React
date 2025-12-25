import { useState , useContext, useEffect , useId } from 'react';
import Counter from './CounterLecture3';
//what we are going to learn in this file
    // State in React//
//1. why is state required
//2. what is state
//3. what is hook 
//4. example of state
//5. state in different components
//6. multiple state 
//7. interview question

function Lecture3() {
  const [fruit, setFruit] = useState("apple");
  const handleFruit = () => {
    setFruit("banana");
  }

  return (<div>
    <h1> # 3.State in react Js #</h1>
    <h2>Fruit Name: {fruit}</h2>
    <button onClick={handleFruit}>Change Fruit</button>
    <Counter></Counter>
    
  </div>
  )
}

export default Lecture3;


//*****************************IMPORTANT************************************ //

//mai chahata hu ki jab button pe click ho to fruit ka name change ho jaye banana ban jaye to sbse phale variable banaunga fruit jisme banana store hoga aur onClick event laga dunga button pe click hote hi change ho jayga par aisa nahi hoga

//react ke components ke andar values tabhi display hoti hai jb vo rerender hota hai mtlb jb component dobara se chalta hai
//ab jb button pe click hoga to handleFruit function chalega aur fruit variable ka value change ho jayga par component rerender nahi hoga isliye fruit ka name change nahi hoga UI pe 

//react variable ko kuch nahi samajta humko state ka use karna padega

//state ek aisa object hai jisme component ke data ko store kiya jata hai aur jb bhi state ka data change hota hai to component rerender hota hai

//differnce between state and variable
//1. state ek object hai jisme component ke data ko store kiya jata hai jabki variable ek simple value hota hai
//2. jb bhi state ka data change hota hai to component rerender hota hai jabki variable ka data change hone se component rerender nahi hota hai
//3. state ko hum useState hook ke through create karte hai jabki variable ko hum simple assignment ke through create karte hai

//uska use kare kerenege kaise ??

//react me state ko create karne ke liye hum useState hook ka use karna padega aur usko import kafna padega react se
//hooks are the special functions which allow us to use state and other react features in functional components
//jinke starting me use likha hota hai unhe hook kaha jata hai 

//useState hook ek function hai jo do cheeze return karta hai
//1. state value
//2. update state function

//syntax
// const [state, setState] = useState(initialState);

// agar change karna hoga to function banayenge jisme setState function ko call karenge aur usme new value pass karenge
//ab jb button pe click hoga to handleFruit function chalega aur setFruit function call hoga jisme new value "banana" pass hogi aur fruit variable ka value change ho jayga aur component rerender ho jayga isliye fruit ka name change ho jayga UI pe



