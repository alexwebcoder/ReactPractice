import Card from "./components/Card/Card";
// import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import data from "./data";

const App = () => {
  
  const cards = data.map((item)=> {
    return (
     
        <Card 
          key={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
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