/**
 * @param {number[]} nums
 * @return {number}
 */
export const jump = function(nums) {
  const reachableIndices = nums.map((num, index) => {
    return num + index;
  });

  // [ 7,  1, 11, 9, 13, 11, 7, 14, 17, 9, 11, 13, 21, 13, 17 ]

  let current = 0;
  let window = 0;
  let hops = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    current = Math.max(current, reachableIndices[i]);
    if (i === window) {
      hops++;
      window = current;
    }
  }

  return hops;
};

const testNums1 = [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3];
console.log(jump(testNums1));
