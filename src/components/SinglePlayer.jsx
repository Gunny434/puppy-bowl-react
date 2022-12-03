import { useState, useEffect } from 'react'
import DeletePlayer from './DeletePlayer';

function SinglePlayer({selectedId, GoBack}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [puppy, setPuppies] = useState([]);
  const [condemned, setCondemned] = useState(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  const BackOff = () => {
    setCondemned(null);
  }

  const CondemnPlayer = (event) => {
    setCondemned (event.target.dataset.id);
    console.log(event.target.dataset.id);
  }

  useEffect(() => {
    fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players/${selectedId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPuppies(result.data.player);
          console.log(puppy);
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

    if (!condemned) {
        return (
            <div key={puppy.id} className="single-player-view">
                <div className="header-info">
                <p className="pup-title">{puppy.name}</p>
                <p className="pup-number">{puppy.id}</p>
                </div>
                <img src={puppy.imageUrl}/>
                <button className="delete-button" data-id={puppy.id} onClick={CondemnPlayer}>Remove Player</button>
                <button className="go-back" onClick={GoBack}>Go Back</button>
            </div>
        );
    } else {
        <DeletePlayer CondemnedId={condemned} BackOff={BackOff} />
    }


  }
}

export default SinglePlayer