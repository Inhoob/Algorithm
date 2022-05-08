def twoSum(nums,target):
#1번풀이 = Brute-Force  O(n^2)
    # for i in range(0,len(nums)):
    #     for j in range(i+1,len(nums)):
    #         if nums[i]+nums[j]==target:
    #             return [i,j]

# #2번풀이 = in을 이용한 탐색 O(n^2) in연산쪽이 같은 시간복잡도라도 1번풀이보다 훨씬 가볍고 빠르다
#     for i, n in enumerate(nums): #enumerate는 원소와 인덱스로 이루어진 튜플을 제공한다.
#         complement = target - n #target이 9고 [2,7,11,15]인 경우 7 = target -2 이런식으로

#         if complement in nums[i+1:]:
#             return [nums.index(n), nums[i+1:].index(complement)+(i+1)]

#3번 풀이 : 첫 번째 수를 뺀 결과 키 조회
    nums_map = {}
    for i,num in enumerate(nums):
        nums_map[num] = i   #key와 value를 서로 반대로 저장한 것

    for i, num in enumerate(nums):
        if target - num in nums_map and i !=nums_map[target-num]:
            return [i, nums_map[target-num]] #target에서 첫 번째 수를 빼면 두 번째 수를 바로 알 수 있다.
    
#4번 풀이 : two 포인터 이용해 보려 했지만 불가능한 이유: nums를 한번 정렬해줘야하는데 이 경우 index가 섞이게 된다.그렇기 때문에 불가능

    # left, right = 0, len(nums)-1
    # while left!=right:
    #     if nums[left]+nums[right]<target:
    #         left +=1
    #     elif nums[left]+nums[right]>target:
    #         right -=1
    #     else:
    #         return [left,right]
   