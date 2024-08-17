import { Modal } from "./modal.js";

function notANumber(value) {
  return isNaN(value) || value === "";
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function displayResultMessage(result) {
  Modal.message.innerHTML = `Seu IMC é ${result}`;
  Modal.open();
}

export { notANumber, IMC, displayResultMessage };
