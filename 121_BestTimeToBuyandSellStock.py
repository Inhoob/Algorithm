class Solution:
    def maxProfit(self, prices: List[int]) -> int:
#         profit = 0
#         for i,price in enumerate(prices):
#             for j in range(i,len(prices)):
                
#                 profit = max(prices[j]-price,profit)
                
#         return profit// bruteforce solution (runtime = 41ms)

        profit = 0
        min_price=100000
        
        for price in prices:
            min_price = min(min_price,price)
            profit = max(profit, price-min_price)
            
        return profit
        