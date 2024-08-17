// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.getElementById("btnTry");
const btnReset = document.getElementById("btnReset");
let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);
let count = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

// Funções
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.getElementById("inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector("h2").innerText = `Acertou em ${count} vezes`;
  }

  inputNumber.value = "";
  count++;
}

function handleResetClick() {
  toggleScreen();
  count = 1;
  window.location.reload();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
