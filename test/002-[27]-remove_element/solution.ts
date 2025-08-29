const nums: number[] = [0,1,2,2,3,0,4,2];
const val: number = 2;

function removeElement(nums: number[], val: number): number {
  let k: number = 0;

  for (const num of nums) {
    if (num !== val) {
      nums[k] = num;
      k++;
    }
  }

  return k;
};

console.log(removeElement(nums, val));
console.log(nums);
