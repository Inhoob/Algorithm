function solution(nums) {
  let num = new Set(nums);

  return num.size >= nums.length / 2 ? nums.length / 2 : num.size;
}
