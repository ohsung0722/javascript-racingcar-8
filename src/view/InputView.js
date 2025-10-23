import { Console } from "@woowacourse/mission-utils";
import { parseNumber, splitByComma } from "../utils/Parser.js";
import { validateNotEmpty } from "../utils/Validator.js";

class InputView {
  async inputCars() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    validateNotEmpty(input, "자동차 이름을 1개 이상 입력해야 합니다.");

    return splitByComma(input);
  }

  async inputTry() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    validateNotEmpty(input, "시도 횟수를 입력해야 합니다.");

    return parseNumber(input);
  }
}

export default InputView;
