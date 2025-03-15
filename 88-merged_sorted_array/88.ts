/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i: number = m; i < (m + n); i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort();
};

const nums1: number[] = [1,2,3,0,0,0];
const m: number = 3;
const nums2: number[] = [2,5,6];
const n: number = 3;

merge(nums1, m, nums2, n);

console.log(nums1);
