/**
 * Sliding window is used when you’re dealing with:
 * Subarrays / substrings
 * Continuous elements
 * A window that expands or shrinks while moving forward
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
*/

// There are two main types. This distinction is SUPER important.
// 1. Fixed size window
// 2. Variable size window

// Fixed size window
function maxSubarraySum(nums, k) {
    let windowSum = 0;
    let maxSum = 0;
  
    // first window
    for (let i = 0; i < k; i++) {
      windowSum += nums[i];
    }
    maxSum = windowSum;
  
    // slide the window
    for (let i = k; i < nums.length; i++) {
      windowSum += nums[i];        // add right
      windowSum -= nums[i - k];    // remove left
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
// Variable size window
function longestSubarray(nums, k) {
    let left = 0;
    let sum = 0;
    let maxLen = 0;
  
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];
  
      while (sum > k) {
        sum -= nums[left];
        left++;
      }
  
      maxLen = Math.max(maxLen, right - left + 1);
    }
  
    return maxLen;
  }
  
// Right pointer expands the window
// Left pointer fixes the window