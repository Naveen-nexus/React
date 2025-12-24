function Lecture1(){
    const name= "naveen hero";  //1st way to declare variable
    const userObj ={           // array as well
        name : "naveen",
        email : "anil@test.com",
        age:21

    }
    let x= 20;                  //2nd way to declare variable
    let y= 30;                  //3rd way to declare variable
    let path = "https://images.pexels.com/photos/35114278/pexels-photo-35114278.jpeg"; // image path variable
    function chirag(){          //function bhi kar sakte hai 
        return "this is chirag";
    }
    function operation (a, b ,op){  // function with parameters
        if(op== '+'){
            return a + b;
        }
        else if (op== '-'){
            return a - b;
        }
        else{
            return a*b
        }
        return
    }
    return(<div>
        <h1>Hello {name}</h1>
        <h2>{x + y}</h2>
        {chirag()}
        {operation(10, 5, '//')}
        <h2>{userObj.age}</h2>

        <img src="https://independentaustralia.net/_lib/slir/w800-c660x434/i/article/img/article-19811-hero.jpg?t=1749265169" alt="" />

        <img src={path} height="435" width="500"/>
    </div>
    )
}


export default Lecture1;


//what we learned in this file
//1. user variable with jsx
//2. condition in jsx
//3. function in jsx
//4. function with parameters in jsx
//5. object and array in jsx
//6. html tags in jsx
