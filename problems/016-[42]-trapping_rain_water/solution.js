/**
 * @param {number[]} height
 * @return {number}
 */
export const trap = function(height) {
  // Define left, right pointer variables
  let l = 0;
  let r = height.length - 1;
  // Initialize max values each pointer encounters
  // These are basically the left, right 'walls' of a local container
  let maxL = height[l];
  let maxR = height[r];
  // Variable to be returned
  let water = 0;

  while (l < r) {
    // maxHeight is height of local container of water
    let maxHeight = Math.min(maxL, maxR);

    // At position, move pointer with smaller value inward (right pointer if equal)
    if (height[l] < height[r]) {
      // Move pointer
      l++;
      // Update total water based on number of empty spaces under maxHeight
      // i.e. how much space would be filled with water
      water += Math.max(0, maxHeight - height[l]);
      // Update left 'wall' if larger
      maxL = Math.max(maxL, height[l]);
    } else {
      // Repeat logic for right pointer
      r--;
      water += Math.max(0, maxHeight - height[r]);
      maxR = Math.max(maxR, height[r]);
    }
  }

  return water;
};

const testHeight1 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(testHeight1));

const testHeight2 = [4,2,0,3,2,5];
console.log(trap(testHeight2));
