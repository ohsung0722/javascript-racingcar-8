export function validateNotEmpty(
  value,
  errorMessage = "값이 비어있을 수 없습니다."
) {
  if (!value || value.length === 0) {
    throw new Error(errorMessage);
  }
}

export function validateMaxLength(value, maxLength = 5, fieldName) {
  if (value.length > maxLength) {
    throw new Error(`${fieldName}은(는) ${maxLength}자 이하만 가능합니다.`);
  }
}

export function validateNoDuplicates(
  list,
  errorMessage = "중복된 값이 존재합니다."
) {
  const uniqueCount = new Set(list).size;

  if (uniqueCount !== list.length) {
    throw new Error(errorMessage);
  }
}

export function validatePositiveNumber(
  value,
  errorMessage = "1 이상의 숫자만 입력할 수 있습니다."
) {
  if (isNaN(value) || value <= 0) {
    throw new Error(errorMessage);
  }
}

export function validateInteger(
  value,
  errorMessage = "정수만 입력할 수 있습니다."
) {
  if (!Number.isInteger(value)) {
    throw new Error(errorMessage);
  }
}
