/**
 * It involves creating a window (a subset of the array or string) that slides over the input 
 * to examine different parts—often maintaining some property like sum, length, or count
 * 
 * Use it when: You're asked to find subarrays/substrings of a certain length or condition
 * Types of Sliding Window: Fixed-size Window and Variable size window
 * 
 * Time complexity: O(n) or O(n + m)
 */

// Fixed size sliding window
function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // add next, remove first
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9


// Varible size sliding window
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")








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