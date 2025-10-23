import IOFactory from "../factory/IOFactory.js";
import RacingGame from "../model/RacingGame.js";
import RacingService from "../service/RacingService.js";

class RacingController {
  constructor() {
    this.inputView = IOFactory.createInputView();
    this.outputView = IOFactory.createOutputView();
  }

  async play() {
    try {
      const names = await this.inputView.inputCars();
      const tryCount = await this.inputView.inputTry();

      const game = new RacingGame(names, tryCount);
      const service = new RacingService(game, this.outputView);

      service.start(tryCount);
    } catch (error) {
      this.outputView.printError(error.message);
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default RacingController;
