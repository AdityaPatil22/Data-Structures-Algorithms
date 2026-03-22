/**
💡 Core Idea

A palindrome mirrors around its **center**.
So instead of generating all substrings (O(n³)), we:

* Pick a center
* Expand outward while characters match

🧠 Key Insight

A palindrome can have:

1. **Odd length** → center is a single character
   Example: `"aba"` → center = `b`

2. **Even length** → center is between two characters
   Example: `"abba"` → center between `b` and `b`

👉 So for every index `i`, we check:

* Expand from `(i, i)` → odd case
* Expand from `(i, i+1)` → even case

⚙️ Algorithm Steps

For each index `i`:

1. Expand left and right pointers
2. While:

   * left >= 0
   * right < length
   * s[left] === s[right]
3. Keep expanding
4. Track the longest palindrome found

*/

// ## ✍️ Code (JavaScript)


var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // length of palindrome
    };

    for (let i = 0; i < s.length; i++) {
        let len1 = expand(i, i);     // odd length
        let len2 = expand(i, i + 1); // even length

        let maxLen = Math.max(len1, len2);

        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end + 1);
};

/**
## ⏱ Complexity

* **Time:** O(n²)
* **Space:** O(1)

🔥 Why This Is Important (Interviews)

This pattern is asked a LOT because:

* It avoids brute force
* Shows understanding of palindrome properties
* Easier than DP, but still efficient

🧩 Intuition Trick

Think like this:
> “Every palindrome grows from the middle outward”
Not:
> “Check every substring”

*/

// Example
```
Input: "babad"

Check centers:
i=0 → "b"
i=1 → "bab"
i=2 → "aba"
i=3 → "a"
i=4 → "d"

Answer: "bab" or "aba"
```

