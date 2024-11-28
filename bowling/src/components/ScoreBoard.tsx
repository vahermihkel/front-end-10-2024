import React, { useContext } from 'react'
import { GameContext } from '../store/GameContext';

function ScoreBoard() {
  const {game} = useContext(GameContext);

  return (
    <div>
          <div>{game.status}</div>
          <div>{game.scores.map(score => 
            <div>
              <div>{score.player.name}</div>
              <table>
                <thead>
                  <tr>
                    {[1,2,3,4,5,6,7,8,9,10].map(header => 
                      <th>{header}</th>
                    )}
                  </tr>
                </thead>
                <tbody><tr>{score.frames.map(frame => 
                  <td>
                    {frame.score1} | 
                    {frame.score2 ? frame.score2 : "-"} 
                    {frame.additionalScore1 ? "|" + frame.additionalScore1 : "-"}
                  </td>
                )}
                </tr>
                </tbody>
              </table>
            </div>)}
          </div>
        </div>
  )
}

export default ScoreBoard