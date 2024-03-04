func maxVowels(_ s: String, _ k: Int) -> Int
{
    (0...s.count).reduce(into: (s: Array(s + " "),
                                vowels: Set<Character>("aeiou"), cnt: 0, max: 0))
    {
        data, idx in
        (data.cnt, data.max) =
        (data.cnt + (data.vowels.contains(data.s[idx]) ? 1 : 0) -
         (idx >= k && data.vowels.contains(data.s[idx-k]) ? 1 : 0),
         max(data.max, data.cnt))
    }.max
}

