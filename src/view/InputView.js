import { Console } from "@woowacourse/mission-utils";
import { parseNumber, splitByComma } from "../utils/Parser.js";

class InputView {
  async inputCars() {
    const input = await Console.readFileAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    return splitByComma(input);
  }

  async inputTry() {
    const input = await Console.readFileAsync("시도할 횟수는 몇 회인가요?");

    return parseNumber(input);
  }
}

export default InputView;
