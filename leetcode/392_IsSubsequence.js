var isSubsequence = function (s, t) {
  let arr1 = t.split("");
  let arr2 = s.split("");
  arr1.forEach((el) => {
    console.log(el, arr2);
    if (el === arr2[0]) {
      arr2.shift();
    }
  });

  return arr2.length === 0;
};

//using Two Pointer
var isSubsequence = function (s, t) {
  if (!s) return true;
  let cursorS = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[cursorS]) cursorS++;

    if (cursorS === s.length) return true;
  }

  return false;
};
