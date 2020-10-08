function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

let productArray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
console.log(arraySum(array));

function productSum(productArray, multiplier = 1) {
  let sum = 0;
  for (let i = 0; i < productArray.length; i++) {
    if (Array.isArray(productArray[i])) {
      sum = sum + productSum(productArray[i], multiplier +1);
    } else {
      sum = sum + productArray[i];
    }
  }
  return multiplier * sum;
}