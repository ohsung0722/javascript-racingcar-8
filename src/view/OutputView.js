import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printError(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
  }

  printResultTitle() {
    Console.print("실행 결과");
  }

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
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
