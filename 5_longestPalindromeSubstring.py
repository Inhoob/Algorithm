def longestPalindrome(self, s: str) -> str:
        def expand(s, left, right):
            while left>=0 and right<len(s) and s[left]==s[right]:
                left -=1
                right +=1
            return s[left+1:right]
        
        result = ''
        for i in range(0,len(s)-1):
            result = max(expand(s,i,i+1),expand(s,i,i+2),result,key=len)
            
        if len(s)<2 or s==s[::-1]:
            return s
            
        return result