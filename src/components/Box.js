import { useState } from "react";


const Box = ({on, toggle}) => {  
    
    const styles = {
        
        backgroundColor: on ?  '#222' : 'transparent'
        
    }
    
    
    return (
        <div style={styles} className="square-parent" onClick={toggle}></div>
    )
}

export default Box;