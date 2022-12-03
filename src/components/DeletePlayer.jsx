import { useState, useEffect } from 'react'

function DeletePlayer({condemnedId, BackOff}) {
    const [status, setStatus] = useState('');
    const [puppy, setPuppies] = useState([]);

    useEffect(() => {
        fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players/${condemnedId}`, { method: 'DELETE' })
          .then(() => setStatus('Delete successful.'))
      }, []);

    return (
        <div className="single-player-view">
            <p>Puppy Removed From Roster.</p>
            <button className="go-back" onClick={BackOff}>Go Back</button>
        </div>
    );
}

export default DeletePlayer