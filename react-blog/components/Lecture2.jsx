//what we are going to learn from this file\
    //Click Event and Function call//
//1. difference btw js function call and react function call
//2. make a function
//3. make button and click event
//4. call function on click event
//5. call arrow function
//6. pass para with function call
//7. interview question
//automatic function call in react kya hota hai?
//kyo ki onClick definatio pe depend karta hai function ka


function Lecture2 (){
    function showAlert(){      //1st example with normal function
        alert("Button clicked!");
    }
    const fruit = ()=>{       //2nd example with arrow function
        alert("this is fruit function");
    }
                            //3rd exampleagar parameter pass karna hai to
    const greetUser = (name)=>{
        alert(name);
    }
    return(<div>
        <h1>Event and function call</h1>
        <button onClick={showAlert}>Click Me</button>
        <button onClick={fruit}>Fruit Button</button>
        <button onClick={()=>greetUser('Naveen')}>Greet User</button>
    </div>)
}

export default Lecture2;

