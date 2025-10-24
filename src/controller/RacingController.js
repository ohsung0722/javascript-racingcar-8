import { ERROR_PREFIX } from "../constants/message.js";
import IOFactory from "../factory/IOFactory.js";
import RacingGame from "../model/RacingGame.js";
import RacingService from "../service/RacingService.js";
import RacingValidationService from "../service/RacingValidationService.js";

class RacingController {
  constructor() {
    this.inputView = IOFactory.createInputView();
    this.outputView = IOFactory.createOutputView();
    this.racingValidationService = new RacingValidationService();
  }

  async play() {
    try {
      const names = await this.inputView.inputCars();
      this.racingValidationService.validateCarNames(names);

      const tryCount = await this.inputView.inputTry();
      this.racingValidationService.validateTryCount(tryCount);

      const game = new RacingGame(names, tryCount);
      const service = new RacingService(game, this.outputView);

      service.start(tryCount);
    } catch (error) {
      this.outputView.printError(error.message);
      throw new Error(`${ERROR_PREFIX} ${error.message}`);
    }
  }
}

export default RacingController;
