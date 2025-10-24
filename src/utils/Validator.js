import { VALIDATION_MESSAGE } from "../constants/message.js";

export function validateNotEmpty(
  value,
  errorMessage = VALIDATION_MESSAGE.DEFAULT.EMPTY
) {
  if (!value || value.length === 0) {
    throw new Error(errorMessage);
  }
}

export function validateMaxLength(value, maxLength = 5, fieldName) {
  if (value.length > maxLength) {
    throw new Error(
      VALIDATION_MESSAGE.DEFAULT.MAX_LENGTH(fieldName, maxLength)
    );
  }
}

export function validateNoDuplicates(
  list,
  errorMessage = VALIDATION_MESSAGE.DEFAULT.DUPLICATE
) {
  const uniqueCount = new Set(list).size;

  if (uniqueCount !== list.length) {
    throw new Error(errorMessage);
  }
}

export function validatePositiveNumber(
  value,
  errorMessage = VALIDATION_MESSAGE.DEFAULT.POSITIVE_NUMBER
) {
  if (isNaN(value) || value <= 0) {
    throw new Error(errorMessage);
  }
}

export function validateInteger(
  value,
  errorMessage = VALIDATION_MESSAGE.DEFAULT.INTEGER
) {
  if (!Number.isInteger(value)) {
    throw new Error(errorMessage);
  }
}
