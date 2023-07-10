import { useState } from "react";
import boxes from "./boxes"
import Box from "./components/Box";

const App = () => {

const [squares, setSquares] = useState(boxes);

const toggle = () => {
  console.log('clicked!')
}


const boxElements = squares.map((square) => <Box key={square.id} on={square.on}  toggle={toggle}/>)

  return (
      <h1>{boxElements}</h1>
  )

}

export default App;