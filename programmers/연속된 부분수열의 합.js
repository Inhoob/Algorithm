const solution = (sequence, k) => {
  const answer = [0, 1000000];

  let start = 0;
  let end = 0;
  let sum = sequence[0];
  //Two Pointer 풀이
  //sequence[start] 와 sequecne[end]의 합이 k보다 작을경우 => end를 증가시켜본다.
  //만약 그 부분합이 k와 같다 => 해당 인덱스들을 return 해 준다.
  //만약 그 부분합이 k보다 크다 => start값을 증가시키고 다시 위의 구조를 반복
  while (end < sequence.length) {
    if (sum === k) {
      if (answer[1] - answer[0] > end - start) {
        answer[0] = start;
        answer[1] = end;
      }
      // 그 후 start와 end 값을 하나씩 올려주며 처리해준다.
      sum -= sequence[start++];
      sum += sequence[++end];
    } else if (sum > k) {
      sum -= sequence[start++];
    } else {
      sum += sequence[++end];
    }
  }
  return answer;
};
