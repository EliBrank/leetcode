/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const numsObj = {};
  const numsFiltered = [];
  let numsCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numsObj[nums[i]]) {
      numsObj[nums[i]] = 1;
      numsCount++;
    } else if (numsObj[nums[i]] === 1) {
      numsObj[nums[i]] = 2;
      numsCount++;
    }
  }

  for (let i of new Set(nums)) {
    for (let j = 0; j < numsObj[i]; j++) {
      numsFiltered.push(i);
    }
  }

  for (let i = 0; i < numsCount; i++) {
    nums[i] = numsFiltered[i];
  }

  return numsCount;
};


const testNums = [1,1,1,2,2,3];
console.log('CASE 1:');
console.log('number of significant entries:', removeDuplicates(testNums));
console.log('testNums array:', testNums);

console.log();

const testNums2 = [0,0,1,1,1,1,2,3,3];
console.log('CASE 2:');
console.log('number of significant entries:', removeDuplicates(testNums2));
console.log('testNums2 array:', testNums2);
