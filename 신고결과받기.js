function solution(id_list, report, k) {
  let newReport = report.filter((el, idx) => {
    return report.indexOf(el) === idx;
  });

  let answer = Array.from({ length: id_list.length }, () => 0);
  let reported = newReport.map((el) => el.split(" ")[1]);

  let map = {};
  id_list.map((id) => {
    map[id] = 0;
  });

  for (let i = 0; i < reported.length; i++) {
    if (map[reported[i]] > 0) {
      map[reported[i]] += 1;
    } else {
      map[reported[i]] = 1;
    }
  }

  for (let key in map) {
    if (map[key] >= k) {
      //만약 report 각요소의 [1]요소가 key일 경우 그 [0]번째 요소에 해당하는 id_list의 idx값을 추출해 answer[idx]값에 1을 더한다.
      report.map((el) => {
        if (el.split(" ")[1] === key) {
          answer[id_list.indexOf(el.split(" ")[0])] += 1;
        }
      });
    }
  }
  return answer;
}

id_list = ["muzi", "frodo", "apeach", "neo"];
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
console.log(solution(id_list, report, 2));

//간단한 코드를 찾아볼 수 있으니 프로그래머스 참고
