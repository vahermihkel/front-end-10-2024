import { Player } from "./Player";
import { Score } from "./Score";
import { StatusEnum } from "./StatusEnum";

export class Game {
  status: StatusEnum;
  scores: Score[]

  constructor() {
    this.status = StatusEnum.CREATED;
    this.scores = [
      new Score(new Player("Mihkel")),
      new Score(new Player("Toomas"))
    ];
  }
}