/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    const localTarget = target - numbers[i];
    let l = i + 1;
    let r = numbers.length - 1;

    if (numbers[l] === localTarget) return [i + 1, l + 1];
    if (numbers[r] === localTarget) return [i + 1, r + 1];

    while (l < r) {
      if (numbers[r] < localTarget || numbers[l] > localTarget) break;
      const halfDistance = ((r - l) / 2) > 1 ? ~~((r - l) / 2) : 1;
      const candidateIndex = l + halfDistance;

      if (numbers[candidateIndex] === localTarget) return [i + 1, candidateIndex + 1];
      if (numbers[candidateIndex] < localTarget) l += halfDistance;
      if (numbers[candidateIndex] > localTarget) r -= halfDistance;
    }
  }
};

console.log('CASE 1:');
const testNums1 = [2,7,11,15];
const testTarget1 = 9;
console.log(twoSum(testNums1, testTarget1));

console.log('CASE 2:');
const testNums2 = [2,3,4];
const testTarget2 = 6;
console.log(twoSum(testNums2, testTarget2));

console.log('CASE 3:');
const testNums3 = [-1,0];
const testTarget3 = -1;
console.log(twoSum(testNums3, testTarget3));

console.log('CASE 4:');
const testNums4 = [5, 25, 75];
const testTarget4 = 100;
console.log(twoSum(testNums4, testTarget4));

console.log('CASE 5:');
const testNums5 = [3,24,50,79,88,150,345];
const testTarget5 = 200;
console.log(twoSum(testNums5, testTarget5));
