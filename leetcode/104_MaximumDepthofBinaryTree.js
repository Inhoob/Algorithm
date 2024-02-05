var maxDepth = function (root) {
  if (root === null) return 0;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1; // Adding 1 is the current node which is the parent of the two subtrees...
};
