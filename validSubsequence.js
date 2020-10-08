/**
 * fetch first element from sequence and check against main array to find its there. 
 * and then sorte the position from 1st array in a variable
 * 
 * @param {Array} array - input array
 * @param {Array} sequence - sequence array
 * @returns {Boolean} - tells if the sequence array is a subsequence of array
 */

function isValidSubsequence(array, sequence) {
  let sequenceIndex = 0;
    for (const arrayValue of array) {
      if (sequenceIndex===sequence.length) break;
      if (sequence[sequenceIndex]===arrayValue) sequenceIndex++
    }
    return sequenceIndex===sequence.length;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;

let inputArray = [5, 1, -4, 11, 9, 3, 6];
let sequence = [1, -4, 6, 9, 10];


console.log (isValidSubsequence(inputArray,sequence))