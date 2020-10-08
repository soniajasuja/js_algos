/**
 * 
 * @param {Array} - inputArray 
 * @param {Number} - targetSum 
 * @returns {Array} - 2 Dimanesional Array of all the 3 numbers whose sum is equal to target sum
 */

function threeNumberSum(inputArray, targetSum) {
  // let xNumberConatiner = {}

  //Bubble sort of Input array

  let sortedArray = bubbleSort(inputArray);
  console.log ('sorting of array', sortedArray)

  let outputArray = [];
  //traverse through array

  for (let i = 0; i < sortedArray.length; i++) {
    let firstNumber = sortedArray[i];

    for (let j = i + 1; j < sortedArray.length; j++) {
      let secondNumber = sortedArray[j];

      for (let k = j + 1; k < sortedArray.length; k++) {
        let thirdNumber = sortedArray[k];

        if (targetSum === sortedArray[i] + sortedArray[j] + sortedArray[k]) {
          outputArray.push([sortedArray[i], sortedArray[j], sortedArray[k]]);
        }
      }
    }
  }

  return outputArray;
}

let inputArray = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 9;

let sumOutput = threeNumberSum(inputArray, targetSum);
console.log("sumOutput", sumOutput);


// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;