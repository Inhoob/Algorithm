function fibonacci(n) {
  cache = Array.from({ length: 101 }, () => -1);
  function iterate(n) {
    if (n < 2) return n;
    if (cache[n] != -1) {
      return cache[n];
    }
    cache[n] = iterate(n - 1) + iterate(n - 2);
    return cache[n];
  }
  return iterate(n);
}
