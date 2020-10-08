/**
 *
 * traverse the array
 * find y by subtracting x from targetSum
 * if x is found in the hash table aka json object, put x and y in an array and return it
 * else put the value of x in json object.
 * @param {Array} - inputArray
 * @param {Number} - targetSum
 * @returns {Array} Single Dimensional Array of 2 numbers whose sum is equal to target sum
 *
 */

function twoNumberSum(inputArray, targetSum) {
  let xNumberConatiner = {}; //3

  //traverse through array
  for (let i = 0; i < inputArray.length; i++) {
    // find y by subtracting x from targetSum
    let yNumber = targetSum - inputArray[i]; //ynumber = 11-3=8

    // if x is found in the hash table aka json object, put x and y in an array and return it
    if (xNumberConatiner.hasOwnProperty(yNumber)) {
      return [inputArray[i], yNumber];
    } else {
      xNumberConatiner[inputArray[i]] = true;
    }
  }
  return [];
}

let inputArray = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 11;

let sumOutput = twoNumberSum(inputArray, targetSum);
console.log("sumOutput", sumOutput);
