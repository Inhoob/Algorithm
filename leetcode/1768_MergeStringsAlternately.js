/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let answer = "";
  let aLot = Math.max(word1.length, word2.length);

  let splitted1 = word1.split("");
  let splitted2 = word2.split("");
  for (let i = 0; i < aLot; i++) {
    if (splitted1[i]) {
      answer += splitted1[i];
    }
    if (splitted2[i]) {
      answer += splitted2[i];
    }
  }

  return answer;
};
