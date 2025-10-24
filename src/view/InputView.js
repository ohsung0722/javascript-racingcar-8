import { Console } from "@woowacourse/mission-utils";
import { parseNumber, splitByComma } from "../utils/Parser.js";
import { validateNotEmpty } from "../utils/Validator.js";
import { INPUT_MESSAGE } from "../constants/message.js";

class InputView {
  async inputCars() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.NAME);

    validateNotEmpty(input, "자동차 이름을 1개 이상 입력해야 합니다.");

    return splitByComma(input);
  }

  async inputTry() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.COUNT);

    validateNotEmpty(input, "시도 횟수를 입력해야 합니다.");

    return parseNumber(input);
  }
}

export default InputView;
