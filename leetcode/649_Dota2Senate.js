/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let radiant = [];
  let dire = [];
  const len = senate.length;

  for (let i = 0; i < len; i++) {
    if (senate[i] === "R") {
      radiant.push(i + len);
    } else {
      dire.push(i + len);
    }
  }

  while (radiant.length > 0 && dire.length > 0) {
    if (radiant[0] < dire[0]) {
      radiant.push(radiant[0] + len);
    } else {
      dire.push(dire[0] + len);
    }
    radiant.shift();
    dire.shift();
  }
  return radiant.length > 0 ? "Radiant" : "Dire";
};
