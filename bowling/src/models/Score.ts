import { Frame } from "./Frame";
import { Player } from "./Player"

export class Score {
  frames: Frame[];
  player: Player

  constructor(player: Player) {
    this.frames = [
      new Frame(1,5,5),
      new Frame(2,0,1),
      new Frame(3,10),
      new Frame(4,7,3),
      new Frame(5,0,0),
      new Frame(6,5),
      new Frame(7,10),
      new Frame(8,5),
      new Frame(9,8,1),
      new Frame(10,10,10,10)
    ];
    this.player = player;
  }
}