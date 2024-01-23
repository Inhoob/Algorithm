var canPlaceFlowers = function (flowerbed, n) {
  let newFlowerBed = [0, ...flowerbed, 0].join("");

  while (newFlowerBed.includes("000")) {
    newFlowerBed = newFlowerBed.replace("000", "010");
    n--;
  }

  return n <= 0;
};
