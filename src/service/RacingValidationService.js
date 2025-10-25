import { CAR_NAME, VALIDATION_MESSAGE } from "../constants/message.js";
import {
  validateInteger,
  validateMaxLength,
  validateNoDuplicates,
  validateNotEmpty,
  validatePositiveNumber,
} from "../utils/Validator.js";

class RacingValidationService {
  validateCarNames(names) {
    names.forEach((name) => {
      validateNotEmpty(name, VALIDATION_MESSAGE.CAR_NAME.ONLY_COMMA);
      validateMaxLength(name, 5, CAR_NAME);
    });

    validateNoDuplicates(names, VALIDATION_MESSAGE.CAR_NAME.DUPLICATE);
  }

  validateTryCount(count) {
    validatePositiveNumber(count, VALIDATION_MESSAGE.TRY_COUNT.NOT_POSITIVE);
    validateInteger(count, VALIDATION_MESSAGE.TRY_COUNT.NOT_INTEGER);
  }
}

export default RacingValidationService;
