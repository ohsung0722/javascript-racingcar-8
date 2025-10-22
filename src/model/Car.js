import { isMovable } from "../utils/RandomUtil.js";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (isMovable()) {
      this.position += 1;
    }
  }
}

export default Car;
