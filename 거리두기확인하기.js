function solution(places) {
  var answer = [];

  for (let place of places) {
    answer.push(check(place));
  }
  return answer;
}
function check(arr) {
  let dx = [0, 0, 1, -1]; //남북동서
  let dy = [-1, 1, 0, 0];
  let arr1 = arr.map((e) => e.split("")); //[["POOOP"],["OXXOX"],...]
  let size = 5;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr1[i][j] === "P") {
        for (let k = 0; k < 4; k++) {
          if (
            i + dx[k] >= 0 &&
            j + dy[k] >= 0 &&
            i + dx[k] < size &&
            j + dy[k] < size &&
            arr1[i + dx[k]][j + dy[k]] === "P"
          ) {
            return 0;
          }
        }
      }

      if (arr1[i][j] === "O") {
        let count = 0;
        for (let k = 0; k < 4; k++) {
          if (
            i + dx[k] >= 0 &&
            j + dy[k] >= 0 &&
            i + dx[k] < size &&
            j + dy[k] < size &&
            arr1[i + dx[k]][j + dy[k]] === "P"
          ) {
            count++;
            if (count > 1) {
              return 0;
            }
          }
        }
      }
    }
  }
  return 1;
}

places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];
console.log(solution(places));
//P=응시자가 앉아있는자리
//O=빈테이블
//X=파티션

//이 문제는 BFS 풀이 방법이 있다고한다. 나중에 확인해볼 것
