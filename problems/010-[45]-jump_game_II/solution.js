/**
 * @param {number[]} nums
 * @return {number}
 */
export const jump = function(nums) {
  if (nums.length === 1) return 0;

  const maxIndices = nums.map((num, index) => num + index);

  let hops = 1;
  let end = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    farthest = Math.max(fa)
    reachableIndices = maxIndices.slice(maxIndexReached, maxIndices[maxIndexReached] + 1);
    maxIndexReached = Math.max(...reachableIndices);
  }

  return hops;
};

const testNums1 = [2,3,1,1,4];
console.log(jump(testNums1));

const testNums2 = [2,3,0,1,4];
console.log(jump(testNums2));

const testNums3 = [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3];
console.log(jump(testNums3));

const testNums4 = [1,2,3];
console.log(jump(testNums4));

const testNums5 = [1,2];
console.log(jump(testNums5));

const testNums6 = [1,1,1,1,1];
console.log(jump(testNums6));
