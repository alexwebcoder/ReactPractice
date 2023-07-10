import { useState } from "react";


const Box = ({on}) => {  

    const [onOrOff, setOnOrOff] = useState(on);

    
    const styles = {
        
        backgroundColor: onOrOff  ?  '#222' : 'transparent'
        
    }
    
    const handleState = () => {
        setOnOrOff((prevState) => !prevState)
    }
    
    return (
        <div onClick={handleState} style={styles} className="square-parent"></div>
    )
}

export default Box;