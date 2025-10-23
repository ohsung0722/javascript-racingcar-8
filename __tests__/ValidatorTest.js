import {
  validateNotEmpty,
  validateMaxLength,
  validateNoDuplicates,
  validatePositiveNumber,
  validateInteger,
} from "/src/utils/validator.js";

describe("Validator Utility Functions", () => {
  describe("validateNotEmpty", () => {
    test("값이 비어 있으면 에러를 던진다", () => {
      expect(() => validateNotEmpty([], "비어 있음")).toThrow("비어 있음");
      expect(() => validateNotEmpty("", "비어 있음")).toThrow("비어 있음");
      expect(() => validateNotEmpty(null, "비어 있음")).toThrow("비어 있음");
      expect(() => validateNotEmpty(undefined, "비어 있음")).toThrow(
        "비어 있음"
      );
    });

    test("값이 존재하면 통과한다", () => {
      expect(() => validateNotEmpty([1])).not.toThrow();
      expect(() => validateNotEmpty("abc")).not.toThrow();
    });
  });

  describe("validateMaxLength", () => {
    test("길이가 최대 길이를 초과하면 에러를 던진다", () => {
      expect(() => validateMaxLength("abcdef", 5, "이름")).toThrow(
        "이름은(는) 5자 이하만 가능합니다."
      );
    });

    test("길이가 최대 길이 이하이면 통과한다", () => {
      expect(() => validateMaxLength("abcd", 5, "이름")).not.toThrow();
    });
  });

  describe("validateNoDuplicates", () => {
    test("중복된 값이 있으면 에러를 던진다", () => {
      expect(() => validateNoDuplicates(["a", "a", "b"], "중복")).toThrow(
        "중복"
      );
    });

    test("중복이 없으면 통과한다", () => {
      expect(() => validateNoDuplicates(["a", "b", "c"])).not.toThrow();
    });
  });

  describe("validatePositiveNumber", () => {
    test("0 이하의 숫자는 에러를 던진다", () => {
      expect(() => validatePositiveNumber(0, "양수만 가능")).toThrow(
        "양수만 가능"
      );
      expect(() => validatePositiveNumber(-5)).toThrow(
        "1 이상의 숫자만 입력할 수 있습니다."
      );
    });

    test("숫자가 아니면 에러를 던진다", () => {
      expect(() => validatePositiveNumber("abc")).toThrow();
      expect(() => validatePositiveNumber(NaN)).toThrow();
    });

    test("1 이상의 숫자는 통과한다", () => {
      expect(() => validatePositiveNumber(1)).not.toThrow();
      expect(() => validatePositiveNumber(10)).not.toThrow();
    });
  });

  describe("validateInteger", () => {
    test("정수가 아니면 에러를 던진다", () => {
      expect(() => validateInteger(3.14)).toThrow("정수만 입력할 수 있습니다.");
      expect(() => validateInteger("5")).toThrow();
      expect(() => validateInteger(NaN)).toThrow();
    });

    test("정수이면 통과한다", () => {
      expect(() => validateInteger(1)).not.toThrow();
      expect(() => validateInteger(0)).not.toThrow();
      expect(() => validateInteger(-5)).not.toThrow();
    });
  });
});
