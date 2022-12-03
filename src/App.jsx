import { useState, useEffect } from 'react'
import './App.css'
import SinglePlayer from './components/SinglePlayer';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [puppies, setPuppies] = useState([]);
  const [selected, setSelected] = useState(null);

  const GoBack = () => {
    setSelected(null);
  }

  const SelectPlayer = (event) => {
    setSelected (event.target.dataset.id);
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPuppies(result.data.players);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    if (!selected) {
      return (
        <div id='all-players-container'>
          {puppies.map(puppy => (
              <div key={puppy.id} className="single-player-card">
                <div className="header-info">
                  <p className="pup-title">{puppy.name}</p>
                  <p className="pup-number">{puppy.id}</p>
                </div>
                <img src={puppy.imageUrl}/>
                <button className="detail-button" data-id={puppy.id} onClick={SelectPlayer}>See Details</button>
                <button className="delete-button" onClick={null}>Remove Player</button>
              </div>
          ))}
        </div>
      );
    } else {
      return (
        <SinglePlayer selectedId={selected}  GoBack={GoBack} />
      )
    }
  }
}

export default App
