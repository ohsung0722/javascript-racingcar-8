import { Random } from "@woowacourse/mission-utils";

export function isMovable() {
  const num = Random.pickNumberInRange(0, 9);
  return num >= 4;
}
