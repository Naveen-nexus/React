import { useState } from 'react';
import CollegeLecture6 from '../components/College.jsx';
import Counter from '../components/CounterLecture3.jsx';
import Header from '../components/Header.jsx'; // default export import
import { Fruit } from '../components/Header.jsx'; //name export import
import Lecture1 from '../components/Lecture1.jsx';
import Lecture2 from '../components/Lecture2.jsx';
import Lecture3 from '../components/Lecture3.jsx';   
import Lecture4 from '../components/Lecture4.jsx';
import Lecture5 from '../components/Lecture5.jsx';
import Lecture6 from '../components/Lecture6.jsx';
import College from '../components/College.jsx';
import StudentLecture6 from '../components/StudentLecture6.jsx';
import Lecture7 from '../components/Lecture7.jsx';
function App(){
     // 1. pass the data by varaibles
    let userName= "Naveen Kumar";   
    let userAge= 21;
    let userEmail= "naveen@gmail.com"

    //2. pass the data by object
    let userObj={
        name: "Naveen kumar",
        age: 21,
        email: "naveen@gmail.com"
    }
    let userObj2={
        name: "chirag kumar",
        age: 18,
        email: "chirag@gmail.com"
    }
    //3. pass the data by array of objects
    let userArrayObj=["IIT", "IIM", "NIT", "BITS"];
    const [student , setStudent]= useState();
    return(
        <div>
            {/* <Header></Header> */}
            {/* <Fruit></Fruit> */}
            <Lecture1></Lecture1>
            <Lecture2></Lecture2>
            <Lecture3></Lecture3>
            <Lecture4></Lecture4>
            <Lecture5></Lecture5>
            <h1> # 6.Props in React #</h1>
            {/* 1. pass data by variables */}
            {/*<Lecture6 name={userName} age={userAge} email={userEmail}></Lecture6> */}

             {/* 2. pass data by object */}
             <Lecture6 {...userObj}></Lecture6>  
             <hr />
             <Lecture6 name={userObj2.name} age={userObj2.age} email={userObj2.email}></Lecture6>
             <hr />
                {/* 3. pass data by array of objects */}
            <College name={userArrayObj}></College>

           { student  && <StudentLecture6 name={student}></StudentLecture6>}
           <button onClick={()=>setStudent('bhaskar')}>Change Student Name</button>


           <Lecture7></Lecture7>
            {/*<h1>Hello, World!</h1> */}
            {/*<p>Welcome to my React application.</p> */}
        </div>
    )
}
  

export default App;
