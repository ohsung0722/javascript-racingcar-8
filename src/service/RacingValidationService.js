import {
  validateInteger,
  validateMaxLength,
  validateNoDuplicates,
  validateNotEmpty,
  validatePositiveNumber,
} from "../utils/Validator.js";

class RacingValidationService {
  validateCarNames(names) {
    validateNoDuplicates(names, "자동차 이름은 중복될 수 없습니다.");

    names.forEach((name) => {
      validateNotEmpty(name, "자동차 이름은 비어있을 수 없습니다.");
      validateMaxLength(name, 5, "자동차 이름");
    });
  }

  validateTryCount(count) {
    validatePositiveNumber(count, "시도 횟수는 1 이상의 숫자여야 합니다.");
    validateInteger(count, "시도 횟수는 정수여야 합니다.");
  }
}

export default RacingValidationService;
