import Card from "./components/Card/Card";
// import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import data from "./data";

const App = () => {
  
  const cards = data.map((item)=> {
    return (
     
        <Card 
          key={item.id}
          item={item}
        />
    )
  })
  // <Main />
  return(
    <>
    <NavBar />
    <div className="card-list">
      {cards}  
     </div> 
    </>
    
  )
}

export default App;