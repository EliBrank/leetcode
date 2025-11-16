/**
 * @param {number[]} nums
 * @return {string[]}
 */
export const summaryRanges = function(nums) {
  let i = 0;
  const res = [];
  while (i < nums.length) {
    const startRange = nums[i];

    // Increment i through range of consecutive numbers
    while (nums[i + 1] === nums[i] + 1) i++;

    const endRange = nums[i];

    // Build range as string
    // Keep single number (startRange) if no change
    let currentRange = String(startRange);
    if (startRange !== endRange) {
      currentRange = startRange + '->' + endRange;
    }

    res.push(currentRange);

    i++;
  }

  return res;
};

console.log('CASE 1:');
const testNums1 = [0,1,2,4,5,7];
console.log(summaryRanges(testNums1));
// Output: ["0->2","4->5","7"]

console.log('CASE 2:');
const testNums2 = [0,2,3,4,6,8,9];
console.log(summaryRanges(testNums2));
// Output: ["0","2->4","6","8->9"]
