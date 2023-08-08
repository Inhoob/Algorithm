function solution(board) {
  /*
    1. 큐에 R의 좌표를 넣고 visited list에 넣는다.
    2. 벽에 부딪히거나 장애물을 만날 때 까지 기존 값 skip
    3. 부딪히기 전 값 가져오기
    4. 해당 좌표가 G면 answer+1 이 답이고 방문하지 않았으면 큐에 좌표 삽입
    5. 
    */
  var answer = 0;
  const width = board[0].length;
  const height = board.length;
  let positionR;
  let splitedBoard = board.map((el) => el.split(""));
  splitedBoard.forEach((el, idx) => {
    for (let i = 0; i < el.length; i++) {
      if (el[i] === "R") {
        positionR = [i, idx]; //예제에서는 x,y가 6,0이 된다.
        break;
      }
    }
  });

  let queue = [positionR]; //[[6,0]]

  splitedBoard[positionR[1]][positionR[0]] = "V";
  let moveX = [1, -1, 0, 0];
  let moveY = [0, 0, 1, -1];

  while (queue.length !== 0) {
    for (let j = 0; j < queue.length; j++) {
      let [x, y] = queue.shift(); //x=6, y=0
      for (let i = 0; i < 4; i++) {
        let dx = x + moveX[i]; //움직인 후의 자리
        let dy = y + moveY[i];
        while (
          dx >= 0 &&
          dy >= 0 &&
          dx < width &&
          dy < height &&
          splitedBoard[dy][dx] !== "D"
        ) {
          dx += moveX[i];
          dy += moveY[i];
        }

        dx -= moveX[i];
        dy -= moveY[i];

        if (splitedBoard[dy][dx] === "G") {
          return answer + 1;
        } else if (splitedBoard[dy][dx] !== "V") {
          splitedBoard[dy][dx] = "V";
          queue.push([dx, dy]);
        }
      }
    }
    answer++;
  }

  return -1;
}

//해답
// 이 문제는 모르겠어서 답을 보면서 따라쳤는데도 틀려서 문제가 생김..
function solution(board) {
  var answer = 0;
  //가로길이
  var xLen = board[0].length;
  //세로길이
  var yLen = board.length;

  var startCor;
  board = board.map((element) => element.split(""));
  board.forEach((element, index) => {
    for (var i = 0; i < element.length; i++) {
      if (element[i] === "R") {
        // x,y 순서 [1,3]
        startCor = [i, index];
        break;
      }
    }
  });

  var queue = [startCor];
  board[startCor[1]][startCor[0]] = "C";

  var moveX = [1, -1, 0, 0];
  var moveY = [0, 0, 1, -1];

  while (queue.length !== 0) {
    const size = queue.length;

    for (var i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (var moveI = 0; moveI < 4; moveI++) {
        var dx = x + moveX[moveI];
        var dy = y + moveY[moveI];
        while (
          dx >= 0 &&
          dy >= 0 &&
          dx < xLen &&
          dy < yLen &&
          board[dy][dx] !== "D"
        ) {
          dx += moveX[moveI];
          dy += moveY[moveI];
        }

        dx -= moveX[moveI];
        dy -= moveY[moveI];

        if (board[dy][dx] === "G") {
          return answer + 1;
        } else if (board[dy][dx] !== "C") {
          board[dy][dx] = "C";
          queue.push([dx, dy]);
        }
      }
    }
    answer++;
  }
  return -1;
}
