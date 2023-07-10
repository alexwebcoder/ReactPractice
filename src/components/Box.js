import { useState } from "react";


const Box = ({on, toggle, id}) => {  
    
    const styles = {
        
        backgroundColor: on ?  '#222' : 'transparent'
        
    }
    
    
    return (
        <div 
        style={styles} 
        className="square-parent" 
        onClick={() => toggle(id)}
        >

        </div>
    )
}

export default Box;