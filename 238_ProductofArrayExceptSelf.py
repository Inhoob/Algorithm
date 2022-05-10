class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        #nums = [a,b,c,d]
        #res = [b*c*d,a*c*d,a*b*d,a*b*c]
        
        res = []
        p = 1
        for i in range(0,len(nums)):
            res.append(p)
            p=p*nums[i] #res = [1,a,ab,abc]
        
        p=1
        for i in range(len(nums)-1,0-1,-1): #res에 곱해줘야하는 값=[bcd,cd,d,1]
            res[i]=res[i]*p
            p = p*nums[i]
            
        return res