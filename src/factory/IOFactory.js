import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class IOFactory {
  static createOutputView() {
    return new OutputView();
  }

  static createInputView() {
    return new InputView();
  }
}

export default IOFactory;
