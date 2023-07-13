import { useState } from "react";
import boxes from "./boxes"
import Box from "./components/Box";

const App = () => {

const [squares, setSquares] = useState(boxes);

const toggle = (id) => {
 setSquares((prevSquares) => {
  return prevSquares.map((square)=>{
    return square.id === id ? {...square, on:!square.on} : square;
  })
 })
}


const boxElements = squares.map((square) => <Box key={square.id} on={square.on}  toggle={toggle} id={square.id}/>)

  return (
      <h1>{boxElements}</h1>
  )

}

export default App;