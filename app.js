let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let turnO = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === false) {
            box.innerText = "X";
            turnO = true;
        } else {
            box.innerText = "O"
            turnO = false;
        }
        box.disabled = true;

        checkWinner();
    });
})

function enableAllSlots() {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

function disableAllSlots() {
  for (let box of boxes) {
    box.disabled = true;
  }
}

function resetGame() {
  enableAllSlots();
  turnO = false;

}

function showWinner(winner) {
  alert(`The winner is ${winner}!`);
  disableAllSlots();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

reset.addEventListener("click", resetGame);