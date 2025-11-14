/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export const containsNearbyDuplicate = function(nums, k) {
  let l = 0;
  let r = 0;

  const numSet = new Set();

  // Main loop for moving through nums
  while (r < nums.length) {
    // Move left pointer if distance between pointers reaches k
    if (r - l > k) {
      // Remove left pointer value before shifting it
      numSet.delete(nums[l]);
      l++;
    }

    // If set already has right pointer value, nums contains nearby duplicate
    if (numSet.has(nums[r])) return true;
    // Else, add the right pointer value then increment the pointer
    numSet.add(nums[r]);
    r++;
  }

  return false;
};

console.log('CASE 1:');
const testNums1 = [1,2,3,1];
const testK1 = 3;
console.log(containsNearbyDuplicate(testNums1, testK1));
// Output: true

console.log('CASE 2:');
const testNums2 = [1,0,1,1];
const testK2 = 1;
console.log(containsNearbyDuplicate(testNums2, testK2));
// Output: true

console.log('CASE 3:');
const testNums3 = [1,2,3,1,2,3];
const testK3 = 2;
console.log(containsNearbyDuplicate(testNums3, testK3));
// Output: false
