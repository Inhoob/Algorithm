var uniqueOccurrences = function (arr) {
  const freq = new Map();
  for (const x of arr) {
    freq.set(x, (freq.get(x) || 0) + 1);
  }

  const s = new Set(freq.values());
  return freq.size === s.size;
};
