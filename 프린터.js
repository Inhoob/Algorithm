function solution(priorities, location) {
  let arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  let q = [];
  while (arr.length > 0) {
    let firstEle = arr.shift();
    let hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      q.push(firstEle);
    }
  }
  return q.findIndex((queueEle) => queueEle.index === location) + 1;
}
