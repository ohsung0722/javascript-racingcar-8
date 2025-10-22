import Car from "./Car";

class RacingGame {
  #Car;

  constructor(names, count) {
    this.#Car = new Car();
    this.cars = names.map((name) => this.#Car(name));
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
