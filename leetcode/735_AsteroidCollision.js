var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let asteroid = asteroids[i];
    if ((stack.length === 0 || stack[stack.length - 1] < 0) && asteroid < 0) {
      stack.push(asteroid);
    } else if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      let contracted = stack.pop();
      if (Math.abs(contracted) > Math.abs(asteroid)) {
        stack.push(contracted);
      } else if (Math.abs(contracted) < Math.abs(asteroid)) {
        i--;
      } else {
        continue;
      }
    }
  }
  return stack;
};
