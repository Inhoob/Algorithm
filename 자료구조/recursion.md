## 재귀함수 정의

함수에서 자기 자신을 리턴하는 함수

## 문자열 뒤집기

```javascript
function reverse(str) {
  //
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}
```

재귀함수는 성능이 반복문에 비해 좋지 않다. 함수를 반복적으로 호출하면, 스택에 쌓이는 메모리가 커지고, 호출 횟수가 많아지면 스택오버플로우가 발생할 수 있다.
