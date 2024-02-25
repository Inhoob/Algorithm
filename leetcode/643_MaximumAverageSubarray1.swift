var nums = [1, 12, -5, -6, 50, 3]
var k = 4

class Solution {
    func findMaxAverage(_ nums: [Int], _ k: Int) -> Double {
      var sum = 0;
      for i in 0..<k {
        
        sum += nums[i]
      }
      var maxSum = sum
      for i in k..<nums.count{
        sum += (nums[i] - nums[i - k])
        maxSum = max(maxSum, sum)
      }

      return Double(maxSum) / Double(k)
    }
}

let solution = Solution()
let result = solution.findMaxAverage(nums, k)
print("결과: \(result)")