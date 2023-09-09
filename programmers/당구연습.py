def solution(m, n, startX, startY, balls):
    answer = []
    for endX, endY in balls:
        # 위쪽 벽에 맞는 경우를 생각해보자. 시작점 X축과 Y축을 비교해보자
        #                 X축이 같은 경우         X축이 다른 경우
        # 시작Y축이 작은 경우       가능                    가능
        # 시작Y축이 큰 경우        불가                    가능

        ## 아래쪽 벽에 맞는 경우를 생각이면 위와 X가 같은경우만 반대일것
        diff = float("inf")  # 양의 무한대
        if not (startX == endX and startY > endY):  # 위쪽 벽
            diff = min(diff, abs(startX - endX) ** 2 + (startY + endY) ** 2)
        if not (startX == endX and startY < endY):  # 아래쪽 벽
            diff = min(diff, abs(startX - endX) ** 2 + (2 * n - startY - endY) ** 2)
        if not (startY == endY and startX > endX):  # 왼쪽 벽
            diff = min(diff, abs(startY - endY) ** 2 + (startX + endX) ** 2)
        if not (startY == endY and startX < endX):  # 오른쪽 벽
            diff = min(diff, abs(startY - endY) ** 2 + (2 * m - startX - endX) ** 2)

        # 꼭지점에 맞는 경우를 생각해보자.
        # 이 경우 시작점의 x:y가 end의 x:y와 같다.
        if endX * startY == startX * endY and startX < endX:  # 왼쪽 위 꼭지점
            diff = min(diff, (startX + endX) ** 2 + (startY + endY) ** 2)
        if (m - endX) * startY == (m - startX) * endY and (m - startX) < (
            m - endX
        ):  # 오른쪽 위 꼭지점
            diff = min(diff, (2 * m - startX - endX) ** 2 + (startY + endY) ** 2)
        if endX * (n - startY) == startX * (n - endY) and startX < endX:  # 오른쪽 위 꼭지점
            diff = min(diff, (startX + endX) ** 2 + (2 * n - startY - endY) ** 2)
        if (m - endX) * (n - startY) == (m - startX) * (n - endY) and (m - startX) < (
            m - endX
        ):  # 오른쪽 아래 꼭지점
            diff = min(
                diff, (2 * m - startX - endX) ** 2 + (2 * n - startY - endY) ** 2
            )
        answer.append(diff)
    return answer


# 맞추고자 하는 벽을 기준으로 시작점을 대칭이동한 후 직선거리를 잰다. 사방으로 직선거리를 재서 그 최솟값을 구해주는 것이 중요한듯.
# 꼭짓점에 맞는경우 절반거리만큼만 나오기 때문에 비례관계만 성립시키면됨.


print(solution(3, 3, 5, 6, [[1, 2], [3, 4]]))
