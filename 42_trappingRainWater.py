#수도코드 : 양쪽 끝 지점을 잡고 가장 높은 지점에서 만나도록 한다.낮은 구간은 언제나 물이 채워지기 때문에 가장 높은 기둥까지 이동하면서 볼륨을 채움
class Solution: 
    def trap(self, height: List[int]) -> int: #첫 번째 풀이 : two pointer를 이용한 풀이
        if not height:
            return 0
        volume = 0
        left, right = 0, len(height) -1 #양쪽 끝을 포인터로 잡고 시작한다.
        left_max, right_max = height[left], height[right]

        while left < right: #양쪽끝의 포인터가 만날때까지 좁혀가면서 반복한다. 결국 가장높은 기둥은 volume에 영향을 미치지 않고 왼쪽과 오른쪽으로 나누는 역할만 한다.
            left_max, right_max =  max(height[left], left_max), max(height[right],right_max)
            if left_max <= right_max:  #오른쪽이 크다면 왼쪽을 당기고 왼쪽이 크다면 오른쪽을당김
                volume += left_max - height[left]
                left +=1
            else:
                volume += right_max - height[right]
                right -=1

        return volume



