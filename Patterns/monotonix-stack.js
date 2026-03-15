/**
 * Why Use a Monotonic Stack?
 * It helps you efficiently find:
 * Next Greater Element (NGE)
 * Next Smaller Element
 * Previous Greater / Smaller
 * Range contributions (area, spans, max/min ranges)
 * All in O(n) time.
*/

// Next Greater Element (NGE)
function nextGreaterElement(nums) {
  let stack = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      result.push(nums[i]);
    }
  }
  return result;
}

// Next Smaller Element
function nextSmallerElement(nums) {
  let stack = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
      result.push(nums[i]);
    }
  }
}