import { useState } from "react"

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    console.log(firstName);
  
    const handleChange = (e) => {
        setFirstName(e.target.value)
        setLastName(e.target.value)

    }

    return(
      <form>
        <input type="text"
               placeholder="First Name"
               onChange={handleChange}
        />
        <input type="text"
               placeholder="Last Name"
               onChange={handleChange}
        />
      </form>
    )
}

export default Form;