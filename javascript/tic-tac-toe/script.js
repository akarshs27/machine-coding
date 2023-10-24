const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector(".restart-btn");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let isRunning = true;
let currentPlayer = "X";
let options = new Array(9).fill("");

initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] !== "" || !isRunning) {
    return;
  }
  updateCell(this, cellIndex);
}

function updateCell(cell, cellIndex) {
  options[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
  checkWinner();
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function restartGame() {
  currentPlayer = "X";
  options = new Array(9).fill("");
  cells.forEach((cell) => (cell.textContent = ""));
  statusText.textContent = `${currentPlayer}'s turn`;
  isRunning = true;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    let condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }

    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins`;
    isRunning = false;
  } else if (!options.includes("")) {
    statusText.textContent = "Draw!";
    isRunning = false;
  } else {
    changePlayer();
  }
}
