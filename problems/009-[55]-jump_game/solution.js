/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canJump = function(nums) {
  const reachableIndices = nums.map((num, index) => {
    return num + index;
  });

  const targetIndex = nums.length - 1;
  let start = 0;
  let furthest = nums[0];

  if (nums[start] >= targetIndex) return true;

  while (furthest < targetIndex) {
    const jumpRange = reachableIndices.slice(start, furthest + 1);
    const maxInWindow = Math.max(...jumpRange);
    if (maxInWindow <= furthest) {
      return false;
    } else {
      furthest = maxInWindow;
    }
    if (furthest >= targetIndex) return true;
    start = furthest - reachableIndices[start] + 1;
  }
};


const testNums1 = [2,3,1,1,4];
//                [2,4,3,4,8]
console.log(canJump(testNums1));

const testNums2 = [3,2,1,0,4];
//                [3,3,3,3,8]
console.log(canJump(testNums2));

const testNums3 = [1,2];
//                [1,3]
console.log(canJump(testNums3));

const testNums4 = [1,1,1,0];
//                [1,2,3,3]
console.log(canJump(testNums4));

const testNums5 = [5, 9,3,2,1,0,2, 3, 3, 1, 0, 0];
//                [5,10,5,5,5,5,8,10,11,10,10,11]
console.log(canJump(testNums5));

