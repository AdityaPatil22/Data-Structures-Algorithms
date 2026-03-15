// A prefix sum array stores the cumulative sum of elements up to each index.
// It is used to answer range queries efficiently.

// Example:
// Input: [1, 2, 3, 4, 5]
// Prefix sum array: [1, 3, 6, 10, 15]

// Time complexity: O(1)
// Space complexity: O(n)

const nums = [2, 4, 1, 3];
const prefix = [];

prefix[0] = nums[0];
for (let i = 1; i < nums.length; i++) {
  prefix[i] = prefix[i - 1] + nums[i]; 
}

console.log(prefix); // [2, 6, 7, 10]


// Range Sum Query Example
// Sum from index l = 1 to r = 3

function rangeSum(prefix, l, r) {
    if (l === 0) return prefix[r];
    return prefix[r] - prefix[l - 1];
  }
  
rangeSum(prefix, 1, 3); // 8 (4 + 1 + 3)
  