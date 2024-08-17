import { AlertError } from "./alert-error.js";
import { notANumber, IMC, displayResultMessage } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = IMC(weight, height);

  const weightOrheightNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrheightNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();
  displayResultMessage(result);
};

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
