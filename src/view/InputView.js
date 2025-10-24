import { Console } from "@woowacourse/mission-utils";
import { parseNumber, splitByComma } from "../utils/Parser.js";
import { validateNotEmpty } from "../utils/Validator.js";
import { INPUT_MESSAGE, VALIDATION_MESSAGE } from "../constants/message.js";

class InputView {
  async inputCars() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.NAME);

    validateNotEmpty(input, VALIDATION_MESSAGE.CAR_NAME.EMPTY);

    return splitByComma(input);
  }

  async inputTry() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.COUNT);

    validateNotEmpty(input, VALIDATION_MESSAGE.TRY_COUNT.EMPTY);

    return parseNumber(input);
  }
}

export default InputView;
