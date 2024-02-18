const findDifference = (a, b) => {
  a = new Set(a);
  b = new Set(b);
  a.forEach((i) => b.delete(i) && a.delete(i));
  return [[...a], [...b]];
};
