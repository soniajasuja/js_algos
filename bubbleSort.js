/**
 * 
 * @param {Array} - input Array which might be unsorted
 * @return {Array} - Sorted Array
 */
//bubble sort function
function bubbleSort(inputArray) {
  let isSwappingRequired= true
  let counterCycle = 0
  while (isSwappingRequired) {
    isSwappingRequired= false
    for (let j = 0; j < inputArray.length-counterCycle; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        isSwappingRequired= true
        let temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      }
    }
    counterCycle= counterCycle+1
  }
  return inputArray;
}

let inputArray = [3, 5, -4, 8, 11, 1, -1, 6]
console.log(bubbleSort(inputArray))


// function bubbleSort(inputArray) {
//   for (let i=0; i<inputArray.length; i++) {
//     if (inputArray[i]> inputArray[i+1]) {
//       inputArray[i] = inputArray[i+1]
//       inputArray[i+1] = inputArray[i]
//     }
//   }
// }