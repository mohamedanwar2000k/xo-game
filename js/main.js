let title = document.querySelector(".title");
let squares = document.querySelectorAll(".square");
let squareContent = [];
let turn = "x";

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    game(square);
    winner(e);
  })
});

function game(square) {
  if (turn == "x" && square.textContent == "") {
    square.textContent = "X";
    turn = "o";
    title.textContent = "O";
  } else if (turn == "o" && square.textContent == "") {
    square.textContent = "O";
    turn = "x";
    title.textContent = "X";
  }
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squareContent[i] = squares[i - 1].textContent;
  }

  if (squareContent[1] == squareContent[2] && squareContent[2] == squareContent[3] && squareContent[1] != "") {
    end(1, 2, 3);
  } else if (squareContent[4] == squareContent[5] && squareContent[5] == squareContent[6] && squareContent[4] != "") {
    end(4, 5, 6);
  } else if (squareContent[7] == squareContent[8] && squareContent[8] == squareContent[9] && squareContent[7] != "") {
    end(7, 8, 9);
  } else if (squareContent[1] == squareContent[4] && squareContent[4] == squareContent[7] && squareContent[1] != "") {
    end(1, 4, 7);
  } else if (squareContent[2] == squareContent[5] && squareContent[5] == squareContent[8] && squareContent[2] != "") {
    end(2, 5, 8);
  } else if (squareContent[3] == squareContent[6] && squareContent[6] == squareContent[9] && squareContent[3] != "") {
    end(3, 6, 9);
  } else if (squareContent[1] == squareContent[5] && squareContent[5] == squareContent[9] && squareContent[1] != "") {
    end(1, 5, 9);
  } else if (squareContent[3] == squareContent[5] && squareContent[5] == squareContent[7] && squareContent[3] != "") {
    end(3, 5, 7);
  }
}

function end(num1, num2, num3) {
  title.textContent = `${squareContent[num1]} WINNER`;
  squares[num1 - 1].style.cssText = "background: rgb(2, 167, 109); color: #FFF;";
  squares[num2 - 1].style.cssText = "background: rgb(2, 167, 109); color: #FFF;";
  squares[num3 - 1].style.cssText = "background: rgb(2, 167, 109); color: #FFF;";

  setInterval(() => {
    title.textContent += ".";
  }, 1000);

  setTimeout(() => {
    location.reload();
  }, 4000);
}