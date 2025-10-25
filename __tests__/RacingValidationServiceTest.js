import RacingValidationService from "../src/service/RacingValidationService.js";

describe("RacingValidationService", () => {
  let validator;

  beforeEach(() => {
    validator = new RacingValidationService();
  });

  describe("validateCarNames()", () => {
    test("유효한 자동차 이름이 주어졌을 때 검증하면 예외가 발생하지 않는다.", () => {
      const names = ["pobi", "woni", "jun"];

      expect(() => validator.validateCarNames(names)).not.toThrow();
    });

    test("중복된 자동차 이름이 주어졌을 때 에러가 발생한다.", () => {
      const names = ["pobi", "woni", "pobi"];

      expect(() => validator.validateCarNames(names)).toThrow(
        "자동차 이름이 중복되었습니다."
      );
    });

    test("5자를 초과하는 이름이 주어졌을 때 에러가 발생한다.", () => {
      const names = ["longname", "woni"];

      expect(() => validator.validateCarNames(names)).toThrow(
        "자동차 이름은(는) 5자 이하만 가능합니다."
      );
    });

    test("아무 값도 입력되지 않고 쉼표만 입력되었을 때 에러가 발생한다.", () => {
      const names = ["", ""];

      expect(() => validator.validateCarNames(names)).toThrow(
        "자동차 이름을 1개 이상 입력해야 합니다."
      );
    });
  });

  describe("validateTryCount()", () => {
    test("3이 입력되면 When 검증 시 예외가 발생하지 않는다.", () => {
      expect(() => validator.validateTryCount(3)).not.toThrow();
    });

    test("음수가 입력되면 에러가 발생한다.", () => {
      expect(() => validator.validateTryCount(-1)).toThrow(
        "시도 횟수는 1 이상의 숫자여야 합니다."
      );
    });

    test("소수가 입력되면 에러가 발생한다.", () => {
      expect(() => validator.validateTryCount(2.5)).toThrow(
        "시도 횟수는 정수여야 합니다."
      );
    });
  });
});
