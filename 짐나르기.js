function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  // 박스 하나에는 최대 두개 까지 들어간다.
  //[80,70,50,50] 100
  let count = 0;
  let sortedStuff = stuff.sort((a, b) => b - a);
  let visited = new Array(sortedStuff.length).fill(false);
  for (let i = 0; i < sortedStuff.length; i++) {
    if (visited[i] === false) {
      let remain = limit - sortedStuff[i]; //remain=50
      for (let j = i + 1; j < sortedStuff.length; j++) {
        if (visited[j] === false) {
          if (sortedStuff[j] <= remain) {
            count += 1;
            visited[i] = true;
            visited[j] = true;
            console.log(`visited count = ${count}`);
            break;
          }
          if (
            j === sortedStuff.length - 1 &&
            sortedStuff[sortedStuff.length - 1] > remain
          ) {
            visited[i] = true;
            count += 1;
            console.log(` count = ${count}`);
          }
        }
      }
    }
  }
  return count;
}

let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3
