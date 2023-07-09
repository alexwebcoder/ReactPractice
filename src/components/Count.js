
const Count = ({number}) => {
    console.log('Count component rendered');
  
    return (
     <div className="counter">
        <div className="counter-count">
           <h1>{number}</h1>
        </div>
     </div>
    )
}

export default Count;