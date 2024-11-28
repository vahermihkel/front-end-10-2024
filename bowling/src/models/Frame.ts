export class Frame {
  // frameNumber: number;
  // score1: number;
  // score2: number;
  // additionalScore1: number;
  // additionalScore2: number;

  constructor(
    public frameNumber: number, 
    public score1: number,
    public score2?: number,
    public additionalScore1?: number,
  ) {
  }
}