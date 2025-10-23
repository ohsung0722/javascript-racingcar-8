class RacingService {
  constructor(racingGame, outputView) {
    this.racingGame = racingGame;
    this.outputView = outputView;
  }

  async start(rounds) {
    this.outputView.printResultTitle();

    for (let i = 0; i < rounds; i++) {
      this.racingGame.moveAll();
      this.outputView.printRound(this.racingGame.getCars());
      await delay(800); //0.8초 간격
    }

    this.outputView.printWinners(this.racingGame.getWinners());
  }
}
