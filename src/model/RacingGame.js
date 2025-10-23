import Car from "./Car.js";

class RacingGame {
  constructor(names, count) {
    this.cars = names.map((name) => new Car(name));
    this.count = count;
  }

  moveAll() {
    this.cars.forEach((car) => car.move());
  }

  getCars() {
    return this.cars;
  }

  getWinners() {
    const positions = this.cars.map((car) => car.position);
    const maxPosition = Math.max(...positions);

    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    return winners;
  }
}

export default RacingGame;
