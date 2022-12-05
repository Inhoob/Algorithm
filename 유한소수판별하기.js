function solution(a, b) {
  let B = b / gcd(a, b);
  while (B % 2 === 0) {
    B = B / 2;
  }
  while (B % 5 === 0) {
    B = B / 5;
  }

  return B === 1 ? 1 : 2;
}

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
