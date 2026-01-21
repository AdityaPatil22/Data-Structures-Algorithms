// Kadane’s Algorithm is used to find the maximum sum of a contiguous subarray within a one-dimensional array of numbers.

// Step-by-step Logic
// Initialize:
// - currentSum → max sum ending at current index
// - maxSum → overall maximum sum found so far
// Traverse the array:
// - Update currentSum
// - Update maxSum if currentSum is larger
// Return maxSum

function kadanesAlgorithm(arr) {
    let currentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
