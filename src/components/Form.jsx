import React, {useState} from "react";


const Form = () => {
    const [title, setName] = useState('');
    const [type, setBreed] = useState('');
    const [pic, setPic] = useState('');
    
    const handleSubmit = (event) => {
      event.preventDefault(); //Stop it from disappearing immediately
      submitDog();
      console.log(title, type); //Show me what was typed
      setName(''); //clear the username after it's submitted
      setBreed(''); //clear password after submission (Note: if no value assigned below then password stays)
    };
    const handleChange = (event) => {
      setName(event.target.value); //When value is altered, make the username that input value
    };

    const submitDog = () => {
        fetch("https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: title,
                breed: type,
                imageUrl: pic,
            }),
        })
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       setIsLoaded(true);
        //       setPuppies(result.data.players);
        //     },
        //     // Note: it's important to handle errors here
        //     // instead of a catch() block so that we don't swallow
        //     // exceptions from actual bugs in components.
        //     (error) => {
        //       setIsLoaded(true);
        //       setError(error);
        //     }
        //   )
      }

    return (
      <div id='container'>
        <div id='navbar'>
        </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input className="input" type='text' name='name' value={title} onChange={handleChange} />
            <label htmlFor='breed'>Breed:</label>
            <input className="input" type='text' name='breed' value={type} onChange={(event) => setBreed(event.target.value)}/>
            <label htmlFor='breed'>Image URL:</label>
            <input className="input" type='text' name='imageUrl' value={pic} onChange={(event) => setPic(event.target.value)}/>
            <button className="input" type='submit'>Submit</button>
          </form>
      </div>
    )
  }
  export default Form