import { createContext, PropsWithChildren, useState } from "react";
import { Game } from "../models/Game";

export const GameContext = createContext({
  setGame: (game: Game) => {},
  game: new Game()
});

export const GameContextProvider = ({ children }: PropsWithChildren) => {
  const [game, setGame] = useState(new Game());

  return (
    <GameContext.Provider value={{game, setGame}}>
      {children}
    </GameContext.Provider>
  )
}