/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maximumCandyCount = Math.max(...candies);

  return candies.map((el) => el + extraCandies >= maximumCandyCount);
};
