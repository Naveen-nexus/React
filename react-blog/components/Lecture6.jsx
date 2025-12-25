// what we are going to learn in this lecture
// **********Lecture 6: React useEffect Hook************
//1. what is  props
//2. make component with props
//3. pass data between components
        //var, object , array
//4. receive and display data
//5. pass data in component with click
//6. interview question  

function Lecture6(props){
    return(<div>
        <h2> user components</h2>
        <h3>Name :{props.name}</h3>
        <h3>Age :{props.age}</h3>
        <h3>Email :{props.email}</h3>
    </div>)
}

export default Lecture6;

//**********IMPORTANT************/
//props ka full form hota hai properties
//props kya hota hai ??
//jab bhi hum logo ko react js me ek component se dusre component me data bhejna hota hai to hum props ka use karte hai
//kah sakte hai ye ek type ke parameter hai

//data app.jsx me se pass to kar diya par receive kaise karenege ??
//jo component data receive karega usme hum props ko parameter ke roop me lenge
//example
//function ComponentName(props){
//  return ( <div>{props.data}</div> )
//}