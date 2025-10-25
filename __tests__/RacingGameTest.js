import Car from "../src/model/Car.js";
import RacingGame from "../src/model/RacingGame.js";

//RacingGame의 순수 로직만 검증하기 위해 Car 모킹
jest.mock("../src/model/Car.js");

describe("RacingGame", () => {
  beforeEach(() => {
    Car.mockClear();
  });

  test("자동차 이름 배열이 주어졌을 때 RacingGame 생성하면 각 이름으로 Car 객체가 생성된다", () => {
    const names = ["pobi", "woni", "jun"];

    new RacingGame(names, 5);

    expect(Car).toHaveBeenCalledTimes(3);
    expect(Car.mock.calls.map((args) => args[0])).toEqual([
      "pobi",
      "woni",
      "jun",
    ]);
  });

  test("moveAll() 호출 시 각 Car.move()가 실행되면 모든 자동차가 이동 시도된다.", () => {
    const mockCar = { move: jest.fn() };
    Car.mockImplementation(() => mockCar); //new Car()를 호출하면 항상 동일한 mockCar객체를 반환하기 위해 설정

    const game = new RacingGame(["pobi", "woni"], 5);
    game.moveAll();

    expect(mockCar.move).toHaveBeenCalledTimes(2);
  });

  test("각 자동차 위치가 다를 때 getWinners()를 호출하면 최고 위치 자동차가 반환된다.", () => {
    const game = new RacingGame([], 3);
    game.cars = [
      { name: "pobi", position: 3 },
      { name: "woni", position: 5 },
      { name: "jun", position: 5 },
    ];

    const winners = game.getWinners();
    expect(winners).toEqual(["woni", "jun"]);
  });
});
