function solution(players, callings) {
  // players에서 callings[i]의 값의 index 구하고
  // 해당 index와 index-1 의 요소의 자리를 바꾸고
  // callings.length 만큼 반복하고 answer 출력
  //   let answer = players
  //   for(let i=0;i<callings.length;i++){
  //     let idx = players.findIndex((el)=>el===callings[i])
  //      const tmp = answer[idx-1];
  //     answer[idx-1] = answer[idx];
  // answer[idx] = tmp;
  //   }
  //   return answer;
  const obj = {};
  players.forEach((el, idx) => {
    obj[el] = idx;
  });
  callings.forEach((el, idx) => {
    let num = obj[el];
    let temp = players[num - 1];
    players[num - 1] = el;
    players[num] = temp;
    obj[el]--;
    obj[players[num]]++;
  });
  return Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0]);
}
