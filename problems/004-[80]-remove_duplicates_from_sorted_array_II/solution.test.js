import { removeDuplicates } from "./solution.js";

test("CASE 1", () => {
  let nums1 = [1,1,1,2,2,3];
  expect(removeDuplicates(nums1)).toBe(5);
  expect(nums1.slice(0,5)).toEqual([1,1,2,2,3]);
});

test("CASE 2", () => {
  let nums2 = [0,0,1,1,1,1,2,3,3];
  expect(removeDuplicates(nums2)).toBe(7);
  expect(nums2.slice(0,7)).toEqual([0,0,1,1,2,3,3]);
});
