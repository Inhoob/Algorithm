function solution(n, student, point) {
  var answer = 0;
  let students = {};
  let count = [];
  let k = 0;
  let superior = 0;
  for (let i = 1; i <= n / 2; i++) {
    k += i;
  }
  count.push(k);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    students[i] = 0;
  }
  for (let i = 0; i < student.length; i++) {
    arr = [];
    students[student[i]] += point[i];

    for (let number in students) {
      // arr.push(number);
      arr.push([number, students[number]]);
    }
    arr.sort(function (a, b) {
      return b[1] - a[1];
    });
    // console.log(arr, answer);
    // console.log(Number(arr[0][0]) + Number(arr[1][0]) + Number(arr[2][0]));

    // if (Number(arr[0][0]) + Number(arr[1][0]) + Number(arr[2][0]) !== count.slice(-1)[0]) {
    //   answer++;
    //   count.push(Number(arr[0][0]) + Number(arr[1][0]) + Number(arr[2][0]));
    // }
    // console.log("arr", arr);
    for (let i = 0; i < n / 2; i++) {
      superior += Number(arr[i][0]);
      // console.log(arr[i][0]);
      // console.log("superior", superior);
    }

    if (superior !== count.slice(-1)[0]) {
      // console.log("count", count.slice(-1)[0]);
      // console.log("superior", superior);
      answer++;
      count.push(superior);
      superior = 0;
    } else {
      superior = 0;
    }
    // console.log(count);
  }
  return answer;
}

console.log(solution(10, [3, 2, 10, 2, 8, 3, 9, 6, 1, 2], [3, 2, 2, 5, 4, 1, 2, 1, 3, 3]));
