function Header(){
    return(<div>
        
        <h1>My Blog</h1>
        <p>Insights and updates from my coding journey.</p>
    </div>)
}

export function Fruit(){  //named export
    return(
        <div>  
            <h2>Fruits I like:</h2>
            <ul>
                <li>Mango</li>          
                <li>Banana</li>
                <li>Orange</li>
                <li>Grapes</li>     
            </ul>
        </div>
    )
} 

export default Header; // default export