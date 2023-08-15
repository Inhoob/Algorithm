function solution(maps) {
  let yLength = maps.length;
  let xLength = maps[0].length;

  let dx = [0, 0, 1, -1]; // 북 남 동 서
  let dy = [1, -1, 0, 0];

  const bfs = (start, end, visited) => {
    let [x, y] = start;
    let queue = [];

    visited[x][y] = 1;
    queue.push([x, y]);
    while (queue.length) {
      let [cx, cy] = queue.shift();
      for (let dir = 0; dir < 4; dir++) {
        let nx = cx + dx[dir];
        let ny = cy + dy[dir];
        if (nx < 0 || nx >= yLength || ny < 0 || ny >= xLength) continue;
        if (maps[nx][ny] === "X" || visited[nx][ny] !== 0) continue;
        if (nx === end[0] && ny === end[1]) {
          console.log(cx, cy);
          return visited[cx][cy];
        }
        visited[nx][ny] = visited[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  };

  let s = [];
  let l = [];
  let e = [];
  for (let i = 0; i < xLength; i++) {
    for (let j = 0; j < yLength; j++) {
      if (maps[i][j] === "S") s = [i, j];
      if (maps[i][j] === "L") l = [i, j];
      if (maps[i][j] === "E") e = [i, j];
    }
  }

  let visited1 = new Array(yLength)
    .fill()
    .map((el) => new Array(xLength).fill(0));
  let visited2 = new Array(yLength)
    .fill()
    .map((el) => new Array(xLength).fill(0));

  let answer1 = bfs(s, l, visited1);
  let answer2 = bfs(l, e, visited2);
  console.log(answer1, answer2);

  return answer1 && answer2 ? answer1 + answer2 : -1;
}

solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]);
