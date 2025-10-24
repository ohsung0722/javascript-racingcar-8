import { Console } from "@woowacourse/mission-utils";
import { ERROR_PREFIX, OUTPUT_MESSAGE } from "../constants/message.js";

class OutputView {
  printError(errorMessage) {
    Console.print(`${ERROR_PREFIX} ${errorMessage}`);
  }

  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
  }

  printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.WINNER_TITLE}${winners.join(", ")}`);
  }

  printRound(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });

    this.#printLineBreak();
  }

  #printLineBreak() {
    Console.print("");
  }
}

export default OutputView;
