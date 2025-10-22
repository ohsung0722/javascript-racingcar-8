import { Console } from "@woowacourse/mission-utils";
import IOFactory from "../src/factory/IOFactory.js";

describe("OutputView", () => {
  let outputView;

  beforeEach(() => {
    outputView = IOFactory.createOutputView();

    Console.print = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  //printError 테스트
  test("printError()는 [ERROR] 접두사가 붙어야 합니다.", () => {
    outputView.printError("잘못된 입력입니다.");

    expect(Console.print).toHaveBeenCalledWith("[ERROR] 잘못된 입력입니다.");
  });

  //printWinner테스트 (단일 우승자)
  test("우승자가 1명일 경우 정확히 우승자 이름을 출력한다.", () => {
    const winners = ["A"];
    outputView.printWinner(winners);

    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : A");
  });

  //printWinner테스트 (멀티 우승자)
  test("우승자가 여러 명일 경우 쉼표로 구분해 출력한다.", () => {
    const winners = ["A", "B", "C"];
    outputView.printWinner(winners);

    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : A, B, C");
  });

  //printRound테스트
  test("각 자동차의 이름과 위치를 '-'로 출력한다", () => {
    const cars = [
      { name: "A", position: 3 },
      { name: "B", position: 1 },
    ];

    outputView.printRound(cars);

    expect(Console.print).toHaveBeenCalledWith("A : ---");
    expect(Console.print).toHaveBeenCalledWith("B : -");
  });
});
