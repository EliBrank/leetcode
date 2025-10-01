/**
 * @param {number[]} height
 * @return {number}
 */
export const maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;

  let containerWidth = r - l;
  let containerHeight = Math.min(height[l], height[r]);

  let maxWater = containerWidth * containerHeight;

  while (l < r) {
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }

    containerWidth = r - l;
    containerHeight = Math.min(height[l], height[r]);
    maxWater = Math.max(maxWater, (containerWidth * containerHeight));
  }

  return maxWater;
};

console.log('CASE 1:');
const testArr1 = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(testArr1));

console.log('CASE 2:');
const testArr2 = [1,1];
console.log(maxArea(testArr2));
