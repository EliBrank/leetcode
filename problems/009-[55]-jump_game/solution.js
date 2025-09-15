/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const reachableIndices = nums.map((num, index) => {
    return num + index;
  });


};


const testNums1 = [2,3,1,1,4];
canJump(testNums1);

const testNums2 = [3,2,1,0,4];
canJump(testNums2);
