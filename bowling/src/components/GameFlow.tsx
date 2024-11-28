import React, { useContext, useRef } from 'react'
import { GameContext } from '../store/GameContext';

function GameFlow() {
  const scoreRef = useRef<HTMLInputElement>(null);
  const {game, setGame} = useContext(GameContext);
  let frameIndex: number;
  const score = game.scores.find(score => {
    return score.frames.find((frame, i) => {
      frameIndex = i;
      return frame.score1 === undefined;
    })});

  function insertScore() {
    // if (score !== undefined && ) 
    // score?.frames[frameIndex].score1 = scoreRef.current.value;
  }

  return (
    <div>
      {score?.player.name ? 
        <div>
          <div>It's {score?.player.name}'s turn, please insert score for round {5}:</div>
          <input ref={scoreRef} type="text" /> <br />
          <button onClick={insertScore}>Insert</button> 
        </div>
        : <div>No turns left!</div>  
      }
      <br /><br />
    </div>
  )
}

export default GameFlow