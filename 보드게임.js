function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  let curX = 0;
  let curY = 0;
  let count = 0;
  for (i = 0; i < operation.length; i++) {
    if (operation[i] === "U") {
      curY -= 1;
    }
    if (operation[i] === "D") {
      curY += 1;
    }
    if (operation[i] === "L") {
      curX -= 1;
    }
    if (operation[i] === "R") {
      curX += 1;
    }

    if (curX > board.length || curY > board.length || curX < 0 || curY < 0) {
      return "OUT";
    } else {
      count += board[curY][curX];
    }
  }

  return count;
}

const board2 = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0],
];
const output2 = boardGame(board2, "UUUDD");
console.log(output2); // 'OUT;
