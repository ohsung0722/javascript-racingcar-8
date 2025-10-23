export function splitByComma(input) {
  return input.split(",").map((element) => element.trim());
}

export function parseNumber(input) {
  return Number(input);
}
