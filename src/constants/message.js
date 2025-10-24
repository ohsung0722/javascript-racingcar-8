export const INPUT_MESSAGE = {
  NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  COUNT: "시도할 횟수는 몇 회인가요?\n",
};

export const OUTPUT_MESSAGE = {
  RESULT_TITLE: "\n실행 결과",
  WINNER_TITLE: "최종 우승자 : ",
};

export const VALIDATION_MESSAGE = {
  DEFAULT: {
    EMPTY: "값이 비어있을 수 없습니다.",
    DUPLICATE: "중복된 값이 존재합니다.",
    POSITIVE_NUMBER: "1 이상의 숫자만 입력할 수 있습니다.",
    INTEGER: "정수만 입력할 수 있습니다.",
    MAX_LENGTH: (fieldName, maxLength) =>
      `${fieldName}은(는) ${maxLength}자 이하만 가능합니다.`,
  },

  CAR_NAME: {
    EMPTY: "자동차 이름을 1개 이상 입력해야 합니다.",
    DUPLICATE: "자동차 이름이 중복되었습니다.",
    ONLY_COMMA: "자동차 이름은 비어있을 수 없습니다.",
  },
  TRY_COUNT: {
    EMPTY: "시도 횟수를 입력해야 합니다.",
    NOT_POSITIVE: "시도 횟수는 1 이상의 숫자여야 합니다.",
    NOT_INTEGER: "시도 횟수는 정수여야 합니다.",
  },
};

export const ERROR_PREFIX = "[ERROR]";
export const CAR_NAME = "자동차 이름";
