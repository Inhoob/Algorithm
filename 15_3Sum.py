#1번 풀이 : Brute Force를 이용한 풀이. time exceeded로 실패했다.
# class Solution:
#     def threeSum(self, nums: List[int]) -> List[List[int]]:
#         result = []
#         nums.sort()
#         for i in range(len(nums)-2):
#             if i>0 and nums[i]==nums[i-1]:
#                 continue;
#             for j in range(i+1,len(nums)-1):
#                 if j>i+1 and nums[j]==nums[j-1]:
#                     continue
#                 for k in range(j+1,len(nums)):
#                     if k>j+1 and nums[k]==nums[k-1]:
#                         continue
#                     if nums[i]+nums[j]+nums[k]==0:
#                         result.append([nums[i],nums[j],nums[k]])
                        
#         return result
                

#2번풀이 : Two Pointer를 이용한 풀이.
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()
        for i in range(len(nums)-2):
            if i>0 and nums[i] == nums[i-1]: #중복되는 항목 삭제
                continue
            left, right = i+1, len(nums)-1
            while left < right:#left와 right가 같아지면 종료
                sum = nums[i]+nums[left]+nums[right]
                if sum<0: #sum이 0보다 낮으면 left를 오른쪽, sum이 0보다 크면 right를 왼쪽으로. nums가 오름차순 정렬되어 있기 때문에 가능
                    left +=1
                elif sum>0:
                    right -=1
                else:#0일 경우 완료
                    result.append([nums[i],nums[left],nums[right]])
                    while left<right and nums[left]==nums[left+1]: #result를 추가한 후 left,right양 옆으로 동일한 값이 있을 수 있으므로 확인하고 스킵하는 과정
                        left+=1
                    while left<right and nums[right]==nums[right-1]:
                        right-=1
                    left +=1 #left와 right 이동. 여기서 left와 right를 동시에 움직여도 되는 이유는 이미 합이 0인상황이기때문에 하나만 움직인 값은 절대로 0이 나올 수 없다.
                    right -=1
                    
        return result
                