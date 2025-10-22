import { Console } from "@woowacourse/mission-utils";

class InputView {
  async inputCars() {
    const input = await Console.readFileAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    return input;
  }

  async inputTry() {
    const input = await Console.readFileAsync("시도할 횟수는 몇 회인가요?");

    return input;
  }
}

export default InputView;
