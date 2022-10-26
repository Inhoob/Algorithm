function solution(board) {
  const bomb = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  const length = board[0].length;
  let bombSet = new Set();
  var answer = length * length;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        bomb.forEach((el) => {
          let [nextX, nextY] = el;
          [nextX, nextY] = [i + nextX, j + nextY];
          if (
            nextX >= 0 &&
            nextY >= 0 &&
            nextX < board.length &&
            nextY < board[i].length
          ) {
            bombSet.add(nextX + " " + nextY);
          }
        });
      }
    }
  }

  return answer - bombSet.size;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);

//헷갈렸던 부분 => Set인데 왜 중복요소가 안빠지는가? => 원시타입이 아니라서 그런 것 같다.. 분명 mdn에는 객체참조도 유일한 값을 저장한다고 나와있는데
//실제론 그렇게 동작하지 않았다.
