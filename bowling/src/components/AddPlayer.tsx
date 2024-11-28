import React, { useContext, useRef } from 'react'
import { Score } from '../models/Score';
import { Player } from '../models/Player';
import { GameContext } from '../store/GameContext';

function AddPlayer() {
  const playerRef = useRef<HTMLInputElement>(null);
  const {game, setGame} = useContext(GameContext);

  function lisa() {
    if (playerRef.current === null) {
      return;
    }
    game.scores.push(new Score(new Player(playerRef.current.value)));
    setGame({...game});
  }

  return (
    <div>
       <label>Mängija</label> <br />
        <input ref={playerRef} type="text" /> <br />
        <button onClick={lisa}>Lisa</button> <br /><br />
    </div>
  )
}

export default AddPlayer