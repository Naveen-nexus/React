import Header from '../components/Header.jsx'; // default export import
import { Fruit } from '../components/Header.jsx'; //name export import
import Lecture1 from '../components/Lecture1.jsx';
import Lecture2 from '../components/Lecture2.jsx';
import Lecture3 from '../components/Lecture3.jsx';   
function App(){
    return(
        <div>
            //<Header ></Header>
            //<Fruit></Fruit>
            <Lecture1></Lecture1>
            <Lecture2></Lecture2>
            <Lecture3></Lecture3>
            <h1>Hello, World!</h1>
            <p>Welcome to my React application.</p>
        </div>
    )
}
  

export default App;
