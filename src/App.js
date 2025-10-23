import RacingController from "./controller/RacingController.js";

class App {
  constructor() {
    this.racingController = new RacingController();
  }
  async run() {
    await this.racingController.play();
  }
}

export default App;
