/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  numsSet = Array.from(new Set(nums));

  for (let i = 0; i < numsSet.length; i++) {
    nums[i] = numsSet[i];
  }

  return numsSet.length;
};

const testNums = [1,1,2];
console.log('Case 1:', removeDuplicates(testNums));
console.log('testNums array:', testNums);

console.log();

const testNums2 = [0,0,1,1,1,2,2,3,3,4];
console.log('Case 2:', removeDuplicates(testNums2));
console.log('testNums2 array:', testNums2);

console.log();

const testNums3 = [0,0,0,0,3];
console.log('Case 3:', removeDuplicates(testNums3));
console.log('testNums3 array:', testNums3);
