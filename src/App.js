import { useState } from "react";
import boxes from "./boxes"

const App = ({darkMode}) => {

const [squares, setSquares] = useState(boxes);
console.log(squares.length)
// props.darkMode;

const styles = {
  // backgroundColor: darkMode ? '#000' :  '#ccc'
  backgroundColor: 'red'
  
}

squares.length % 2 === 0 ? styles.backgroundColor = 'yellow' : styles.backgroundColor = 'red'


const boxElements = squares.map((square) => <div style={styles} className="square-parent" key={square.id}></div>)
  return (
      <h1>{boxElements}</h1>
  )

}

export default App;