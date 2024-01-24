/**
 * @param {string} s
 * @return {string}
 */
//Two Pointer 사용하면 됨.
var reverseVowels = function (s) {
  const isVowel = (char) =>
    ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(char);
  let sliced = s.split("");
  let start = 0;
  let end = sliced.length - 1;

  while (start < end) {
    if (!isVowel(sliced[start])) {
      console.log(start);
      start++;
      continue;
    }

    if (!isVowel(sliced[end])) {
      console.log(end);
      end--;
      continue;
    }

    [sliced[start], sliced[end]] = [sliced[end], sliced[start]];
    start++;
    end--;
  }

  return sliced.join("");
};
