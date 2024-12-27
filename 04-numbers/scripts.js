const toggleRepeat = document.getElementById("toggleRepeat");
const drawButton = document.getElementById("drawButton");
const drawAgainButton = document.getElementById("drawAgainButton");
const results = document.getElementById("results");
const drawnNumbers = document.getElementById("drawnNumbers");

let noRepeat = false;

toggleRepeat.addEventListener("click", () => {
  noRepeat = !noRepeat;
  toggleRepeat.classList.toggle("active");
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawNumbers() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  if (max < min) {
    alert("O valor máximo deve ser maior que o valor mínimo");
    return;
  }

  if (noRepeat && max - min + 1 < quantity) {
    alert("Não há números suficientes no intervalo para evitar repetição");
    return;
  }

  let numbers = [];
  let attempts = 0;
  const maxAttempts = 1000;

  while (numbers.length < quantity && attempts < maxAttempts) {
    const number = getRandomNumber(min, max);
    if (!noRepeat || !numbers.includes(number)) {
      numbers.push(number);
    }
    attempts++;
  }

  drawnNumbers.innerHTML = numbers
    .map((num) => `<span>${num}</span>`)
    .join(" ");

  results.classList.add("show");
}

drawButton.addEventListener("click", drawNumbers);
drawAgainButton.addEventListener("click", drawNumbers);
