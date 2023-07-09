import Count from "./components/Count";
import Header from "./components/Header";
import { useState } from "react";
// import Meme from "./components/Meme";

const App = () => {

  const [count, setCount] = useState(0);
    
    const add = () => {
        setCount(prevCount => prevCount + 1);
    }
    const subtract = () => {
        setCount(prevCount => prevCount - 1);
    }
  
    console.log('App component rendered');
    
   return (
    <>
      <Header  img="troll.png"/>
    <div className="container">
        <button className="counter-minus" onClick={subtract}>-</button>
      <Count number={count}/>
      <button className="counter-plus" onClick={add}>+</button>
    </div>
    </>
   )
}

export default App;