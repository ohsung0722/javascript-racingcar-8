class RacingService {
  constructor(racingGame, outputView) {
    this.racingGame = racingGame;
    this.outputView = outputView;
  }

  start(rounds) {
    this.outputView.printResultTitle();

    for (let i = 0; i < rounds; i++) {
      this.racingGame.moveAll();
      this.outputView.printRound(this.racingGame.getCars());
    }

    this.outputView.printWinners(this.racingGame.getWinners());
  }
}

export default RacingService;
