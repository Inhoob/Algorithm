
class Solution {
    func decodeString(_ s: String) -> String {
    var answer = ""
    var currentNumber = 0
    var numStack: [Int] = []
    var strStack: [String] = []

    for char in s {
        if let num = Int(String(char)) {
            currentNumber = currentNumber * 10 + num
        } else if char == "[" {
            numStack.append(currentNumber)
            strStack.append(answer)
            currentNumber = 0
            answer = ""
        } else if char == "]" {
            if let num = numStack.popLast() {
                let lastStr = strStack.popLast() ?? ""
                answer = lastStr + String(repeating: answer, count: num)
            }
        } else {
            answer += String(char)
        }
    }

    return answer
}

}