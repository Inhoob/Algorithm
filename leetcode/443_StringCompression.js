var compress = function (chars) {
  let slow = 0;
  let fast = 0;
  let len = chars.length;
  while (fast < len) {
    chars[slow] = chars[fast];
    count = 1;
    while (fast + 1 < len && chars[fast] === chars[fast + 1]) {
      fast += 1;
      count += 1;
    }

    if (count > 1) {
      let str = String(count);
      for (let i = 0; i < str.length; i++) {
        chars[slow + 1] = str[i];
        slow += 1;
      }
    }
    slow += 1;
    fast += 1;
  }
  return slow;
};
