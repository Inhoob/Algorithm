#1번풀이: 진짜 단순하게 생각해서 오름차순 정렬후 0,2,4,6 인덱스를 더하면 최소값들의 합이 최대가 된다.
# class Solution:
#     def arrayPairSum(self, nums: List[int]) -> int:
#         nums.sort()
#         sum = 0
#         for i in range(len(nums)):
#             if i==0 or i%2==0:
#                 sum += nums[i]
            
#         return sum

#2번풀이 : 위의 수를 그대로 pythonic한 방식으로 표현
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        return sum(sorted(nums)[::2])