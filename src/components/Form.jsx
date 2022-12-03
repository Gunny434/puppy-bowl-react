import React, {useState} from "react";
const Form = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault(); //Stop it from disappearing immediately
      console.log(name, breed); //Show me what was typed
      setName(''); //clear the username after it's submitted
      setBreed(''); //clear password after submission (Note: if no value assigned below then password stays)
    };
    const handleChange = (event) => {
      setName(event.target.value); //When value is altered, make the username that input value
    };
    return (
      <div id='container'>
        <div id='navbar'>
        </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input className="input" type='text' name='name' value={name} onChange={handleChange} />
            <label htmlFor='breed'>Breed:</label>
            <input className="input" type='text' name='breed' value={breed} onChange={(event) => setBreed(event.target.value)}/>
            <button className="input" type='submit'>Submit</button>
          </form>
      </div>
    )
  }
  export default Form